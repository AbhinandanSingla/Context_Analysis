import logo from "./assets/images/logo/logo.png"
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./components/HomePage";
import {TopicDetails} from "./components/TopicDetails";
// import function to register Swiper custom elements
import {register} from 'swiper/element/bundle';
import {useEffect} from "react";
import {LoginPage} from "./components/login/LoginPage";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
    useEffect(() => {
        register();
        AOS.init();

    }, [])
    return (
        <div className="App">
            <div className="navbar">
                <div className="max_width">
                    <div className="logo">
                        <img src={logo} alt=""/>
                        <span className={"logo_text"}>Contextual Analysis Project!</span>
                    </div>
                    <div className="login">
                        <a href="/login">login</a>
                    </div>
                </div>
            </div>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<HomePage/>}/>
                    <Route path={"/topic_detail"} element={<TopicDetails/>}/>
                    <Route path={"/login"} element={<LoginPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
