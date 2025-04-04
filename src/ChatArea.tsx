import {ChangeEvent, KeyboardEvent, useEffect, useRef, useState} from "react";
import UserMessageBox from "./UserMessageBox.tsx";
import OuterMessageBox from "./OuterMessageBox.tsx";
import {messageArray} from "./MessageArray.tsx";

function ChatArea() {

    const [value, setValue] = useState('');
    const [messages, setMessages] = useState(messageArray);

    async function fetchMessages() {
        const response = await fetch("https://api.femboymatrix.su/chat");
        return await response.json();
    }

    useEffect(() => {
        fetchMessages().then((data) => {
            const newArray: any[] | ((prevState: string[]) => string[]) = []
            data.reverse().map((element) => {
                newArray.push(element.message);
            })
            setMessages(newArray);
        });
    }, [])

    const messageLog = document.getElementById("messageLog");

    const initialInputHeight:number = 52;

    const ref= useRef<HTMLTextAreaElement>(null);

    function handleMessage() {
        messageArray.push(value)
        fetch("https://api.femboymatrix.su/chat", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name: "penis",
                message: value
            })
        }).then((response) => response.json())
            .then((json) => console.log(json));
        setValue('');
        setMessages(messageArray)

        if (ref.current) {
            ref.current.style.height = "auto";
            ref.current.style.height = `${initialInputHeight}px`;
        }

        if (messageLog) {
            messageLog.scrollTop = messageLog.scrollHeight;
        }
    }

    const sendMessageEnter = (e:KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && value.trim() !== '' && !e.shiftKey) {
            e.preventDefault();
            handleMessage();
        }
    }

    const sendMessageAlt = () => {
        if (value !== '') {
            handleMessage()
        }
    }

    function handleInput (changeEvent: ChangeEvent<HTMLTextAreaElement>) {

        if (ref.current) {
            ref.current.style.height = "auto";
            ref.current.style.height = `${changeEvent.target.scrollHeight}px`;
        }
    }

    return (
        <>
            <div id="messageLog" className="h-202 overflow-auto
                [&::-webkit-scrollbar]:w-3
                [&::-webkit-scrollbar-track]:rounded-full
                [&::-webkit-scrollbar-track]:bg-femboy
                [&::-webkit-scrollbar-thumb]:rounded-full
                [&::-webkit-scrollbar-thumb]:bg-femboy-dark
                dark:[&::-webkit-scrollbar-track]:bg-femboy-dark
                dark:[&::-webkit-scrollbar-thumb]:bg-femboy">
                {messages.map((message) => (<OuterMessageBox message={message} />))}
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
                    text-xl mr-4 pt-3 p-2 pl-4 bg-element-darks resize-none
                    h-auto">
                </textarea>
                <button onClick={sendMessageAlt} className="outline-solid outline-femboy rounded-full font-primary text-m p-3 outline-2 text-white
                cursor-pointer hover:outline-gray-400 hover:outline-3 bg-element-dark text-xl">
                    Send
                </button>
            </footer>
        </>
    )
}

export default ChatArea;