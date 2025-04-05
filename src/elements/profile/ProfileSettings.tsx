import {OnClickCallback} from "../../App.tsx";
import {ChangeEvent, useState} from "react";

export default function ProfileSettings({username, callback}: {username: string, callback: OnClickCallback}) {

    const [newUsername, setNewUsername] = useState(username)

    function handleNameChange(e:ChangeEvent<HTMLInputElement>) {
        setNewUsername(e.target.value);
    }

    return (
        <div className="text-femboy bg-sub-dark outline-2 outline-femboy-dark outline-solid place-self-center rounded-4xl p-5 mt-20 font-primary text-xl">
            <input className="text-femboy bg-sub-dark outline-2 outline-femboy-dark outline-solid place-self-center rounded-4xl p-3 mr-30" value={newUsername}
                   onChange={handleNameChange}/>
            <button onClick={() => callback(newUsername)} className="cursor-pointer">Change Profile Name</button>
        </div>
    )
}