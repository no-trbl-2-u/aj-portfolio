import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'

const CarouselGalleryStyle = {
  maxWidth: "100%",
}

function CarouselGallery(props) {
  // STATE
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(null)
  
  // METHODS
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
    setDirection(e.direction)
  }

  // RENDER
  return (
    <section className="Carousel-Container">
    <Carousel
      activeIndex={ index }
      direction={ direction }
      slide={ true }
      onSelect={ handleSelect }
      style={ CarouselGalleryStyle }
    >
      {/* Image A */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/800/360/?random"
          alt="First slide"
        />
        {/* Caption A */}
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Image B */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/800/361/?random"
          alt="Third slide"
        />
      {/* Caption B */}
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Image C */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/800/362/?random"
          alt="Third slide"
        />
      {/* Caption C */}
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </section>
  )
}

export default CarouselGallery