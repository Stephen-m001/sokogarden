import React from 'react'
const Carousel = () => {
  return (
    <section className="row">
  <div className="col-md-12">
    {/* Carousel */}
    <div
      id="mycarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        
        {/* Slide 1 */}
        <div className="carousel-item active">
          <img
            src="images/game3.jpeg"
            alt="slide1"
            style={{ width: "100%", height: "600px" }}
          />
          <div className="carousel-caption text-success">
            <h5>Rooms</h5>
            <p>
              Unwind in a calm and comfortable space designed to give you a peaceful night’s rest.
            </p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img  style={{height:"300px",objectFit:"contain" }}
            src="images/game2.jpeg"
            alt="slide2"
            // style={{ width: "100%", height: "600px" }}
          />
          <div className="carousel-caption text-success">
            <h5>Foods</h5>
            <p>
              A signature dish created daily by our chef, inspired by seasonal ingredients and customer favorites.
            </p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <img
            src="images/game3.jpeg"
            alt="slide3"
            style={{ width: "100%", height: "600px" }}
          />
          <div className="carousel-caption text-success">
            <h5>Gym</h5>
            <p>
              Stay energized with access to our fitness facilities designed for comfort and convenience.
            </p>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="carousel-item">
          <img
            src="images/cr4.jpg"
            alt="slide4"
            style={{ width: "100%", height: "600px" }}
          />
          <div className="carousel-caption text-success">
            <h5>Pools</h5>
            <p>
              Take a refreshing swim in our well-maintained pool, suitable for both leisure and exercise.
            </p>
          </div>
        </div>

        {/* Slide 5 */}
        <div className="carousel-item">
          <img
            src="images/m4.jfif"
            alt="slide5"
            style={{ width: "100%", height: "600px" }}
          />
          <div className="carousel-caption text-success">
            <h5>Movie Night</h5>
            <p>
              Join us for live music nights, themed events, and relaxing evening entertainment.
            </p>
          </div>
        </div>

      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#mycarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon bg-success"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#mycarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon bg-success"></span>
      </button>
    </div>
  </div>
</section>
  )
}

export default Carousel