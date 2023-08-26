import {useContext, useEffect, useState} from "react";
import {Swiper} from "swiper";
import twitter_logo from "../assets/images/icon/twitter_logo.jpg";
import retweet from "../assets/images/icon/research_rk_ui/retweet.svg"
import like from "../assets/images/icon/research_rk_ui/like.svg"
import audience from "../assets/images/icon/research_rk_ui/audience.svg"
import reply from "../assets/images/icon/research_rk_ui/btn-reply.svg"
import share from "../assets/images/icon/research_rk_ui/share.svg"
import Chart from 'chart.js/auto';
import {DataContext} from "./data_hook";

export const TopicDetails = () => {
    const [state, setState] = useContext(DataContext);
    const [prediction, setPredict] = useState();

    function predict_topic(text) {
        console.log(text)
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({text: text.toString()}),
        }

        fetch('http://127.0.0.1:8000/predict_topic', requestOptions)
            .then(response => response.json())
            .then(data => setPredict(data.message)
            );
    }

    function predict_sentiment(text) {
        console.log(text)
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({text: text.toString()}),
        }

        fetch('http://127.0.0.1:8000/predict_sentiment', requestOptions)
            .then(response => response.json())
            .then(data => setPredict(data.message)
            );
    }

    async function predict_get_full_report(text) {
        console.log(text)
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({text: text.toString()}),
        }

        fetch('http://127.0.0.1:8000/predict_fullreport', requestOptions)
            .then(response => response.json())
            .then(data => setPredict(data.message)
            );
    }

    function get_graphs() {
        fetch("http://127.0.0.1:8000/graph2")
            .then(response => response.json())
            .then(data => console.log(data))
    }

    useEffect(() => {
        get_graphs()
        switch (state.state) {
            case "Topics":
                predict_topic(state.data)
                break;
            case "Sentiment":
                predict_sentiment(state.data)
                // setPredict("Your analysed sentiment: Positive, and Emotional tone: Happy")
                break;
            case "Full_Report":
                predict_get_full_report(state.data)
                // setPredict("Your predicted topic is Oil Prices\n" +
                //     "and\n" +
                //     "Your analysed sentiment: Positive, and Emotional tone: Happy")
                break;
        }
        new Swiper('.swiper', {
            slidesPerView: 3,
            grid: {
                rows: 3,
            },
            mousewheel: {
                forceToAxis: true,
            },
        });

        new Chart(
            document.getElementById('temporal_analysis_graph'),
            {
                type: 'bar',
                options: {
                    responsive: true,
                    aspectRatio: 1 | 2,
                    animation: true,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            enabled: true
                        }
                    },
                },
                data: {
                    labels: ["jan", "feb", "mar", "april",
                        "may", "june", "july", "aug", "sept",
                        "oct", "nov", "dec"],
                    datasets: [
                        {
                            label: 'Acquisitions by year',
                            data: [200, 100, 50, 25]
                        }
                    ]
                }
            }
        );
        new Chart(
            document.getElementById('quantitative_horizontal_bar_graph'),
            {
                type: 'bar',
                options: {
                    indexAxis: 'y',
                    responsive: true,
                    aspectRatio: 1 | 2,
                    animation: true,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            enabled: true
                        }
                    },
                },
                data: {
                    labels: ["jan", "feb", "mar", "april",
                        "may", "june", "july", "aug", "sept",
                        "oct", "nov", "dec"],
                    datasets: [
                        {
                            label: 'Acquisitions by year',
                            data: [200, 100, 50, 25]
                        }
                    ]
                }
            }
        );
        new Chart(
            document.getElementById('quantitative_pie_graph'),
            {
                type: 'pie',
                options: {
                    borderWidth: 0,
                    responsive: true,
                    aspectRatio: 1 | 2,
                    animation: true,
                    plugins: {
                        legend: {
                            padding: 1,
                            display: true,
                            position: "right",
                        },
                        tooltip: {
                            enabled: true
                        }
                    },
                },
                data: {
                    labels: ["jan", "feb", "mar", "april",
                        "may"],
                    datasets: [
                        {
                            label: 'Acquisitions by year',
                            data: [200, 100, 50, 25]
                        }
                    ]
                }
            }
        );
        new Chart(
            document.getElementById('quantitative_doughnut_graph'),
            {
                type: 'doughnut',
                options: {
                    borderWidth: 0,
                    responsive: true,
                    aspectRatio: 1 | 2,
                    animation: true,
                    plugins: {
                        legend: {
                            display: true,
                            position: "right",
                        },
                        tooltip: {
                            enabled: true
                        }
                    },
                },
                data: {
                    labels: ["jan", "feb", "mar", "april",
                        "may"],
                    datasets: [
                        {
                            label: 'Acquisitions by year',
                            data: [200, 100, 50, 25]
                        }
                    ]
                }
            }
        );
    }, [])
    return (<>
        <div className="topic_details">
            <div className="max_width">
                <div className="main_heading">
                    {prediction}
                </div>
                <div className="tweets_container">
                    <div className="heading">
                        Related Tweets
                    </div>
                    <swiper-container slides-per-view="3"
                                      speed="500" loop="true" css-mode="true" navigation="true" pagination="true"
                                      scrollbar="true">
                        <swiper-slide>
                            <div className="tweet_card">
                                <div className="profile_picture">
                                    <img
                                        src={twitter_logo}
                                        alt=""/>
                                </div>
                                <div className="tweet_body">
                                    <div className="tweet_top">
                                        <div className="username">
                                            Robert C <span className={"verification_tick"}></span>
                                            <span className={"tweet_username"}>
                                        @username <span className={"tweet_time"}>45h</span>
                                    </span>
                                        </div>
                                        <div>
                                            :
                                        </div>
                                    </div>
                                    <div className="tweet_content">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ducimus
                                        eaque velit vitae. Eum laborum maiores nostrum nulla, omnis optio qui veniam
                                        veritatis.
                                    </div>
                                    <div className="comment_section">
                                        <div className="comment_tab">
                                            <img src={like} alt=""/>
                                            <img src={retweet} alt=""/>
                                            <img src={reply} alt=""/>
                                            <img src={audience} alt=""/>
                                            <img src={share} alt=""/>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div className="tweet_card">
                                <div className="profile_picture">
                                    <img
                                        src={twitter_logo}
                                        alt=""/>
                                </div>
                                <div className="tweet_body">
                                    <div className="tweet_top">
                                        <div className="username">
                                            Robert C <span className={"verification_tick"}></span>
                                            <span className={"tweet_username"}>
                                        @username <span className={"tweet_time"}>45h</span>
                                    </span>
                                        </div>
                                        <div>
                                            :
                                        </div>
                                    </div>
                                    <div className="tweet_content">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ducimus
                                        eaque velit vitae. Eum laborum maiores nostrum nulla, omnis optio qui veniam
                                        veritatis.
                                    </div>
                                    <div className="comment_section">
                                        <div className="comment_tab">
                                            <img src={like} alt=""/>
                                            <img src={retweet} alt=""/>
                                            <img src={reply} alt=""/>
                                            <img src={audience} alt=""/>
                                            <img src={share} alt=""/>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div className="tweet_card">
                                <div className="profile_picture">
                                    <img
                                        src={twitter_logo}
                                        alt=""/>
                                </div>
                                <div className="tweet_body">
                                    <div className="tweet_top">
                                        <div className="username">
                                            Robert C <span className={"verification_tick"}></span>
                                            <span className={"tweet_username"}>
                                        @username <span className={"tweet_time"}>45h</span>
                                    </span>
                                        </div>
                                        <div>
                                            :
                                        </div>
                                    </div>
                                    <div className="tweet_content">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ducimus
                                        eaque velit vitae. Eum laborum maiores nostrum nulla, omnis optio qui veniam
                                        veritatis.
                                    </div>
                                    <div className="comment_section">
                                        <div className="comment_tab">
                                            <img src={like} alt=""/>
                                            <img src={retweet} alt=""/>
                                            <img src={reply} alt=""/>
                                            <img src={audience} alt=""/>
                                            <img src={share} alt=""/>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </swiper-slide>
                    </swiper-container>

                </div>
                <div className="temporal_analysis">
                    <div className="max_width">
                        <div className="heading">
                            Temporal analysis
                        </div>
                        <div className="activity">
                            <div className="activity_top_container">
                                <div className="col">
                                    <div className="sub_heading">
                                        Activity
                                    </div>
                                    <div className="heading">
                                        Tweet count
                                    </div>

                                </div>
                                <div className="col">
                                    <button className={"annual"}>
                                        Annual
                                    </button>
                                </div>
                            </div>
                            <div className="temporal_analysis_graph">
                                <canvas id="temporal_analysis_graph"></canvas>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="quantitative_analysis">
                    <div className="heading">
                        Quantitative Analysis
                    </div>
                    <div className="quantitative_chat_container">
                        <div className="tweet_pie_container">
                            <div className="top_container">
                                <div className="sub_heading">
                                    Tweets
                                </div>
                                <div className="no_of_tweets">
                                    5,98752
                                </div>
                                <div className="sub_text">
                                    Number of tweets relating to this topic as compared to whole dataset
                                </div>
                            </div>
                            <div className="quantitative_pie_graph">
                                <canvas id="quantitative_pie_graph"></canvas>
                            </div>
                        </div>
                        <div className="tweet_donut_container">
                            <div className="top_container">
                                <div className="heading">
                                    Top Frequency Words
                                </div>
                                <div className="sub_heading">
                                    Words and terms that appeared the most
                                </div>
                            </div>
                            <div className="quantitative_doughnut_graph">
                                <canvas id="quantitative_doughnut_graph"></canvas>
                            </div>
                        </div>
                        <div className="tweet_donut_container tweet_horizontal_bar_graph">
                            <div className="top_container">
                                <div className="heading">
                                    Top Frequency Words
                                </div>
                                <div className="sub_heading">
                                    Words and terms that appeared the most
                                </div>
                            </div>
                            <div className="quantitative_doughnut_graph">
                                <canvas id="quantitative_horizontal_bar_graph"></canvas>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>);
}