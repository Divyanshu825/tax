import React, { useState } from 'react';
import './Ourservices.css';

const Ourservices = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: 'What is React?',
            answer: 'React is a JavaScript library for building user interfaces.',
        },
        {
            question: 'How do you use React?',
            answer: 'React can be used by creating components which manage their own state.',
        },
        {
            question: 'Why use React?',
            answer: 'React is used because it is fast, scalable, and simple.',
        },
        {
            question: 'What is React?',
            answer: 'React is a JavaScript library for building user interfaces.',
        },
        {
            question: 'How do you use React?',
            answer: 'React can be used by creating components which manage their own state.',
        },
        {
            question: 'Why use React?',
            answer: 'React is used because it is fast, scalable, and simple.',
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='Ourservices_container'>
            <header className="Ourservices_header" >
                <h1 data-aos="zoom-in" data-aos-duration="2000">Our Services</h1>
                <p></p>
            </header>
            
            <div className="Ourservices_faq-container">

                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`Ourservices_faq-item ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="Ourservices_faq-question">
                            <h2>{faq.question}</h2>
                            <span className="Ourservices_faq-icon">{activeIndex === index ? '-' : '+'}</span>
                        </div>
                        <div
                            className="Ourservices_faq-answer"
                            style={
                                activeIndex === index
                                    ? { maxHeight: '300px', padding: '10px 0' }
                                    : { maxHeight: '0px', padding: '0' }
                            }
                        >
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ourservices