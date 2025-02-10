import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex w-full backdrop-blur-sm shadow-sm justify-between items-center px-4 py-1 fixed left-0 top-0 z-50">
            <Link className="link" to="/products">Products</Link>
            <Link className="font-dancing text-2xl font-bold hover:tracking-wider duration-150 ease-in-out" to="/">Lilsy</Link>
            <Link className="link" to="/about">About</Link>
        </nav>
    );
}

export default Navbar;