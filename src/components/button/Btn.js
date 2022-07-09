import React from 'react'
import { Button } from '@mui/material';
import '../button/Btn.css'

const Btn = () => {
  return (
    <div className='tab-btn'><Button variant="contained" sx={{
      width:'auto',
      height:70 ,
      fontSize:20,
      borderRadius:6,
      letterSpacing:'inherit',
      paddingTop:5,paddingBottom:5,paddingLeft:8,paddingRight:8,
      backgroundColor: 'rgb(237 28 36);',
      '&:hover':{
        backgroundColor: 'rgb(237 28 36);',

      },
      color:'#fff'
  }}>CLICK TO rEGISTER</Button></div>
  )
}

export default Btn