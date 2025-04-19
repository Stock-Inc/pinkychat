import Header from "../elements/Header.tsx";
import ProfileSettings from "../elements/profile/ProfileSettings.tsx";
import {OnClickCallback} from "../App.tsx";

export default function ProfilePage({username, callback}: {username: string, callback: OnClickCallback}) {
    return (
        <>
            <Header/>
            <ProfileSettings callback={callback} username={username}/>
        </>
    )
}