import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Site/pages/Home/Home";
import Add from "./Site/pages/Add/Add";
import Footer from "./Site/layout/Footer/Footer";
import Header from "./Site/layout/Heading/Header";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/add" element={<Add/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
