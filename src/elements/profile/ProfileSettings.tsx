import {ChangeEvent, useState} from "react";
import {useAppStore} from "../../utils/Zustand.ts";

export default function ProfileSettings() {

    const [newUsername, setNewUsername] = useState('');

    function handleNameChange(e:ChangeEvent<HTMLInputElement>) {
        setNewUsername(e.target.value);
    }

    return (
        <div className="text-femboy bg-sub-dark outline-2 outline-femboy-dark outline-solid place-self-center rounded-4xl p-5 mt-20 font-primary text-xl max-sm:flex flex-col">
            <input aria-label="Username field"
                   className="text-femboy bg-sub-dark outline-2 outline-femboy-dark outline-solid place-self-center rounded-4xl p-3 sm:mr-30"
                   value={newUsername}
                   onChange={handleNameChange}/>
            <button onClick={() => {
                useAppStore.getState().setUsername(newUsername);
                setNewUsername('');
            }} className="cursor-pointer max-sm:mt-3">Change Profile Name</button>
        </div>
    );
}