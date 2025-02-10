import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import StaticBackground from "./components/Background";
import Products from "./pages/Products";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <StaticBackground />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;