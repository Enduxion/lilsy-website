import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { socialMediaLinks } from "../assets/data/data";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const SocialMedia = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {!isOpen && (
                <motion.div
                    className="absolute bottom-0 right-0 mb-4 mr-4 rounded-full w-12 aspect-square flex justify-center items-center text-lg border-[1px] border-highlight cursor-pointer shadow-md hover:text-primary font-dancing hover:bg-highlight text-highlight transition-all duration-150 ease-in-out"
                    onClick={() => setIsOpen(true)}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                >
                    Lilsy
                </motion.div>
            )}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="bg-white/20 backdrop-blur-sm w-fit h-fit flex flex-col gap-2 p-4 rounded-lg absolute bottom-0 right-0 mb-4 mr-4 origin-bottom-right z-10"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="flex flex-row justify-between items-center gap-10">
                            <span className="text-lg">Social Media</span>
                            <GrClose
                                onClick={() => setIsOpen(false)}
                                className="cursor-pointer hover:text-text"
                            />
                        </div>
                        <div className="flex w-full flex-col gap-2">
                            {socialMediaLinks.map(({ name, link, icon: Icon }) => (
                                <Link key={name} to={link} target="_blank" className="flex flex-row items-center gap-2 link">
                                    <Icon />
                                    <span>{name}</span>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default SocialMedia;
