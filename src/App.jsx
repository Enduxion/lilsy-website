import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import StaticBackground from "./components/Background";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <StaticBackground />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;