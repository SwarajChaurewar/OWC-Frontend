   import React from 'react'
   
   export default function Slider() {
     return (
       <>
<div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className  ="carousel-item active">
      <img src={"https://ctfassets.imgix.net/vh7r69kgcki3/4IY416EqySXcQq3A51yzM4/17de763e2381784ae66adc608cbdbce3/Web_150DPI-WeWork__-__21_Collyer_Quay__-__Singapore-15.jpg?auto=format%20compress&fit=crop&q=50&w=1350&h=759"} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5> Trump Towers</h5>
        <p></p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={"https://ctfassets.imgix.net/vh7r69kgcki3/HsR6nHqS3I8CxPIuT9EKD/92d775ed2747927686ec6a2f21d4864f/Web_150DPI-20221216_WeWork_Product_Shoot_Q4_8.jpg?auto=format%20compress&fit=crop&q=50&w=1350&h=759"} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Hilton Hills</h5>
        
      </div>
    </div>
    <div className="carousel-item">
      <img src={"https://images.pexels.com/photos/8960464/pexels-photo-8960464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Ellinton towers</h5>
        
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
       </>
     )
   }
   