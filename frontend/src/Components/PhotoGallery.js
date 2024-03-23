import React from 'react'
import './PhotoGallery.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import BIT25 from "../photos/BIT 25.jpg"
import BIT26 from "../photos/BIT 26.jpeg"
import BIT27 from "../photos/BIT 27.jpeg"
import BIT28 from "../photos/BIT 28.jpeg"
import BIT29 from "../photos/BIT 29.jpg"
import BIT30 from "../photos/BIT 30.jpg"
import BIT31 from "../photos/BIT 31.jpg"
import BIT32 from "../photos/BIT 32.jpeg"
import BIT33 from "../photos/BIT 33.jpeg"
import BIT34 from "../photos/BIT 34.jpeg"
//import BIT35 from "../photos/BIT 35.jpg"

function PhotoGallery() {
    return (
        <div className='photogallery-container'>
            <h1 className='photogallery-title'>Photo Gallery</h1>
            <div className="photogallery-images">
                <img src={BIT25}alt=''/>
                <img src={BIT26} alt=''/>
                <img src={BIT27} alt=''/>
                <img src={BIT28} alt=''/>
                <img src={BIT29}alt=''/>
                <img src={BIT30}alt=''/>
                <img src={BIT31}alt=''/>
                <img src={BIT32} alt=''/>
                <img src={BIT33} alt=''/>
                <img src={BIT34} alt=''/>
            </div>
            <button>VIEW MORE<ArrowForwardIosIcon style={{fontSize:20}}/></button>
        </div>
    )
}

export default PhotoGallery