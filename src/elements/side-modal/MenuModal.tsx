import ChatButton from "./ChatButton.tsx";

function MenuModal() {

    return (
        <div className="border-r-2 border-r-gray-800 bg-sub-dark text-femboy fixed h-screen">
            <ChatButton chatName="Mark"/>
            <ChatButton chatName="Group"/>
            <ChatButton chatName="Test"/>
            <ChatButton chatName="Hello World"/>
        </div>
    );
}

export default MenuModal;