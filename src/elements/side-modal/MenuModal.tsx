import ChatButton from "./ChatButton.tsx";

function MenuModal() {

    return (
        <div role="dialog" className="border-r-2 border-r-gray-800 bg-sub-dark text-femboy fixed h-screen">
            <ChatButton chatName="Mark" previousMessage={"Hey!"}/>
            <ChatButton chatName="Group" previousMessage={"That was cool"}/>
            <ChatButton chatName="Test" previousMessage={"..."}/>
            <ChatButton chatName="Hello World" previousMessage={"..."}/>
        </div>
    );
}

export default MenuModal;