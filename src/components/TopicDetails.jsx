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

    const social_butterfly = [{
        username: "war stalker",
        profileName: "War Stalker",
        description: "\"Inflation has retreated over the past year, largely thanks to a decline in gasoline prices, which had previously surged as a result of Russia’s invasion of Ukraine. By July, however, year-over-year oil price comparisons were no longer pulling the annual CPI rate lower, leaving food, shelter and mortgage-service costs to drive inflation higher... As for gasoline – the key driver of reductions in the rate of inflation over the past year – prices were down 12.9 per cent in July compared with a year before. This was considerably smaller than the 21.6-per-cent drop in June. On a monthly basis, gas prices rose 0.9 per cent. They have continued to press higher in August, suggesting that energy costs will push up headline inflation in the next CPI report.\" https://theglobeandmail.com/business/article-inflation-rate-july-canada/… #cdnpoli",
        time: 5,
    },
        {
            username: "war stalker",
            profileName: "War Stalker",
            description: "\"Inflation has retreated over the past year, largely thanks to a decline in gasoline prices, which had previously surged as a result of Russia’s invasion of Ukraine. By July, however, year-over-year oil price comparisons were no longer pulling the annual CPI rate lower, leaving food, shelter and mortgage-service costs to drive inflation higher... As for gasoline – the key driver of reductions in the rate of inflation over the past year – prices were down 12.9 per cent in July compared with a year before. This was considerably smaller than the 21.6-per-cent drop in June. On a monthly basis, gas prices rose 0.9 per cent. They have continued to press higher in August, suggesting that energy costs will push up headline inflation in the next CPI report.\" https://theglobeandmail.com/business/article-inflation-rate-july-canada/… #cdnpoli",
            time: 5,
        },
        {
            username: "war stalker",
            profileName: "War Stalker",
            description: "\"Inflation has retreated over the past year, largely thanks to a decline in gasoline prices, which had previously surged as a result of Russia’s invasion of Ukraine. By July, however, year-over-year oil price comparisons were no longer pulling the annual CPI rate lower, leaving food, shelter and mortgage-service costs to drive inflation higher... As for gasoline – the key driver of reductions in the rate of inflation over the past year – prices were down 12.9 per cent in July compared with a year before. This was considerably smaller than the 21.6-per-cent drop in June. On a monthly basis, gas prices rose 0.9 per cent. They have continued to press higher in August, suggesting that energy costs will push up headline inflation in the next CPI report.\" https://theglobeandmail.com/business/article-inflation-rate-july-canada/… #cdnpoli",
            time: 5,
        },
        {
            username: "war stalker",
            profileName: "War Stalker",
            description: "\"Inflation has retreated over the past year, largely thanks to a decline in gasoline prices, which had previously surged as a result of Russia’s invasion of Ukraine. By July, however, year-over-year oil price comparisons were no longer pulling the annual CPI rate lower, leaving food, shelter and mortgage-service costs to drive inflation higher... As for gasoline – the key driver of reductions in the rate of inflation over the past year – prices were down 12.9 per cent in July compared with a year before. This was considerably smaller than the 21.6-per-cent drop in June. On a monthly basis, gas prices rose 0.9 per cent. They have continued to press higher in August, suggesting that energy costs will push up headline inflation in the next CPI report.\" https://theglobeandmail.com/business/article-inflation-rate-july-canada/… #cdnpoli",
            time: 5,
        },
    ];

    function getData() {
        const topic_tweet = {
            label: ["jan", "feb", "mar", "april",
                "may", "june", "july", "aug", "sept",
                "oct", "nov", "dec"],
            data: [200, 100, 50, 25]
        }
        const topic_top_words = {
            label: ["jan", "feb", "mar", "april",
                "may", "june", "july", "aug", "sept",
                "oct", "nov", "dec"],
            data: [200, 100, 50, 25]
        }
        const topic_frequency_words = {
            label: ["jan", "feb", "mar", "april",
                "may", "june", "july", "aug", "sept",
                "oct", "nov", "dec"],
            data: [200, 100, 50, 25]
        }
        chartMaker('topic_tweets');
        chartMaker('topic_top_frequent_words', 'doughnut');
        chartMaker('topic_word_distribution', 'bar', "", "bottom");

        chartMaker('sentiment_tweets');
        chartMaker('sentiment_top_frequent_words', 'doughnut');
        chartMaker('sentiment_word_distribution', 'bar', "", "bottom");

        chartMaker('temporal_analysis_graph', 'bar', "", "bottom", 'x', 1 | 2);

    }

    function chartMaker(id,
                        type = 'pie',
                        label = 'Acquisitions by year',
                        legend_position = "right",
                        axisIndex = 'y',
                        aspectRatio = 1 | 2,
                        labels = ["jan", "feb", "mar", "april",
                            "may", "june", "july", "aug", "sept",
                            "oct", "nov", "dec"],
                        data = [200, 100, 50, 25]
    ) {
        new Chart(
            document.getElementById(id),
            {
                type: type,
                options: {
                    indexAxis: axisIndex,
                    responsive: true,
                    aspectRatio: aspectRatio,
                    animation: true,
                    plugins: {
                        legend: {
                            position: legend_position,
                            display: true
                        },
                        tooltip: {
                            enabled: true
                        }
                    },
                },
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: label,
                            data: data
                        }
                    ]
                }
            }
        );
    }

    useEffect(() => {
        getData()
        new Swiper('.swiper', {
            slidesPerView: 3,
            grid: {
                rows: 3,
            },
            mousewheel: {
                forceToAxis: true,
            }
        });
    }, []);


    return (<>
        <div className="topic_details">
            <div className="max_width">
                <div className="main_heading">
                    {prediction}
                </div>
                <div className="quantitative_analysis">
                    <div className="heading">
                        Topic Analysis
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
                                <canvas id="topic_tweets"/>
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
                                <canvas id="topic_top_frequent_words"/>
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
                                <canvas id="topic_word_distribution"/>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="quantitative_analysis">
                    <div className="heading">
                        Sentiment Analysis
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
                                <canvas id="sentiment_tweets"/>
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
                                <canvas id="sentiment_top_frequent_words"/>
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
                                <canvas id="sentiment_word_distribution"/>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="tweets_container">
                    <div className="heading">
                        Top Tweets (Social Butterfly)
                    </div>
                    <swiper-container slides-per-view="3"
                                      speed="500" loop="true" css-mode="true" navigation="false" pagination="false"
                                      scrollbar="false"
                    >
                        {
                            social_butterfly.map((value, index, array) => <swiper-slide>
                                <div className="tweet_card">
                                    <div className="profile_picture">
                                        <img
                                            src={twitter_logo}
                                            alt=""/>
                                    </div>
                                    <div className="tweet_body">
                                        <div className="tweet_top">
                                            <div className="username">

                                                {value['profileName']} <span className={"verification_tick"}></span>
                                                <span className={"tweet_username"}>
                                       @{value['username']}<span className={"tweet_time"}>{value['time']}h</span>
                                    </span>
                                            </div>
                                            <div>
                                                :
                                            </div>
                                        </div>
                                        <div className="tweet_content">
                                            {value['description']}
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
                            </swiper-slide>)
                        }
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
            </div>
        </div>
    </>);
}