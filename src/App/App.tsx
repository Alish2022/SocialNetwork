import React from 'react';
import './App.css';
import Header from './Header/Header'
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from './Music/Music';
import News from './News/News';
import Settings from "./Settings/Settings";

const App = () => {
    return (
        <BrowserRouter>
            <div className={"app"}>
                <Header/>
                <Nav/>
                <div className={"appWrapperContent"}>
                    <Routes>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/dialogs" element={<Dialogs/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
