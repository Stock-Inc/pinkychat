
function ChatButton({chatName, previousMessage}: {chatName: string, previousMessage: string}) {
    return (
        <div className="m-5 p-2 text-xl font-primary border-2 border-femboy rounded-xl cursor-pointer">
            <p>{chatName}</p>
            <p className="text-lg">{previousMessage}</p>
        </div>
    );
}

export default ChatButton;