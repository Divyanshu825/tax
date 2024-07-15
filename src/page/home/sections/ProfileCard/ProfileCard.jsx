import React from 'react'
import './ProfileCard.css';
import ProfileCardData from './ProfileCardData';
import { Card } from 'antd';
const { Meta } = Card;

const ProfileCard = () => {
    return (
        <div className='ProfileCard_container'>
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
    )
}

export default ProfileCard