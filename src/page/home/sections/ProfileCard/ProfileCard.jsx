import React, { useEffect } from 'react'
import './ProfileCard.css';
import ProfileCardData from './ProfileCardData';
import { Card } from 'antd';
import AOS from "aos";
import { Link } from 'react-router-dom';
import pic1 from '../../../../Images/bg3.avif'
import pic2 from '../../../../Images/bg5.jpg'
import pic3 from '../../../../Images/bg4.avif'


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
                {/* <div className='ProfileCard_Card' data-aos="fade-up" data-aos-duration="2000">
                    <Link to="/about">
                        <Card
                            hoverable
                            style={{
                                width: 440,

                            }}
                            cover={<img alt="example" src={pic1} />}
                        >
                            <Meta description={"About Us"} style={{ fontSize: "30px", color: 'black', fontWeight: 700 }} />
                        </Card>
                    </Link>

                    <Link to="/client">
                        <Card
                            hoverable
                            style={{
                                width: 440,

                            }}
                            cover={<img alt="example" src={pic2} />}
                        >
                            <Meta description={"Clientele"} style={{ fontSize: "30px", color: 'black', fontWeight: 700 }} />
                        </Card>
                    </Link>

                    <Link to="/job">
                        <Card
                            hoverable
                            style={{
                                width: 440,

                            }}
                            cover={<img alt="example" src={pic3} />}
                        >
                            <Meta description={"JobSeeker"} style={{ fontSize: "30px", color: 'black', fontWeight: 700 }} />
                        </Card>
                    </Link>
                </div> */}

                <div className="Test_container">
                    <img src={pic3} alt="Avatar" className="Test_image" />
                    <div className="Test_overlay">
                        <div className="Test_text">Hello World</div>
                    </div>
                </div>
                <div style={{ backgroundColor: 'whitesmoke', width: '500px',height:'50px' }}>
                    <h1>Hiiiii</h1>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard