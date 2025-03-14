import {useState} from "react";

export default function UserMessageBox({message}: {message: string}) {

    const [text, setText] = useState(message);

    return (
        <div className={`text-dark-alt rounded-br-none justify-self-end
         flex justify-end p-3 pl-5 pr-5 font-primary text-xl h-auto
         border-solid outline-2 rounded-4xl m-5 bg-femboy`}>
            <p className="break-all whitespace-pre-wrap">{text}</p>
        </div>
    )
}