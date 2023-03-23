import React from "react";
import { FaBuilding } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import { RiHomeHeartFill } from "react-icons/ri";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import url from "../../config";

export default function Aboutsus() {
  return (
    <div>
      <div className="firstaboutbox">
        <div className="text-start d-flex-column align-items-end  p-5">
          {/* <div class="elementor-background-overlay">
            <h2 className="pt-4">About Us</h2>
            <p class="elementor-image-box-description pb-4">
              We are a team of professionals with an experience of 20 years in
              domestic and commercial Renting services.
            </p>
          </div> */}
        </div>
      </div>

      <div className="secaboutbox">
        <div className="aboutdivbox">
          <div className=" m-2">
          <h3 className=" m-3">About us</h3>
            <h2>We are Leading In the India</h2>
            <div>
              <p>Welcome to our company, a cutting-edge platform for retail spaces! We are dedicated to providing innovative solutions for retailers, landlords, and startups. Our mission is to revolutionize the way people shop by creating immersive and exciting retail environments that are tailored to meet the needs of modern consumers.</p>
            </div>
          </div>

          <div className="d-flex flex-column justify-content-center p-5">
            <div className="d-flex justify-content-evenly">
              <div className="iconbox">
                <h2>
                  <FaBuilding />
                </h2>
              </div>
              <div className="ms-4">
                <h2>Location advantages</h2>
                <p>
                Rental spaces are often located in high-traffic areas or business districts, which can provide companies with better visibility and access to potential customers or clients. This can help drive revenue growth and increase brand awareness.
                </p>
              </div>
            </div>

            <div className="d-flex justify-content-evenly ">
              <div className="iconbox">
                <h2>
                  <BsBank2 />
                </h2>
              </div>
              <div className="ms-4">
                <h2>Flexibility</h2>
                <p>
                Renting a space can give companies more flexibility to adapt to changing market conditions or business needs. They can often negotiate shorter lease terms or more flexible rental agreements, which can be beneficial if they need to scale up or down quickly.
                </p>
              </div>
            </div>

            <div className="d-flex justify-content-evenly ">
              <div className="iconbox">
                <h2>
                  <RiHomeHeartFill />
                </h2>
              </div>

              <div className="ms-4">
                <h2>Cost savings</h2>
                <p>
                Renting a space can be more cost-effective than owning one, especially for smaller businesses. By renting a space, companies can avoid the upfront costs associated with purchasing property, as well as ongoing expenses like maintenance and repairs
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    
      <div className="thirdaboutbox d-flex justify-content-around">
        <div className="mebemname m-2">
          <div className="d-flex p-3 flex-row">
            <h3 >
              <AiFillStar />
            </h3>
            <h3>
              <AiFillStar />
            </h3>
            <h3>
              <AiFillStar />
            </h3>
            <h3>
              <AiFillStar />
            </h3>
            <h3>
              <AiOutlineStar />
            </h3>
          </div>
          <div className="p-2">
            <p>
            We provide access to a wider range of properties than traditional methods
            </p>
          </div>
          <div className="elementimage d-flex p-2 flex-row align-items-center">
            <div>
              <img
                decoding="async"
                width="100"
                height="100"
                alt=""
                loading="lazy"
                srcset={require("../../images/kp.png")}
                sizes="(max-width: 150px) 100vw, 150px"
              />
            </div>
            <div class="elementor-testimonial-details ms-3">
              <div class="elementor-testimonial-name fs-4"><b>Kaustubh Patil</b></div>
            </div>
          </div>
        </div>
        <div className="mebemname m-2">
          <div className="d-flex p-3 flex-row">
            <h3 >
              <AiFillStar />
            </h3>
            <h3>
              <AiFillStar />
            </h3>
            <h3>
              <AiFillStar />
            </h3>
            <h3>
              <AiFillStar />
            </h3>
            <h3>
              <AiOutlineStar />
            </h3>
          </div>
          <div className="p-2">
            <p>
             Save time and effort compared to searching for properties offline
            </p>
          </div>
          <div className="elementimage d-flex p-2 flex-row align-items-center">
            <div>
              <img
                width="100"
                height="100"
                alt="img not found"
                srcset={require("../../images/swaraj.png")}
                sizes="(max-width: 150px) 100vw, 150px"
              />
            </div>
            <div class="elementor-testimonial-details ms-3">
              <div class="elementor-testimonial-name fs-4"><b>Swaraj</b></div>
            </div>
          </div>
        </div>
        <div className="mebemname m-2">
          <div className="d-flex p-3 flex-row">
            <h3 >
              <AiFillStar />
            </h3>
            <h3>
              <AiFillStar />
            </h3>
            <h3>
              <AiFillStar />
            </h3>
            <h3>
              <AiFillStar />
            </h3>
            <h3>
              <AiOutlineStar />
            </h3>
          </div>
          <div className="p-2">
            <p>
            Offer secure payment processing and insurance to protect renters and property owners
            </p>
          </div>
          <div className="elementimage d-flex p-2 flex-row align-items-center">
            <div>
              <img
                width="100"
                height="100"
                alt="img not found"
                srcset={require("../../images/rahulimg.png")}
                sizes="(max-width: 150px) 100vw, 150px"
              />
            </div>
            <div class="elementor-testimonial-details ms-3">
              <div class="elementor-testimonial-name fs-4"><b>Rahul</b></div>
            </div>
          </div>
        </div>
        <div className="mebemname m-2">
          <div className="d-flex p-3 flex-row">
            <h3 >
              <AiFillStar />
            </h3>
            <h3>
              <AiFillStar />
            </h3>
            <h3>
              <AiFillStar />
            </h3>
            <h3>
              <AiFillStar />
            </h3>
            <h3>
              <AiOutlineStar />
            </h3>
          </div>
          <div className="p-2">
            <p>
            Convenient and practical way to search for and rent properties
            </p>
          </div>
          <div className="elementimage d-flex p-2 flex-row align-items-center">
            <div>
              <img
                width="100"
                height="100"
              
                alt="img not found"
                srcset={require("../../images/ashitosh.png")}
                sizes="(max-width: 150px) 100vw, 150px"
              />
            </div>
            <div class="elementor-testimonial-details ms-3">
              <div class="elementor-testimonial-name fs-4"><b>Ashitosh</b></div>
            </div>
          </div>
        </div>
        <div className="mebemname m-2">
          <div className="d-flex p-3 flex-row">
            <h3 >
              <AiFillStar />
            </h3>
            <h3>
              <AiFillStar />
            </h3>
            <h3>
              <AiFillStar />
            </h3>
            <h3>
              <AiFillStar />
            </h3>
            <h3>
              <AiOutlineStar />
            </h3>
          </div>
          <div className="p-2">
            <p>
            Easy to view photos, read reviews, and communicate with property owners or managers directly through the app
            </p>
          </div>
          <div className="elementimage d-flex p-2 flex-row align-items-center">
            <div className="projectmember">
              <img
                width="100"
                height="100"
                alt="omg not found"
                srcset={require("../../images/rohitimg.png")}
                sizes="(max-width: 150px) 100vw, 150px"
              />
            </div>
            <div class="elementor-testimonial-details ms-3">
              <div class="elementor-testimonial-name fs-4"><b>Rohit</b></div>
            </div>
          </div>
        </div>
      </div>
{/* 
      <div className="fourthbox text-center m-5">
        <div className="container">
          <div className="m-3">
            <h4 style={{ color: "#ffc03d" }}>Trust And Worth</h4>
          </div>
          <div className="m-5">
            <h2>Our Clients</h2>
          </div>
          <div className="d-flex justify-content-between">
            <figure className="swiper-slide-inner"><img decoding="async" className="swiper-slide-image" src="https://websitedemos.net/construction-company-02/wp-content/uploads/sites/977/2021/11/logo-3-1-1.svg" alt="logo-3 1"/>
            </figure>
            <figure className="swiper-slide-inner"><img decoding="async" className="swiper-slide-image" src="https://websitedemos.net/construction-company-02/wp-content/uploads/sites/977/2021/11/logo-1-1.svg" alt="logo-1 1"/>
            </figure>
            <figure className="swiper-slide-inner"><img decoding="async" className="swiper-slide-image" src="https://websitedemos.net/construction-company-02/wp-content/uploads/sites/977/2021/11/logo-2-1-1.svg" alt="logo-2 1"/>
            </figure>
            <figure className="swiper-slide-inner"><img decoding="async" className="swiper-slide-image" src="https://websitedemos.net/construction-company-02/wp-content/uploads/sites/977/2021/11/logo-4-1-1.svg" alt="logo-4 1"/>
            </figure>
          </div>
        </div>
      </div> */}
    </div>

  );
}
