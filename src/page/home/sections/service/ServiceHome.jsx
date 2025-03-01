import React from 'react'
import FlipCard from '../../../../component/Common/FlipCard/FlipCard';
import './ServiceHome.css';

const ServiceHome = () => {
    const users = [
        {
            name: "Income Tax",
            desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, dolorem debitis. Porro dolor sit dignissimos ratione fugit commodi? Autem ex, est facilis reiciendis dignissimos voluptatem natus quae pariatur numquam nesciunt?"
        },
        {
            name: "Income Tax",
            desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, dolorem debitis. Porro dolor sit dignissimos ratione fugit commodi? Autem ex, est facilis reiciendis dignissimos voluptatem natus quae pariatur numquam nesciunt?"
        },
        {
            name: "Income Tax",
            desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, dolorem debitis. Porro dolor sit dignissimos ratione fugit commodi? Autem ex, est facilis reiciendis dignissimos voluptatem natus quae pariatur numquam nesciunt?"
        },
        {
            name: "Income Tax",
            desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, dolorem debitis. Porro dolor sit dignissimos ratione fugit commodi? Autem ex, est facilis reiciendis dignissimos voluptatem natus quae pariatur numquam nesciunt?"
        },
        {
            name: "Income Tax",
            desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, dolorem debitis. Porro dolor sit dignissimos ratione fugit commodi? Autem ex, est facilis reiciendis dignissimos voluptatem natus quae pariatur numquam nesciunt?"
        },
        {
            name: "Income Tax",
            desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, dolorem debitis. Porro dolor sit dignissimos ratione fugit commodi? Autem ex, est facilis reiciendis dignissimos voluptatem natus quae pariatur numquam nesciunt?"
        },
        {
            name: "Income Tax",
            desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, dolorem debitis. Porro dolor sit dignissimos ratione fugit commodi? Autem ex, est facilis reiciendis dignissimos voluptatem natus quae pariatur numquam nesciunt?"
        },
        {
            name: "Income Tax",
            desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, dolorem debitis. Porro dolor sit dignissimos ratione fugit commodi? Autem ex, est facilis reiciendis dignissimos voluptatem natus quae pariatur numquam nesciunt?"
        },

    ];
    return (
        <div className='ServiceHomeCtn'>
            <div className='ServiceHomeMain'>
                <h1>Our Services</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, </p>
                <p>cumque velit eligendi atque ut reprehenderit inventore sunt in nulla, </p>
            </div>

            <div className="card-container">
                {users.map((user, index) => (
                    <FlipCard key={index} {...user} />
                ))}
            </div>
        </div>
    )
}

export default ServiceHome