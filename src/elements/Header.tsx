import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faUser} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router";
import {useAppStore} from "../utils/Zustand.ts";
import MenuModal from "./side-modal/MenuModal.tsx";


function Header() {

    const {isModalOpen, toggleModal} = useAppStore();

    return (
        <>
            <header className="bg-sub-dark border-b-2 border-gray-800 pl-3 pr-3 pb-1">
                <div className="flex justify-between">
                    <button className="text-white text-xl rounded-full max-sm:p-2 p-4 m-3 hover:outline-gray-400 hover:outline-3
                font-primary outline-femboy outline-solid outline-2 cursor-pointer bg-element-dark w-fit h-fit place-self-center" onClick={toggleModal}>
                        <FontAwesomeIcon className="ml-1 mr-1" icon={faBars} style={{color: "#ea96ad", scale: 1.3}} />
                    </button>
                    <Link to="/">
                        <h1 className="text-5xl max-sm:text-2xl font-primary text-center p-4 text-femboy font-semibold">Unnamed Chat [&nbsp;]</h1>
                    </Link>
                    <Link className="text-femboy text-xl rounded-full max-sm:p-2 p-4 m-3 hover:outline-gray-400 hover:outline-3
                font-primary outline-femboy outline-solid outline-2 cursor-pointer bg-element-dark w-fit h-fit place-self-center" to="/profile">
                        <FontAwesomeIcon className="ml-1 mr-1" icon={faUser} />
                    </Link>
                </div>
            </header>
            {isModalOpen && <MenuModal/>}
        </>

    );
 }

 export default Header;