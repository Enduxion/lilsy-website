import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex w-full bg-transparent justify-between items-center px-4">
            <Link className="link" to="/">Products</Link>
            <Link className="font-dancing text-2xl font-bold hover:tracking-wider duration-150 ease-in-out" to="/">Lilsy</Link>
            <Link className="link" to="/">About</Link>
        </nav>
    );
}

export default Navbar;