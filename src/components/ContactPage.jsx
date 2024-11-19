import React from 'react'
import './Style.css'

function ContactPage() {
    return (
        <div className='contact-container'>
            <div className="contact-wrapper">
                <img src={require('../assets/contact.png')} alt="" />
                <form >
                    <h1>Contact us</h1>
                    <input placeholder='Your Name' type="text" name="" id="" />
                    <input placeholder='Your Email' type="text" name="" id="" />
                    <textarea placeholder='Tell us' name="" id=""></textarea>
                    <button type="button">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactPage