
function ChatButton({chatName}: {chatName: string}) {
    return (
        <div className="m-5 p-2 text-xl font-primary border-2 border-femboy rounded-xl">
            <p>{chatName}</p>
        </div>
    );
}

export default ChatButton;