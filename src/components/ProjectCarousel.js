import React, { useState } from 'react';
// import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'

export default function ProjectCarousel() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
     
            <Carousel activeIndex={index} onSelect={handleSelect} fluid>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        // height='500'
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        // height='500'
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        // height='500'
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    )
}