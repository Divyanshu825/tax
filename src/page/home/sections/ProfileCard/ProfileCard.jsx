import React, { useEffect } from 'react'
import './ProfileCard.css';
import ProfileCardData from './ProfileCardData';
import { Card } from 'antd';
import Aos from 'aos';
const { Meta } = Card;

const ProfileCard = () => {

    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 1000,
            easing: "ease-in-out-cubic",
        });
    }, []);

    return (
        <div className='ProfileCard_container'>
            <div className='ProfileCard_Main'>
                <header className="ProfileCard_header " >
                    <h1>Cards Section</h1>
                    {/* <p className='AboutSection_Underline'>---------------------------------------------</p> */}
                </header>
                <div className='ProfileCard_Card'>
                    {ProfileCardData.map((item, index) => {
                        console.log("index", item.img);
                        return (
                            <div className='ProfileCard_Card'>
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