import React from 'react'
import './FlipCard.css';

const FlipCard = ({ name, desc }) => {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front">
                    <h2>{name}</h2>
                </div>

                {/* Back Side */}
                <div className="flip-card-back">
                    <p>📧 {desc}</p>
                </div>
            </div>
        </div>
    );
};

export default FlipCard