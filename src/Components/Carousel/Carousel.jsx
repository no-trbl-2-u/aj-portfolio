import React from 'react'
import './Carousel.css'

function Carousel(props){
  return (
    <section className="Carousel-Container">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#gallery" data-slide-to="0" className="active"></li>
          <li data-target="#gallery" data-slide-to="1"></li>
          <li data-target="#gallery" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://picsum.photos/800/600/?random" className="d-block w-100" alt="random" />
          </div>

          <div className="carousel-item">
            <img src="https://picsum.photos/800/600/?random" className="d-block w-100" alt="random" />
          </div>

          <div className="carousel-item">
            <img src="https://picsum.photos/800/600/?random" className="d-block w-100" alt="random" />
          </div>
        </div>

        <a className="carousel-control-prev" href="#gallery" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>

        <a className="carousel-control-next" href="#gallery" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
  )
}

export default Carousel