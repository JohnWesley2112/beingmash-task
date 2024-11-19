import React from 'react'
import './Style.css'

function HeroPage() {
    return (
        <div className='hero-container'>
            <div className="hero-wrapper">
                <img src={require('../assets/hero.jpg')} alt="" />
                <div className="hero-content">
                    <h1>The Hero Page</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem blanditiis quae quo perspiciatis, beatae eligendi impedit assumenda minima? Cumque est modi eaque officiis magnam earum debitis? Alias ex aut est.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeroPage