import illustration from "./images/Illustration.png"
import success from "../login/images/success.png"
import {useState} from "react";
import {useNavigate} from "react-router";

export const LoginPage = () => {
    const [login_status, setLogin] = useState(false)
    const navigate = useNavigate();

    function login(email, password) {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: email, password: password}),
        }

        fetch('http://127.0.0.1:8000/register', requestOptions)
            .then(response => response.json())
            .then(data => setLogin(true));
    }

    return (<>
        <div className="login_page">
            <div className="max_width">
                <div className="col_image">
                    <img src={illustration} alt=""/>
                </div>
                <div className="col_content">
                    <div className="heading">
                        Welcome to <span><br/>Contextual Analysis Project</span>
                    </div>
                    <div className="google_login">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFFUTi1RsVDFSupmzDUJ5I3ZHBtwz043rbHQ&usqp=CAU"
                            alt=""/>
                        <span>Login with Google</span>
                    </div>
                    <div className="google_login">
                        <img
                            src="https://e1.pxfuel.com/desktop-wallpaper/217/687/desktop-wallpaper-twitter-logo-bird-logo-thumbnail.jpg"
                            alt=""/>
                        <span>Login with Twitter</span>
                    </div>
                    <div className="division">OR</div>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        login(e.target[0].value, e.target[1].value)
                        console.log(e.target[0].value)
                        console.log(e.target[1].value)
                        document.getElementById("login_email").value = "";
                        document.getElementById("login_password").value = "";
                    }}>
                        <div className="login_email">
                            <img src="" alt=""/>
                            <label htmlFor="login_email">Email</label>
                            <input type="email" name="login_email" id="login_email"/>

                        </div>
                        <br/>
                        <div className="login_password">
                            <img src="" alt=""/>
                            <label htmlFor="login_password">Password</label>
                            <input type="password" name="login_password" id="login_password"/>
                        </div>
                        <div className="remember_me">
                            <div className="remember_checkbox">
                                <input type="checkbox" name="" id=""/>
                                <span>
                                    Remember me
                                </span>
                            </div>
                            <div className="remember_forget">
                                <span>
                                    Forget Password?
                                </span>
                            </div>
                        </div>
                        <button type={"submit"} className="login_button">
                            Login
                        </button>
                    </form>
                </div>
                {
                    login_status ? <div className="login_popup">
                        <img src={success} alt=""/>
                        <div>Thanks You!!!</div>
                        <span>You have been successfully register</span>
                        <button onClick={() => {
                            setLogin(false)
                            navigate("/")
                        }}>Click to Continue
                        </button>
                    </div> : ""
                }
            </div>
        </div>
    </>)
}