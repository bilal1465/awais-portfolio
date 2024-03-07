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
            <h1 className="w-full text-3xl text-center">Awais</h1>
            <div className="w-full text-right space-x-4">
                <button>
                    <FaInstagram size={40}/>
                </button>
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