import React from 'react'
import './ImageSlider.css'
import { Carousel } from 'react-bootstrap'
//import BIT3 from "../photos/BIT 3.jpeg"
import BIT2 from "../photos/BIT 2.jpg"
//import BIT1 from "../photos/BIT 1.jpeg"
//import BIT30 from "../photos/BIT 30.jpg"
//import BIT28 from "../photos/BIT 28.jpeg"
import BIT29 from "../photos/BIT 29.jpg"
import BIT31 from "../photos/BIT 31.jpg"

function ImageSlider() {
    return (
        <div className='slider'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={BIT2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={BIT29}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={BIT31}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                       
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ImageSlider

//<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
// <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>