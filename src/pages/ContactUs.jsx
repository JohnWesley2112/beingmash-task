import React from 'react';
import './style.css'

function ContactUs() {
    return (
        <div className='about-page'>
            <div className="about-page-wrapper">
                <div className="about-content">
                    <h1>Contact Us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nostrum quasi dolorem veniam provident hic non culpa deserunt iusto rerum iure corporis facere tempore consequuntur id quos sit, fugit beatae soluta in! Eligendi quas laudantium dolores, ullam numquam placeat itaque corrupti ducimus suscipit quam facilis. Et ea, nulla nihil debitis optio incidunt nisi, explicabo eos quae quam mollitia, vel fugit.</p>
                </div>
                <img src={require('../assets/women.png')} alt="" />
            </div>
        </div>
    )
}

export default ContactUs