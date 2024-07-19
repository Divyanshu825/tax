import Lottie from 'lottie-react'
import React from 'react'
import Ai from '../../assets/Contact.json';

const ContactAnimation = () => {

    const style = {
        marginTop: '4rem',
        marginBottom: '4rem',
        width:'800px'
    }


    return (
        <>
            <Lottie style={style} animationData={Ai} />
        </>
    )
}

export default ContactAnimation