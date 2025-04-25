import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faHeart, faHeartCircleCheck, faUser} from "@fortawesome/free-solid-svg-icons";
import {ChangeEvent, FormEvent, useState} from "react";
import {useAppStore} from "../utils/Zustand.ts";
import {useNavigate} from "react-router";

function SignUp() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const navigate = useNavigate();

    const setAccessToken = useAppStore.getState().setAccessToken;
    const setUserName = useAppStore.getState().setUsername;

    function handleNameChange(e:ChangeEvent<HTMLInputElement>){
        setName(e.target.value);
    }

    function handlePasswordChange(e:ChangeEvent<HTMLInputElement>){
        setPassword(e.target.value);
    }

    function handleEmailChange(e:ChangeEvent<HTMLInputElement>){
        setEmail(e.target.value);
    }

    function handleRepeatPasswordChange(e:ChangeEvent<HTMLInputElement>){
        setRepeatPassword(e.target.value);
    }

    async function signUp() {
        const response= await fetch("https://api.femboymatrix.su/auth/sign-up", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                username: name,
                email: email,
                password: password
            })
        }).catch().then();

        let newToken;

        if ("json" in response) {
            const jsonResponse = await response.json();
            newToken = jsonResponse.token !== undefined ? jsonResponse.token : null;
            setAccessToken(newToken);
            setUserName(name);
            navigate('/');
        }
    }

    function handleSubmit(e:FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (name.trim() !== '' && password.trim() !== '' && password === repeatPassword) {
            signUp();
        }
    }

    return (
        <div className="h-screen flex flex-col justify-center font-primary text-femboy text-2xl">
            <form aria-label="Signup form" onSubmit={handleSubmit} className="bg-sub-dark border-gray-800 border-2 border-solid flex flex-col w-fit text-center place-self-center rounded-2xl p-10">
                <div className="m-3 pl-4 bg-element-dark rounded-4xl border-femboy border-2 border-solid">
                    <FontAwesomeIcon className="mr-2" icon={faUser} />
                    <input className="p-3 focus:outline-none" placeholder="Username" value={name} onChange={handleNameChange} type="text"/>
                </div>
                <div className="m-3 pl-4 bg-element-dark rounded-4xl border-femboy border-2 border-solid">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <input className="p-3 focus:outline-none" placeholder="Email" value={email} onChange={handleEmailChange} type="email"/>
                </div>
                <div className="m-3 pl-4 bg-element-dark rounded-4xl border-femboy border-2 border-solid">
                    <FontAwesomeIcon className="mr-2" icon={faHeart} />
                    <input className="p-3 focus:outline-none" placeholder="Password" value={password} onChange={handlePasswordChange} type="password"/>
                </div>
                <div className="m-3 pl-4 bg-element-dark rounded-4xl border-femboy border-2 border-solid">
                    <FontAwesomeIcon icon={faHeartCircleCheck} />
                    <input className="p-3 focus:outline-none" placeholder="Repeat Password" value={repeatPassword} onChange={handleRepeatPasswordChange} type="password"/>
                </div>
                <input className="m-3 p-2 bg-element-dark rounded-4xl cursor-pointer hover:bg-femboy hover:text-element-dark" type="submit"/>
            </form>
        </div>
    );
}

export default SignUp;