import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { BiBold } from "react-icons/bi";

export const NavBar = () => {
    return(
        <div className='grid grid-cols-3 text-white items-center bg-black p-4 h-18'>
            <div className="w-full text-3xl space-x-4">
                <a className="border-2 p-1">Photos</a>
                <a className="border-2 p-1">Videos</a>
            </div>
            <a className="w-full text-3xl text-center" href="/">Awais</a>
            <div className="w-full text-right space-x-4">
                <a target="_blank" href="https://www.instagram.com/awais_mu/">
                <button>
                    <FaInstagram size={40}/>
                </button>
                </a>
                <button>
                    <FaTiktok size={40}/>
                </button>
                <button>
                    <CiMail size={40} />
                </button>
            </div>
        </div>
    )
}