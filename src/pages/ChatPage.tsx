import Header from "../elements/Header.tsx";
import ChatArea from "../elements/chat/ChatArea.tsx";

export default function ChatPage({username}: {username: string}) {
    return (
        <>
            <Header/>
            <ChatArea username={username}/>
        </>
    )
}