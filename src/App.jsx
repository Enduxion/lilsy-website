import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import StaticBackground from "./components/Background";
import Products from "./pages/Products";
import Product from "./pages/Product";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <StaticBackground />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} /> 
                <Route path="/product/:id" element={<Product />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;