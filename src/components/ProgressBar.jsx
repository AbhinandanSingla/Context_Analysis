import './proressbar.css'
import {useEffect, useState} from "react";
import {faBrush, faCode, faFlask, faRocket} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const ProgressBar = () => {
    const [status, setStatus] = useState(false);
    const progressData = {
        "first": {
            heading: "hsk & Research",
            subheading: "Nullam porttitor pretium dolor vitae ullamcorper. Suspendisse blandit ipsum et\n" +
                "                        condimentum efficitur. Nullam facilisis suscipit sapien, quis condimentum ex elementum\n" +
                "                        vitae. Sed ullamcorper gravida interdum. Aenean blandit mauris lectus, interdum\n" +
                "                        consectetur ex elementum vel. Aliquam sagittis efficitur elit eu tristique. Integer\n" +
                "                        augue arcu, tempus non ligula eu, varius vestibulum ipsum. Praesent nibh mi, condimentum\n" +
                "                        id pellentesque sed, sodales vitae sem. Nam ac luctus libero, in molestie ante. Maecenas\n" +
                "                        ultrices a augue vel efficitur. Duis eget velit lorem. In at elit vel quam ullamcorper\n" +
                "                        venenatis eu ac leo. Proin non commodo nibh, consequat volutpat tellus. Sed sed dui\n" +
                "                        faucibus, pulvinar turpis vel, pretium ipsum. Donec commodo magna id quam tempus, at\n" +
                "                        vulputate quam dignissim. Sed luctus a augue euismod scelerisque."
        },
        "second": {
            heading: "Plan & Research",
            subheading: "Nullam porttitor pretium dolor vitae ullamcorper. Suspendisse blandit ipsum et\n" +
                "                        condimentum efficitur. Nullam facilisis suscipit sapien, quis condimentum ex elementum\n" +
                "                        vitae. Sed ullamcorper gravida interdum. Aenean blandit mauris lectus, interdum\n" +
                "                        consectetur ex elementum vel. Aliquam sagittis efficitur elit eu tristique. Integer\n" +
                "                        augue arcu, tempus non ligula eu, varius vestibulum ipsum. Praesent nibh mi, condimentum\n" +
                "                        id pellentesque sed, sodales vitae sem. Nam ac luctus libero, in molestie ante. Maecenas\n" +
                "                        ultrices a augue vel efficitur. Duis eget velit lorem. In at elit vel quam ullamcorper\n" +
                "                        venenatis eu ac leo. Proin non commodo nibh, consequat volutpat tellus. Sed sed dui\n" +
                "                        faucibus, pulvinar turpis vel, pretium ipsum. Donec commodo magna id quam tempus, at\n" +
                "                        vulputate quam dignissim. Sed luctus a augue euismod scelerisque."
        },
        "third": {
            heading: "Plan & Research",
            subheading: "Nullam porttitor pretium dolor vitae ullamcorper. Suspendisse blandit ipsum et\n" +
                "                        condimentum efficitur. Nullam facilisis suscipit sapien, quis condimentum ex elementum\n" +
                "                        vitae. Sed ullamcorper gravida interdum. Aenean blandit mauris lectus, interdum\n" +
                "                        consectetur ex elementum vel. Aliquam sagittis efficitur elit eu tristique. Integer\n" +
                "                        augue arcu, tempus non ligula eu, varius vestibulum ipsum. Praesent nibh mi, condimentum\n" +
                "                        id pellentesque sed, sodales vitae sem. Nam ac luctus libero, in molestie ante. Maecenas\n" +
                "                        ultrices a augue vel efficitur. Duis eget velit lorem. In at elit vel quam ullamcorper\n" +
                "                        venenatis eu ac leo. Proin non commodo nibh, consequat volutpat tellus. Sed sed dui\n" +
                "                        faucibus, pulvinar turpis vel, pretium ipsum. Donec commodo magna id quam tempus, at\n" +
                "                        vulputate quam dignissim. Sed luctus a augue euismod scelerisque."
        },
        "forth": {
            heading: "Plan & Research",
            subheading: "Nullam porttitor pretium dolor vitae ullamcorper. Suspendisse blandit ipsum et\n" +
                "                        condimentum efficitur. Nullam facilisis suscipit sapien, quis condimentum ex elementum\n" +
                "                        vitae. Sed ullamcorper gravida interdum. Aenean blandit mauris lectus, interdum\n" +
                "                        consectetur ex elementum vel. Aliquam sagittis efficitur elit eu tristique. Integer\n" +
                "                        augue arcu, tempus non ligula eu, varius vestibulum ipsum. Praesent nibh mi, condimentum\n" +
                "                        id pellentesque sed, sodales vitae sem. Nam ac luctus libero, in molestie ante. Maecenas\n" +
                "                        ultrices a augue vel efficitur. Duis eget velit lorem. In at elit vel quam ullamcorper\n" +
                "                        venenatis eu ac leo. Proin non commodo nibh, consequat volutpat tellus. Sed sed dui\n" +
                "                        faucibus, pulvinar turpis vel, pretium ipsum. Donec commodo magna id quam tempus, at\n" +
                "                        vulputate quam dignissim. Sed luctus a augue euismod scelerisque."
        },

    }
    const [selectedNode, setNodes] = useState("first");
    useEffect(() => {
        switch (selectedNode) {
            case "first": {
                document.getElementById("span1").classList.add("border-change")
                document.getElementById("nprogress-bar").value = 0;
                break;
            }
            case "second": {
                document.getElementById("span2").classList.add("border-change")
                document.getElementById("nprogress-bar").value = 37;
                break;
            }
            case "third": {
                document.getElementById("span3").classList.add("border-change")
                document.getElementById("span2").classList.add("border-change")
                document.getElementById("nprogress-bar").value = 64;
                break;
            }
        }
    }, [selectedNode])

    return (
        <>
            <h1 className="text-center"> WEB DESIGN PROCESS</h1>
            <div className="row">
                <div className="cont">
                    <progress id="nprogress-bar" value="0" max="100"/>
                    <div id="step">
                        <span id={"span1"} className="first border-change">


                        <FontAwesomeIcon className={"closeModal"} icon={faFlask}
                        />

                        </span>
                        <span id={"span2"} className="second">
                        <FontAwesomeIcon className={"closeModal"} icon={faBrush}/>
                        </span>
                        <span id={"span3"} className="third">
                              <FontAwesomeIcon className={"closeModal"} icon={faCode}
                              />
                        </span>
                        <span id={"span4"} className="fourth">
                               <FontAwesomeIcon className={"closeModal"} icon={faRocket}
                               />
                        </span>
                    </div>
                </div>
            </div>

            <div className="progress_container">
                <h2>{progressData[selectedNode].heading}</h2>
                <p>{progressData[selectedNode].subheading}</p>
            </div>

        </>
    );
}