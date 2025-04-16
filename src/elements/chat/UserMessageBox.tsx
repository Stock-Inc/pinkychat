import {useState} from "react";

export default function UserMessageBox({message, date}: {message: string, date: number}) {

    const [text, setText] = useState(message);

    const time = new Date(date * 1000);

    function formatTime() {
        const hours = time.getHours();
        const minutes = time.getMinutes();

        return `${padZero(hours)}:${padZero(minutes)}`;
    }

    function padZero(num: number) {
        return (num < 10 ? `0${num}` : num.toString());
    }

    return (
        <div className={`justify-self-end flex-col
         flex justify-end font-primary text-xl m-5`}>
            <h1 className="text-femboy place-self-end">at {formatTime()}</h1>
            <p className="bg-femboy border-solid p-3 pl-5 pr-5  h-auto outline-2 rounded-4xl text-dark-alt rounded-br-none break-all whitespace-pre-wrap">{text}</p>
        </div>
    );
}