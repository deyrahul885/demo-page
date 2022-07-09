import React from 'react'
import '../register/Register.css'
import {Card,CardMedia} from '@mui/material';
// import {videoImg} from '../../../../images/4.jpg'

const Register = () => {
  return (
    <>
    <div className='register-wraper'>
        <div className='main-text'>
            <p className='inner-text blue-text'>A unique <span className='red-text'>virtual convocation on the <br/>
Metaverse</span> to celebrate the BounceBack Batch of 2022. <br/>
 Join the fun on <span className='red-text'>22nd May, 4pm</span> onwards.</p>
        </div>
        <div className='main-text-mob'>
            <p className='inner-text blue-text'>A unique <span className='red-text'>virtual convocation on the
Metaverse</span> to celebrate the BounceBack Batch of 2022. 
 Join the fun on <span className='red-text'>22nd May, 4pm</span> onwards.</p>
        </div>
        <div className='video-img'>
        <Card sx={{ maxWidth:800,borderRadius:0}}>
        <CardMedia
            component="img"
            height="450"
            image='images/img3.jpg'
            alt="video-img"
        />
        </Card>
        </div>
        <div className='video-description'>
            <p className='descrip'>This event is to honour all the students, teachers and family
                members of the BounceBack Batch. Register now to take part in this exciting event.
            </p>
        </div>
    </div>
    </>
  )
}

export default Register
