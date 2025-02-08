import { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";

import { Link } from "react-router-dom";

const SocialMedia = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [links, setLinks] = useState([]);

    useEffect(() => {

    }, []);

    return (
        isOpen ? (
            <div className="bg-white/20 backdrop-blur-sm w-fit h-fit flex flex-col gap-2 p-4 rounded-md absolute bottom-0 right-0 mb-4 mr-4">
                <div className="flex flex-row justify-between items-center gap-10">
                    <span className="">Social Media</span>
                    <GrClose onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-text" />
                </div>
                <div className="flex w-full">
                    <Link to="https://www.instagram.com/lilsy.official/" target="_blank" className="link flex flex-row items-center gap-2">
                        <FaInstagram />Instagram
                    </Link>
                </div>
            </div>
        ) : (
            <div className="absolute bottom-0 right-0 mb-4 mr-4 rounded-full w-12 aspect-square flex justify-center items-center text-lg border-[1px] border-highlight cursor-pointer shadow-md hover:text-primary font-dancing hover:bg-highlight text-highlight transition-all duration-150 ease-in-out" onClick={() => setIsOpen(true)}>
                Lilsy
            </div>
        )
    );
}

export default SocialMedia;