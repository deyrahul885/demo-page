import React from 'react'
import '../navbar/menubar.css'
import { ButtonGroup,Button,Tabs,Tab,Box,TabPanel } from '@mui/material';
import { Link } from "react-router-dom";

const Menubar = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const registerScroll = () =>{
    window.scrollTo({
      top: 200, 
      behavior: 'smooth',
    });
  };

  const speakerScroll = () =>{
    window.scrollTo({
      top: 1360, 
      behavior: 'smooth'
    });
  };

  const highlightScroll = () =>{
    window.scrollTo({
      top: 2750, 
      behavior: 'smooth'
    });
  };


  return (
    <>
    <div className='tab-desktop' >
    <div className='btn-wraper'>
    <span className='btn'>
   
    <Tabs className='Tabs' indicatorColor=""   onChange={handleChange} value={value}  aria-label="disabled tabs example" sx={{     
      height: 70,backgroundColor: 'inherit', borderRadius:4}}>
    {/* <Link to="/register"> */}
    <Tab label="Register" onClick={registerScroll} sx={{
            width:'auto',
            height:70 ,
            opacity:1,
            fontSize:20,
            textAlign:'center',
            paddingTop:2,paddingBottom:2,paddingLeft:7,paddingRight:7,
            color:'grey',
            textTransform:'capitalize',
            '&:hover': {
            backgroundColor: 'rgb(237 28 36)',
            color:'#fff',
       },
      }}/>
    {/* </Link> */}
    {/* <Link to="/speakers"> */}
    <Tab label="Speakers" onClick={speakerScroll} sx={{width:'auto',
            height:70 ,
            fontSize:20,
            opacity:1,
            textAlign:'center',
            paddingTop:2,paddingBottom:2,paddingLeft:7,paddingRight:7,
            color:'grey',
            textTransform:'capitalize',
            '&:hover': {
              backgroundColor: 'rgb(237 28 36);',
              color:'#fff',
          }
          }} />
      {/* </Link> */}
      {/* <Link to="/highlights"> */}
    <Tab label="Highlights" onClick={highlightScroll} sx={{width:'auto',
            height:70 ,
            fontSize:20,
            opacity:1,
            textAlign:'center',
            paddingTop:2,paddingBottom:2,paddingLeft:7,paddingRight:7,
            color:'grey',
            textTransform:'capitalize',
            '&:hover': {
              backgroundColor: 'rgb(237 28 36);',
              color:'#fff',
            }
            }} />
      {/* </Link> */}
    </Tabs>
    </span>
    </div>
    </div>
    <div className='tab-mob' >
    <div className='btn-wraper'>
    <span className='btn'>
    <Tabs className='Tabs' indicatorColor="" onChange={handleChange} value={value} aria-label="disabled tabs example" sx={{ 
       height: 70,
       backgroundColor: 'inherit',    
       borderRadius:4}}>
    {/* <Link to="/register"> */}
    <Tab label="Register" sx={{
            width:100,
            height:70 ,
            opacity:1,
            fontSize:20,
            textAlign:'center',
            paddingTop:2,paddingBottom:2,paddingLeft:7,paddingRight:7,
            color:'grey',
            textTransform:'capitalize',
            '&:hover': {
            backgroundColor: 'rgb(237 28 36);',
            color:'#fff',
        },
      }}/>
    {/* </Link> */}
    {/* <Link to="/speakers"> */}
    <Tab label="Speakers" sx={{width:100,
            height:70 ,
            fontSize:20,
            opacity:1,
            textAlign:'center',
            paddingTop:2,paddingBottom:2,paddingLeft:7,paddingRight:7,
            color:'grey',
            textTransform:'capitalize',
            '&:hover': {
              backgroundColor: 'rgb(237 28 36);',
              color:'#fff',
          }}} />
    {/* </Link> */}
    {/* <Link to="/highlights">     */}
    <Tab label="Highlights" sx={{width:130,
            opacity:1,
            height:70 ,
            fontSize:20,
            textAlign:'center',
            paddingTop:2,paddingBottom:2,paddingLeft:7,paddingRight:7,
            color:'grey',
            textTransform:'capitalize',
            '&:hover': {
              backgroundColor: 'rgb(237 28 36);',
              color:'#fff',
            }}} />
    {/* </Link> */}
    </Tabs>
    </span>
    </div>
    </div>
    </>
  )
}

export default Menubar