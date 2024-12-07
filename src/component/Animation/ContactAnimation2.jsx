import Lottie from 'lottie-react'
import React from 'react'
import Ai from '../../assets/Contact2.json';

const ContactAnimation2 = () => {

    const style = {
        marginBottom: '4rem',
        width:'800px',
        height:'600px'
    }


    return (
        <>
            <Lottie style={style} animationData={Ai} />
        </>
    )
}

export default ContactAnimation2