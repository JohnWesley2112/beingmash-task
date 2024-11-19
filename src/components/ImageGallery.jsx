import React from 'react'
import './Style.css'

function ImageGallery() {

    const imgArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    return (
        <div className='gallery-container'>
            <div className="gallery-wrapper">

                {imgArray.map((ele) => {
                    return (<div className="gallery-img-wrapper">
                        <img src={require(`../assets/gal${ele}.jpg`)} alt="" />
                    </div>)
                })
                }
            </div>
        </div>
    )
}

export default ImageGallery