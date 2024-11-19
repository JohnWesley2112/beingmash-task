import React, { useState } from 'react'
import './Style.css'

const BgI = [
    { url: 'url(./images/img1.jpg)' },
    { url: 'url(./images/img2.jpg)' },
    { url: 'url(./images/img3.jpg)' },
    { url: 'url(./images/img4.jpg)' },
    { url: 'url(./images/img5.jpg)' }
]

const Slide = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const itemSlideStyle = {
        backgroundImage: `${BgI[currentIndex].url}`,
    }

    const handlePrev = () => {
        const isFirstIndex = currentIndex === 0;
        const newIndex = isFirstIndex ? BgI.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }
    const handleNext = () => {
        const isLastIndex = currentIndex === BgI.length - 1;
        const newIndex = isLastIndex ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    return (
        <div style={itemSlideStyle} className="item">
            <button className='carousel-btn prev-btn' onClick={handlePrev} type="button"> &#10096;</button>
            <button className='carousel-btn next-btn' onClick={handleNext} type="button">&#10097;</button>
        </div>
    )
}

function Carousel() {

    return (
        <div className='carousel-container'>
            <div className="carousel-wrapper">
                <Slide />

            </div>
        </div>
    )
}

export default Carousel