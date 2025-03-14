import {useState} from "react";

export default function OuterMessageBox({message}: {message: string}) {

    const [text, setText] = useState(message);

    return (
        <div
            className={`text-femboy rounded-bl-none justify-self-start flex justify-start p-3 pl-5 pr-5 font-primary text-xl h-auto border-solid outline-2 outline-femboy rounded-4xl m-5 bg-element-dark`}>
            <p>{text}</p>
        </div>
    )
}