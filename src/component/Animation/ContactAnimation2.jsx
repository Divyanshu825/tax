import Lottie from 'lottie-react'
import React from 'react'
import Ai from '../../assets/Contact2.json';

const ContactAnimation2 = ({ maxWidth, maxHeight }) => {

    const style = {
        marginBottom: '4rem',
        width: maxWidth,
        height: maxHeight
    }


    return (
        <>
            <Lottie  animationData={Ai} />
        </>
    )
}

export default ContactAnimation2