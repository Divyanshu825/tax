import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import FAQS from "./FaqsList";
import './Faq.css'
import AOS from "aos";
import "aos/dist/aos.css";

const styles = {
    bgColor: 'white',
    titleTextColor: "blue",
    rowTitleColor: "blue",
    rowContentColor: 'grey',
    arrowColor: "red",
};

const config = {
    animate: true,
    arrowIcon: "V",
    tabFocus: true
};


const Faqs = () => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 5000,
            easing: "ease-in-out-cubic",
        });
    }, []);

    return (
        <div className="Home_Faq_Container">
            <div className="Home_Faq_PName">
                <h1 >Frequently Asked Questions</h1>
            </div>

            <div className="Home_Faq">
                <Faq
                    data={FAQS}
                    styles={styles}
                    config={config}
                />
            </div>
        </div >
    )
}

export default Faqs
