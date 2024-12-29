import "../../scss/reset.css";
import "../../scss/common.scss";
import "../../scss/header.scss";
import { useState } from "react";

const Header_1 = () => {
    // const [text, setText] = useState("Welcome to My Portfolio");
    const text = "PORTPOLIO";
    const [isShrinking, setIsShrinking] = useState(false);
    const handleClick = () => {
        setIsShrinking(true);
        setTimeout(() => {
            window.location.href = "/main"; // Replace with the actual URL or route
        }, 1000); // Match the animation duration
    };

    return (
        <header className="wrapper">
            <div className="center">
                <div className={`header-wrap  ${isShrinking ? "shrink" : ""}`}>
                    <div className="title" onClick={handleClick}>
                        {text.split("").map((char, index) => (
                            <span key={index} className="letter">
                                {char}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header_1;
