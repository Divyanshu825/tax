"use client";
import React, { useEffect } from "react";
import style from "./About.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import pic from '../../Images/bg3.avif'
import pic2 from '../../Images/bg4.avif'
import AboutCarousel from "./AboutCarousel/AboutCarousel";

const About = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 2500,
            easing: "ease-in-out-cubic",
        });
    }, []);

    const Data = [
        {
            title: "OUR VISION",
            img: pic,
            des: "Bring your Android and iOS application concept to life on every mobile platform. BBT turns your best concepts into a real-time mobile application. We build the apps that are both striking and fully functional. Our appreciated application developers create incredible mobile apps for Android and iOS platforms at affordable. Our developers are reputed digital explorers who constantly push their limit to bring something new and unique in today's highly competitive market.",
            lang: ["React Native", "Java"],
        },
        {
            title: "OUR MISSION",
            img: pic2,
            des: "The expert team at BBT utilizes web development for making top quality and dynamic web applications to drive your business to heighten one step ahead of all the market competitors. Our well trained and knowledgeable team of web developers uses the newest technology trends available for website development, upgrade and integration services for several project necessities.",
            lang: ["React", "Next Js"],
        },
        {
            title: "OUR VISION",
            img: pic,
            des: "Bring your Android and iOS application concept to life on every mobile platform. BBT turns your best concepts into a real-time mobile application. We build the apps that are both striking and fully functional. Our appreciated application developers create incredible mobile apps for Android and iOS platforms at affordable. Our developers are reputed digital explorers who constantly push their limit to bring something new and unique in today's highly competitive market.",
            lang: ["React Native", "Java"],
        },
        {
            title: "OUR MISSION",
            img: pic2,
            des: "The expert team at BBT utilizes web development for making top quality and dynamic web applications to drive your business to heighten one step ahead of all the market competitors. Our well trained and knowledgeable team of web developers uses the newest technology trends available for website development, upgrade and integration services for several project necessities.",
            lang: ["React", "Next Js"],
        },
        {
            title: "OUR VISION",
            img: pic,
            des: "Bring your Android and iOS application concept to life on every mobile platform. BBT turns your best concepts into a real-time mobile application. We build the apps that are both striking and fully functional. Our appreciated application developers create incredible mobile apps for Android and iOS platforms at affordable. Our developers are reputed digital explorers who constantly push their limit to bring something new and unique in today's highly competitive market.",
            lang: ["React Native", "Java"],
        },
        {
            title: "OUR MISSION",
            img: pic2,
            des: "The expert team at BBT utilizes web development for making top quality and dynamic web applications to drive your business to heighten one step ahead of all the market competitors. Our well trained and knowledgeable team of web developers uses the newest technology trends available for website development, upgrade and integration services for several project necessities.",
            lang: ["React", "Next Js"],
        },

    ];

    return (
        <div className={style.Ab_container}>
            <div className={style.Ab_head}  >
                <h1>About Page</h1>
                <h2>Home / About Page</h2>
            </div>

            <div className={style.Ab_map_container}>
                {Data.map((item, index) => {
                    return (
                        <div
                            data-aos={"fade"}
                            className={index % 2 == 0 ? style.map_main : style.map_main2}
                            key={item}
                        >
                            <div
                                className={
                                    index % 2 == 0
                                        ? style.text_container_map
                                        : style.text_container_map2
                                }
                            >
                                <h1 className={style.map_title}>{item.title}</h1>
                                <p className={style.map_des}>{item.des}</p>
                                {/* <Link href={"/contact"}>
                                        <button className={style.btn} type="submit">
                                            <span> Contact now</span>
                                        </button>
                                    </Link> */}
                            </div>
                            <div className={style.image_container_map}>
                                <img
                                    className={style.image_map}
                                    src={item.img}
                                    alt="testing mode bor"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
            {/* <div className={style.About_Carousel}>
                <AboutCarousel />
            </div> */}
        </div>
    );
};

export default About;
