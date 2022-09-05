import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../card/Card'
import CV from './CV_NHAILA_Fadoi.pdf'



function Services() {
  return (
    <div className='services' id='Services'>
        {/* left side */}
        <div className="awesome">
            <span>My Awesome</span>
            <span>Services</span>
            <span>Lorem ipsum dolor sit adipisicing elit. Rem praesentium minima natus,<br /> quia eum eveniet excepturi. Consectetur blandi.</span>
            <a href={CV} download><button className='button s-button'>Download CV</button></a>
            <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
        </div>

        {/* right side */}
        <div className="cards">
            <div style={{left: '14rem'}}>
                <Card
                    emoji = {HeartEmoji}
                    heading = {'Design'}
                    detail = {'Figma, Adobe, Photoshop'}
                />
            </div>

            <div style={{left: '-4rem', top:'12rem'}}>
                <Card
                    emoji = {Glasses}
                    heading = {'Front End Developer'}
                    detail = {'HTML, CSS, JavaScript, React, Vue'}
                />
            </div>

            <div style={{left: '12rem', top:'19rem'}}>
                <Card
                    emoji = {Humble}
                    heading = {'Back End Developer'}
                    detail = {'PHP, Laravel, Symfony, MySQL, Python, Java'}
                />
            </div>

            <div className="blur s-blur2" style={{background:'var(--purple)'}}></div>

        </div>
    </div>
  )
}

export default Services