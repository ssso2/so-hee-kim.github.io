import { useEffect } from "react";
import AOS from "aos";
import "../../scss/header.scss";
import "../../scss/main.scss";

const Main = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <header className="wrapper">
            <div className="center">
                <div className="header-wrap main-wrap">
                    <div className="moving-text">Main</div>
                    <div className="empty"></div>
                    <div
                        className="fadeup"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                    >
                        {" "}
                        FrontEnd Developer
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Main;
