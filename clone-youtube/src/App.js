import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomeContent from "./component/content/homecontent/HomeContent";
import ShortPage from "./component/content/shortspage/ShortPage";
import Header from "./component/header/Header";
import Sidebar from "./component/sidebar/Sidebar";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Sidebar></Sidebar>
            <Routes>
                <Route path="/" element={<HomeContent />}></Route>
                <Route path="/short" element={<ShortPage />}></Route>
            </Routes>
        </div>
    );
}

export default App;
