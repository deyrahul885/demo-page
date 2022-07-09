import React from 'react'
import './Speakers.css'

const Speakers = () => {
  return (
    <>
    <div className='speaker-wraper'>
    <h1 className='speaker'>Speakers</h1>
    <div>
    <div class="card-container-left">
        <div class="float-layout">
            <div class="card-image-left">
            <img src='images/vibha.png' alt='logo'/>
            <div class="card">
                <div class="card-title-left">Vibha Padalkar</div>
                <div class="card-desc">
                    CEO and MD of HDFC Life, Vibha Padalkar is an inspirational leader
                    and recipient of the "Most Powerful Women in Business" award by
                </div>
            </div>
            </div>
        </div>
    </div>
    <div class="card-container-right">
        <div class="float-layout">
            <div class="card-image-right">
            <img src='images/su.jpg' alt='logo'/>
            <div class="card">
                <div class="card-title-right">Sunil Chhetri</div>
                <div class="card-desc-right">
                Captain of the Indian National Football team, Sunil Chhetri is a proud
                recipient of the Arjuna Award, the Padma Shri, the Khel Ratna and
                </div>
            </div>
            </div>
        </div>
    </div>
    <div class="card-container-left">
        <div class="float-layout">
            <div class="card-image-left">
            <img src='images/swati-bhargava.webp' alt='logo'/>
            <div class="card">
                <div class="card-title-left">Swati Bhargava</div>
                <div class="card-desc">
                Co-Founder of CashKaro.com and EarnKaro.com, Swati Bhargava is
                one of Indiaʼs leading women entrepreneurs and was featured in
                </div>
            </div>
            </div>
        </div>
    </div>
    <div class="card-container-right">
        <div class="float-layout">
            <div class="card-image-right">
            <img src='images/karunesh_talwar.jpg' alt='logo'/>
            <div class="card">
                <div class="card-title-right">Karunesh Talwar</div>
                <div class="card-desc-right">
                With over 700K subscribers on YouTube and over 170K followers on 
                Instagram, Karunesh Talwar is one of India's most adored comedians.
                </div>
            </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Speakers