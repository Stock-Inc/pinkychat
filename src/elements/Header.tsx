import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router";


function Header() {
    return (
        <header className="bg-sub-dark border-b-2 border-gray-800 pl-3 pr-3 pb-1">
            <div className="flex justify-between">
                <button className="text-white text-xl rounded-full p-4 m-2 hover:outline-gray-400 hover:outline-3
                font-primary outline-femboy outline-solid outline-2 cursor-pointer bg-element-dark w-16">
                    <FontAwesomeIcon icon={faBars} style={{color: "#ea96ad", scale: 1.3}} />
                </button>
                <Link to="/">
                    <h1 className="text-5xl font-primary text-center p-4 text-femboy font-semibold">Unnamed Chat [ ]</h1>
                </Link>
                <Link to="/profile">
                    <img alt="profile picture" src="https://placehold.co/65" className="rounded-full m-2 hover:outline-gray-400
                outline-femboy hover:outline-3 outline-solid outline-2 cursor-pointer"></img>
                </Link>
            </div>
        </header>
    );
 }

 export default Header;