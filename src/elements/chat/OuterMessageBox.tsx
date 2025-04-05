import {useState} from "react";

export default function OuterMessageBox({message, user, date}: {message: string, user: string, date:number}) {

    const [text, setText] = useState(message);

    const time = new Date(date * 1000)

    function formatTime() {
        const hours = time.getHours();
        const minutes = time.getMinutes();

        return `${padZero(hours)}:${padZero(minutes)}`
    }

    function padZero(num: number) {
        return (num < 10 ? `0${num}` : num.toString())
    }

    return (
        <div
            className={`text-femboy  justify-self-start flex flex-col justify-start font-primary text-xl  m-5`}>
            <h1 className="float-start text-lg ml-2">{user} at {formatTime()}</h1>
            <p className="p-3 pl-5 pr-5 h-auto border-solid outline-2 outline-femboy rounded-4xl rounded-bl-none w-fit bg-element-dark">{text}</p>
        </div>
    )
}