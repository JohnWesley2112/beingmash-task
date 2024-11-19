import React from 'react';
import './Style.css'

function Testimonials() {
    return (
        <div className='testimonial-container'>
            <div className="testimonial-wrapper">
                <div className="testimonials">
                    <div className="testimony">
                        <img src={require('../assets/user1.png')} alt="" />
                        <h2>Sara Dainels</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempore laudantium nemo sed, rerum ex!
                        </p>
                    </div>
                    <div className="testimony">
                        <img src={require('../assets/user3.png')} alt="" />
                        <h2>Diana</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempore laudantium nemo sed, rerum ex!
                        </p>
                    </div>
                    <div className="testimony">
                        <img src={require('../assets/user2.png')} alt="" />
                        <h2>Lidiya Joshep</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempore laudantium nemo sed, rerum ex!
                        </p>
                    </div>

                    <div className="testimony">
                        <img src={require('../assets/user3.png')} alt="" />
                        <h2>Danita Johnson</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempore laudantium nemo sed, rerum ex!
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Testimonials