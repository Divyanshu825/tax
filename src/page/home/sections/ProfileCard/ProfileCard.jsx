import React, { useEffect } from 'react'
import './ProfileCard.css';
import ProfileCardData from './ProfileCardData';
import { Card } from 'antd';
import AOS from "aos";
const { Meta } = Card;

const ProfileCard = () => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 2500,
            easing: "ease-in-out-cubic",
        });
    }, []);

    return (
        <div className='ProfileCard_container'>
            <div className='ProfileCard_Main'>
                <header className="ProfileCard_header " >
                    <h1 data-aos="fade-up" data-aos-duration="2000">Cards Section</h1>
                    {/* <p className='AboutSection_Underline'>---------------------------------------------</p> */}
                </header>
                <div className='ProfileCard_Card' data-aos="fade-up" data-aos-duration="2000">
                    {ProfileCardData.map((item, index) => {
                        console.log("index", item.img);
                        return (
                            <div className='ProfileCard_Card' data-aos="fade-up" data-aos-duration="2000">
                                <Card
                                    key={index}
                                    hoverable
                                    style={{
                                        width: 440,

                                    }}
                                    cover={<img alt="example" src={item.img} />}
                                >
                                    <Meta title={item.title} description="www.instagram.com" />
                                </Card>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProfileCard