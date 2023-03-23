import React from 'react'

export default function testimonial() {
  return (
    <>
    
    <section class="gradient-custom">
  <div class="container my-5 py-5">
    <div class="row d-flex justify-content-center">
      <div class="col-md-12">
        <div class="text-center mb-4 pb-2">
          <i class="fas fa-quote-left fa-3x text-black"></i>
        </div>

        <div class="card">
          <div class="card-body px-4 py-5">
            {/* <!-- Carousel wrapper --> */}
            <div id="carouselDarkVariant" class="carousel slide carousel-dark" data-mdb-ride="carousel">
              {/* <!-- Indicators --> */}
              <div class="carousel-indicators mb-0">
                <button data-mdb-target="#carouselDarkVariant" data-mdb-slide-to="0" class="active"
                  aria-current="true" aria-label="Slide 1"></button>
                <button data-mdb-target="#carouselDarkVariant" data-mdb-slide-to="1"
                  aria-label="Slide 1"></button>
                <button data-mdb-target="#carouselDarkVariant" data-mdb-slide-to="2"
                  aria-label="Slide 1"></button>
              </div>

              {/* <!-- Inner --> */}
              <div class="carousel-inner pb-4">
                {/* <!-- Single item --> */}
                <div class="carousel-item active">
                  <div class="row d-flex justify-content-center">
                    <div class="col-lg-10 col-xl-8">
                      <div class="row">
                        <div class="col-lg-4 d-flex justify-content-center">
                          <img src={"https://www.lodhagroup.in/home/assets/img/400x300_Lodha_logo.jpg"}
                             alt="woman avatar" width="150"
                            height="150" />
                        </div>
                        <div
                          class="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                          <h4 class="mb-4"><b><i>Lodha Group - "Building a Better Life"</i></b></h4>
                          <p class="mb-0 pb-3">
                          <b>We believe real estate is more than just building the proverbial four walls, it's about "Building a Better Life". This is the ideology with which we at Lodha have delivered the world's finest developments that have become some of the most iconic addresses and the most desirable residences in India as well as in London.</b>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Single item --> */}
                <div class="carousel-item">
                  <div class="row d-flex justify-content-center">
                    <div class="col-lg-10 col-xl-8">
                      <div class="row">
                        <div class="col-lg-4 d-flex justify-content-center">
                          <img src="https://www.panchshil.com/img/logo.jpg"
                             alt="woman avatar" width="150"
                            height="150" />
                        </div>
                        <div
                          class="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                          <h4 class="mb-4"><b><i>Panchshil Towers</i></b></h4>
                          <p class="mb-0 pb-3">
                          <b>Panchshil's portfolio spans across high-end residential developments, IT parks, built-to-suit office spaces development.Perfection is the cornerstone of our work. Over the years, we have crafted fine lifestyles through our portfolio. The merits of our efforts are reflected in the various awards and recognition earned over the years. Panchshil is synonymous with premium finish, intelligent floor layouts, innovative solutions, high-quality execution, and after-sales maintenance.</b>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="carousel-item">
                  <div class="row d-flex justify-content-center">
                    <div class="col-lg-10 col-xl-8">
                      <div class="row">
                        <div class="col-lg-4 d-flex justify-content-center">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR09EwtWMx2d6-cAPjwRsnldW6hYYsKG6i05ar9l6YBYQ&s"
                             alt="woman avatar" width="150"
                            height="150" />
                        </div>
                        <div
                          class="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                          <h4 class="mb-4"><b><i>Amanora Park Town - "The lifestyle you've dreamed of in a community you can call your own"</i></b></h4>
                          <p class="mb-0 pb-3">
                          <b>State-of-the-art infrastructure came together with the latest technology – from smart access social infrastructure.
                          International architects brought in iconic facades and smart design concepts
                          From a fire-station to a school and hospital, Amanora introduced the idea of living away from everything you need.</b>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Single item --> */}
                <div class="carousel-item">
                  <div class="row d-flex justify-content-center">
                    <div class="col-lg-10 col-xl-8">
                      <div class="row">
                        <div class="col-lg-4 d-flex justify-content-center">
                          <img src="https://www.prestigeconstructions.com/images/logo.png"
                             alt="woman avatar" width="150"
                            height="150" />
                        </div>
                        <div
                          class="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                          <h4 class="mb-4"><b><i>PRESTIGE GROUP</i></b></h4>
                          <p class="mb-0 pb-3">
                          <b>The company has diversified over time into a number of related/non-related services, each of them spearheaded by individuals with adroit capacity. Services are as varied as the interior designing done by Morph Design Company (MDC) and the redefinition of elegance and suave in men’s formal dressing by Prestige Fashions (P) Ltd. They are also the only developers in South India to boast of such a widely diverse portfolio covering the residential, commercial, retail, leisure and hospitality segments</b>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Inner -->

              <!-- Controls --> */}
              <button class="carousel-control-prev" type="button" data-mdb-target="#carouselDarkVariant"
                data-mdb-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-mdb-target="#carouselDarkVariant"
                data-mdb-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            {/* <!-- Carousel wrapper --> */}
          </div>
        </div>

        <div  class="text-center mt-4 pt-2">
          <i class="fas fa-quote-right fa-3x text-black"></i>
        </div>
      </div>
    </div>
  </div>
</section>
    
    </>
  )
}
