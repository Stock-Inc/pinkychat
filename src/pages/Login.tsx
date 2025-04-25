import {ChangeEvent, FormEvent, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faUser} from "@fortawesome/free-solid-svg-icons";
import {Link, useNavigate} from "react-router";
import {useAppStore} from "../utils/Zustand.ts";

function Login() {

    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const setUserName = useAppStore.getState().setUsername;
    const setAccessToken = useAppStore.getState().setAccessToken;

    function handleNameChange(e:ChangeEvent<HTMLInputElement>){
        setName(e.target.value);
    }

    function handlePasswordChange(e:ChangeEvent<HTMLInputElement>){
        setPassword(e.target.value);
    }

    async function signIn() {
        const response= await fetch("https://api.femboymatrix.su/auth/sign-in", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                username: name,
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

    function handleFormSubmit(e:FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (password !== '' && name !== '') {
            signIn();
        }
        else {
            return;
        }
    }

    return (
        <div className="h-screen flex flex-col justify-center font-primary text-femboy text-2xl">
            <form className="bg-sub-dark border-gray-800 border-2 border-solid flex flex-col w-fit text-center place-self-center rounded-2xl p-10" onSubmit={handleFormSubmit}>
                <div className="m-3 pl-4 bg-element-dark rounded-4xl border-femboy border-2 border-solid">
                    <FontAwesomeIcon className="mr-2" icon={faUser} />
                    <input className="p-3 focus:outline-none" placeholder="Username" value={name} onChange={handleNameChange} type="text"/>
                </div>
                <div className="m-3 pl-4 bg-element-dark rounded-4xl border-femboy border-2 border-solid">
                    <FontAwesomeIcon className="mr-2" icon={faHeart} />
                    <input className="p-3 focus:outline-none" placeholder="Password" value={password} onChange={handlePasswordChange} type="password"/>
                </div>
                <input aria-label="Login button" className="m-3 p-2 bg-element-dark rounded-4xl cursor-pointer hover:bg-femboy hover:text-element-dark" type="submit"/>
                <p className="text-lg mt-3" >Don't have an account?</p>
                <Link aria-label="Signup redirect" className="text-lg underline" to="/signup">Sign Up!</Link>
            </form>
        </div>
    );
}

export default Login;