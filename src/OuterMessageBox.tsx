import {useState} from "react";

export default function OuterMessageBox({message, user}: {message: string, user: string}) {

    const [text, setText] = useState(message);

    return (
        <div
            className={`text-femboy  justify-self-start flex flex-col justify-start font-primary text-xl  m-5 `}>
            <h1 className="float-start text-lg ml-2">{user}</h1>
            <p className="p-3 pl-5 pr-5 h-auto border-solid outline-2 outline-femboy rounded-4xl rounded-bl-none bg-element-dark">{text}</p>
        </div>
    )
}