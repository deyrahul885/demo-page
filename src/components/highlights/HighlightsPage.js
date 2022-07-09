import React from 'react';
import Slider from "react-slick";
import '../highlights/Highlights.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HighlightsPage = () => {
  var settings = {
    dots: true,
    centerMode: true,
    // infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
    <div className='highlight-wraper' >
    <h1 className='highlight'>Highlights</h1>
    <div className='slide'>
    <Slider {...settings}>
          
          <div>
          <img src='images/img2.jpg' className='slide-img' alt={"logo"}/>
          <p className='slide-description'>A beautiful environment to explore.</p>
          </div>
          <div>
          <img src='images/img3.jpg' className='slide-img' alt={"logo"}/>
          <p className='slide-description'>Entertaining and inspirational talks from
             special guests</p>
          </div>
          <div>
          <img src='images/img3.jpg' className='slide-img' alt={"logo"}/>
          <p className='slide-description'>Entertaining and inspirational talks from
             special guests</p>
          </div>
          <div>
          <img src='images/img1.png' className='slide-img' alt={"logo"}/>
          <p className='slide-description'>A wide range of avatars to choose from.</p>
          </div>
          {/* <div>
          <img src='images/img3.jpg' className='slide-img' alt={"logo"}/>
          <p className='slide-description'>Entertaining and inspirational talks from
             special guests</p>
          </div> */}
          {/* <div>
          <img src='images/img3.jpg' className='slide-img' alt={"logo"}/>
          <p className='slide-description'>Entertaining and inspirational talks from
             special guests</p>
          </div>
          <div>
          <img src='images/img3.jpg' className='slide-img' alt={"logo"}/>
          <p className='slide-description'>Entertaining and inspirational talks from
             special guests</p>
          </div> */}
        </Slider>
        </div>
        </div>
    </>
  )
}

export default HighlightsPage