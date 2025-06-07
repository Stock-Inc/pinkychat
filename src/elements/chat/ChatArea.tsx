import {ChangeEvent, KeyboardEvent, useEffect, useRef, useState} from "react";
import UserMessageBox from "./UserMessageBox.tsx";
import OuterMessageBox from "./OuterMessageBox.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {useAppStore} from "../../utils/Zustand.ts";
import {Client} from "@stomp/stompjs";
import SockJS from "sockjs-client";

interface chatMessage {
    id: number,
    name: string,
    message: string,
    date: number
}

function ChatArea() {

    const stompClient = useRef<Client | null>(null);

    const defaultMessages:undefined|chatMessage[] = undefined;

    const localUserName = useAppStore((state) => state.username);

    const [value, setValue] = useState('');
    const [messages, setMessages] = useState<undefined|chatMessage[]>(defaultMessages);

    useEffect(() => {

        stompClient.current = new Client({
            webSocketFactory: () => new SockJS("https://api.femboymatrix.su/ws"),
            reconnectDelay: 5000,
            debug: (str) => console.log(str),

            onConnect: (frame) => {
                console.log("Connection established");
                console.log(frame);

                stompClient.current!.subscribe("/topic/message",
                    (message) => {
                        console.log(message);
                        const parsedMessage: chatMessage = JSON.parse(message.body);
                        console.log(parsedMessage);
                        setMessages(m => [...(m ?? []), parsedMessage]);
                    });

                stompClient.current!.subscribe("/topic/history",
                    (message) => {
                        console.log(message);
                        const parsedMessages: chatMessage[] = JSON.parse(message.body);
                        console.log(parsedMessages);
                        setMessages(parsedMessages.reverse());
                    });

                stompClient.current!.publish({destination: "/app/history", body: JSON.stringify([]), headers: {'content-type': 'application/json'}});


            },

            onStompError: (frame) => {
                console.log(`Error: ${frame}`);
            }
        });

        stompClient.current.activate();

        return () => {
            stompClient.current?.deactivate();
        };

    }, []);

    //scrolls down on message array change
    useEffect(() => {
        if (messageLog) {
            messageLog.scrollTop = messageLog.scrollHeight;
        }

        if (ref.current) {
            ref.current.style.height = "auto";
            ref.current.style.height = `${initialInputHeight}px`;
        }
    }, [messages]);

    const messageLog = document.getElementById("messageLog");

    const initialInputHeight:number = 52;

    const ref= useRef<HTMLTextAreaElement>(null);

    function handleMessage() {
        stompClient.current?.publish(
            {
                destination: "/app/chat",
                body: JSON.stringify(
                    {
                        name: localUserName,
                        message: value
                    }
                ),
                headers: {
                    'content-type': 'application/json'
                }
            }
        );
        setValue('');
    }

    const sendMessageEnter = (e:KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && value.trim() !== '' && !e.shiftKey) {
            e.preventDefault();
            handleMessage();
        }
    };

    const sendMessageAlt = () => {
        if (value.trim() !== '') {
            handleMessage();
        }
    };

    function handleInput (changeEvent: ChangeEvent<HTMLTextAreaElement>) {
        if (ref.current) {
            ref.current.style.height = "auto";
            ref.current.style.height = `${changeEvent.target.scrollHeight}px`;
        }
    }

    return (
        <>
            <div id="messageLog" className="h-[81vh] overflow-auto
                [&::-webkit-scrollbar]:w-3
                [&::-webkit-scrollbar-track]:rounded-full
                [&::-webkit-scrollbar-track]:bg-femboy
                [&::-webkit-scrollbar-thumb]:rounded-full
                [&::-webkit-scrollbar-thumb]:bg-femboy-dark
                dark:[&::-webkit-scrollbar-track]:bg-femboy-dark
                dark:[&::-webkit-scrollbar-thumb]:bg-femboy">
                {
                    messages === undefined ?
                        <div className="flex flex-col justify-center h-[81vh]">
                            <h1 className='text-center text-xl sm:text-3xl text-femboy font-primary'>Fetching Messages...</h1>
                        </div>
                        : messages.map((message:chatMessage) => (
                        message.name === localUserName ? <UserMessageBox key={message.id} date={message.date} message={message.message}/>
                            : <OuterMessageBox key={message.id} user={message.name} date={message.date} message={message.message} />
                    ))
                }
            </div>
            <footer className="absolute bottom-0 w-[100%] flex justify-evenly bg-sub-dark p-5 border-t-2 border-gray-800">
                <textarea
                    ref={ref}
                    rows={1}
                    onChange={e => setValue(e.target.value)}
                    onInput={handleInput}
                    value={value}
                    onKeyDown={sendMessageEnter}
                    id="input"
                    placeholder="Enter your message here. . ."
                    className="w-[95%] focus:outline-3 outline-2 outline-solid outline-femboy
                    font-primary text-femboy rounded-4xl
                    text-xl max-sm:text-lg mr-4 pt-3 p-2 pl-4 bg-element-darks resize-none
                    h-auto">
                </textarea>
                <button onClick={sendMessageAlt} className="outline-solid outline-femboy rounded-full h-14 w-14 font-primary text-m p-3 outline-2 text-white
                cursor-pointer hover:outline-gray-400 hover:outline-3 bg-element-dark text-xl">
                    <FontAwesomeIcon icon={faHeart} style={{color: "#eb96ad", scale: 1.3}} />
                </button>
            </footer>
        </>
    );
}

export default ChatArea;