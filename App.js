import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LeftPage from "./pages/LeftPage";
import RightPage from "./pages/RightPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={LeftPage()}/>
                <Route path="/favorite" element={RightPage()}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
