import React from 'react'
import '../footer/footer.css'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
const Footer = () => {
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  return (
    <>
    <div className='footer-wraper'>
        <div className='footer-title'>
            <p>Terms and Conditions - Privacy Policy</p> 
            <ExpandLessIcon onClick={scrollToTop}/>
        </div>
        <div className='footer-description'>
        <p><strong>HDFC Life Insurance Company Limited ("HDFC Life")</strong>. CIN: L65110MH2000PLC128245, IRDAI Registration No. 101.</p>
        <p><strong>Registered Office:</strong> 13th Floor, Lodha Excelus, Apollo Mills Compound, N.M. Joshi Marg, Mahalaxmi, Mumbai - 400 011.</p>
        <p>Email: service@hdfclife.com,Tel No: 1860-267-9999. Available (Mon-Sat 10 am to 7 pm) Local charges apply. DO NOT prefix any country code e.g. +91 or 00, Website: 
            www.hdfclife.com</p>
        <p>The name/letters "HDFC" in the name/logo of the company belongs to Housing Development Finance Corporation Limited ("HDFC Limited") and is used by HDFC Life under an 
          agreement entered into with HDFC Limited. </p>
        <p>Any unauthorized dissemination, distribution, reproduction, display, alteration or copying in any form or by any means of any contents of this communication is prohibited</p>
        <p>ARN: INT/MC/05/22/28801</p>
        </div>
    </div>
    </>
  )
}

export default Footer