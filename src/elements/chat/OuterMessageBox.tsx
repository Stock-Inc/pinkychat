import {useState} from "react";
import useFormattedTime from "../../utils/useFormattedTime.ts";

export default function OuterMessageBox({message, user, date}: {message: string, user: string, date:number}) {

    const [text, setText] = useState(message);

    const time = new Date(date * 1000);

    return (
        <div
            className={`text-femboy  justify-self-start flex flex-col justify-start font-primary text-xl max-sm:text-lg m-5`}>
            <h1 className="float-start text-lg ml-2">{user} at {useFormattedTime(time)}</h1>
            <p className="p-3 pl-5 pr-5 h-auto border-solid outline-2 outline-femboy rounded-4xl max-sm:p-2 max-sm:pl-3 max-sm:pr-3 rounded-bl-none w-fit bg-element-dark whitespace-pre-wrap">{text}</p>
        </div>
    );
}