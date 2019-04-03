import React from 'react'
import TopNavbar from '../Components/TopNavbar'
import CarouselGallery from '../Components/CarouselGallery';


function LandingPage (props) {
  return (
    <section>
      <TopNavbar />
      <h1 className="Landing-Header">Akiyah Johnson | Painter</h1>
      <CarouselGallery />
      <br />
      <br />
      <div>
        <p>More Text</p>
        <p>More Text</p>
        <p>More Text</p>
      </div>
    </section>
  )
}

export default LandingPage