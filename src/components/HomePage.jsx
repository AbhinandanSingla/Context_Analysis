import {useState} from "react";
import close from "../assets/images/icon/close.svg";

export const HomePage = () => {
    const [tweet, setTweet] = useState();
    const [popup, setPopup] = useState(false);
    const topics = ["International Relations and Political Leadership ",
        "Military Actions and Attacks ", "Humanitarian Support and Needs",
        "Global Economy and Sanctions", "Political Figures and Commentary",
        "Human Impact and Casualties", "Media and News Coverage",
        "Public Opinion and Urgency",
        "Geopolitics and Weapons", "Military Technology and Equipment"]
    return (<div className="home_content">
            <div className="max_width">
                <div className="heading_container">
                    <div className="main_heading">
                        Contextual Analysis Project!
                    </div>
                    <div className="sub_text">
                        The Russia-Ukraine war, also known as the Russo-Ukrainian conflict, is a ongoing conflict
                        between Russia and Ukraine that began in 2014. At its core, it's a struggle for control over
                        Crimea, a region in Ukraine that Russia annexed in 2014, as well as for influence over other
                        parts of Ukraine.
                    </div>
                </div>
                <div className="highlight_container">
                    <div className="heading">
                        Some Highlights
                    </div>
                    <div className="container">
                        <div className="card">
                            <div className="card_heading">
                                Emotions
                            </div>
                            <div className="highlights_list">
                                <div className="heading">
                                    Top emotions ongoing
                                </div>
                                <ul>
                                    <li className="analysis_node">
                                        Anger (32%)
                                    </li>
                                    <li className="analysis_node">
                                        Sadness (40%)
                                    </li>
                                    <li className="analysis_node">
                                        Despair (10%)
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_heading">
                                Top Keywords
                            </div>
                            <div className="highlights_list">
                                {/*<div className="heading">*/}
                                {/*    Top emotions ongoing*/}
                                {/*</div>*/}
                                <ul>
                                    <li className="analysis_node">
                                        Casualty (49%)
                                    </li>
                                    <li className="analysis_node">
                                        Pray (20%)
                                    </li>
                                    <li className="analysis_node">
                                        Attack (10%)
                                    </li>
                                    <li className="analysis_node">
                                        Peace (4%)
                                    </li>
                                    <li className="analysis_node">
                                        Oil (2%)
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_heading">
                                Top Topics
                            </div>
                            <div className="highlights_list">
                                <div className="heading">
                                    Topics that are being discussed the most
                                </div>
                                <ul>
                                    <li className="analysis_node">
                                        Energy and Economy (20%)
                                    </li>
                                    <li className="analysis_node">
                                        Military Operations and Attacks (40%)
                                    </li>
                                    <li className="analysis_node">
                                        Nuclear Threat and Security Concerns (10%)
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_heading">
                                Statistics
                            </div>
                            <div className="highlights_list">
                                <div className="heading">
                                    Topics that are being discussed the most
                                </div>
                                <ul>
                                    <li className="analysis_node">
                                        Total words - 81287832
                                    </li>
                                    <li className="analysis_node">
                                        Avg words per tweet - 27
                                    </li>
                                    <li className="analysis_node">
                                        Positive words - 1851496948
                                    </li>
                                    <li className="analysis_node">
                                        Negative words - 23866150
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="analysis_container">
                    <div className="heading">
                        Analysis
                    </div>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                    }}>
                        <select className="topic_selection">
                            {topics.map(v => <option value={v}>{v}</option>)}
                        </select>
                        <div className={"divider"}>OR</div>
                        <textarea className={"tweet_area"} name="tweet" id="" cols="30" rows="8" value={tweet}
                                  onChange={(e) => setTweet(e.target.value)}
                        />
                        <button className="analysis_button" type={"submit"} onClick={() => {
                            if (tweet == "") {
                                alert("Tweets is empty")
                            } else {
                                setPopup(true)
                            }
                        }}>
                            Analysis
                        </button>
                    </form>
                </div>
                {
                    popup ? <div className="analysis_popup">
                        <img className={"close"} src={close} alt=""
                             onClick={() => setPopup(false)}/>
                        <div className="textfield">
                            <input type="text" value={tweet} disabled/>
                        </div>
                        <div className="analysis_popup_main_heading">
                            Choose one
                        </div>
                        <div className="analysis_popup_sub_text">
                            What kind of action would you like to perform?
                        </div>
                        <div className="container">
                            <button className="popup_btn" onClick={}>Analyse Topics</button>
                            <button className="popup_btn">Analyse Sentiment/Tone</button>
                            <button className="popup_btn">Get Full Report</button>
                        </div>
                    </div> : ""
                }
            </div>
        </div>
    )
}