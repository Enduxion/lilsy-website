import { Link } from "react-router-dom";
import SocialMedia from "../components/SocialMedia";

const Home = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden w-full relative">
            <h1 className="text-5xl md:text-6xl font-dancing text-highlight drop-shadow-md">
                Handmade with Love
            </h1>
            <div className="text-lg mt-4 flex flex-col gap-1 items-center" >
                <div>
                    Welcome to <Link className="font-dancing text-xl underline text-highlight" to="/" target="_blank">Lilsy</Link>, a crochet business founded by <Link className="font-dancing text-xl underline text-highlight" to="https://www.instagram.com/niissshhhaa/" target="_blank">Nisha Thapa</Link>
                </div>
                <div>
                    Explore our collection of handmade crochet pieces. A perfect gift or personal keepsake.
                </div>
                <Link className="btn mt-6" to="/products">Browse Products</Link>
            </div>
            <SocialMedia />
        </div>
    );
};

export default Home;
