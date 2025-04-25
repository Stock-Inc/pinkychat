import {useState} from "react";
import useFormattedTime from "../../utils/useFormattedTime.ts";

export default function UserMessageBox({message, date}: {message: string, date: number}) {

    const [text, setText] = useState(message);

    const time = new Date(date * 1000);

    return (
        <div className={`justify-self-end flex-col
         flex justify-end font-primary max-sm:text-lg text-xl m-5`}>
            <h1 className="text-femboy place-self-end">at {useFormattedTime(time)}</h1>
            <p className="bg-femboy border-solid p-3 pl-5 pr-5 max-sm:p-2 max-sm:pl-3 max-sm:pr-3  h-auto outline-2 rounded-4xl text-dark-alt rounded-br-none break-all whitespace-pre-wrap">{text}</p>
        </div>
    );
}