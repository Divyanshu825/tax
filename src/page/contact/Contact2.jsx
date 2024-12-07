import React from 'react'
import './Contact2.css';
import { Button, TextField } from '@mui/material';
import ContactAnimation from '../../component/Animation/ContactAnimation';
import ContactAnimation2 from '../../component/Animation/ContactAnimation2';

const Contact2 = () => {
    return (
        <div className='EndPage_Container'>

            <div className="EndPage_Right">
                <ContactAnimation2 />
            </div>
            <div className="EndPage_Left">
                <h1>Contact Us</h1>
                <h4>Fill In The Form, or, If You Prefer, Send Us An Email</h4>
                <TextField id="standard-basic" label="Name" variant="standard" className='EndPage_TextField' />
                <TextField id="standard-basic" label="Email" variant="standard" className='EndPage_TextField' />
                <TextField id="standard-basic" label="Message" variant="standard" className='EndPage_TextField' />
                <Button className='EndPage_Button' variant='contained'>Send</Button>
            </div>
        </div>
    )
}

export default Contact2