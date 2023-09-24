import React, { useEffect } from "react";
import "./Footer.scss";
import video from "../../assets/istockphoto-1133146144-640_adpp_is.mp4";
import { FiChevronRight, FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type="video-/-mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos='fade-up' className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos='fade-up' type="text" placeholder="Enter Your Mail Address" />
            <button data-aos='fade-up' className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="" className="logo flex">
                {" "}
                <MdOutlineTravelExplore className="icon" />
                Travel.
              </a>
            </div>

            <div data-aos='fade-up' className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
              tempore a aperiam inventore quia enim sunt odit ducimus alias ipsa
              nobis voluptates voluptate, quod nemo autem consectetur facilis
              laborum at!
            </div>

            <div data-aos='fade-up' className="footerSocials">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            {/* Group One */}
            <div data-aos='fade-up' 
            data-aos-duration='3000' className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>

            {/* Group two */}
            <div data-aos='fade-up'
            data-aos-duration='4000' className="linkGroup">
              <span className="groupTitle">PARTNERS</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                RentCars
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                HostelWorld
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Trivago
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                TripAdvisor
              </li>
            </div>

            {/* Group three */}
            <div data-aos='fade-up' 
            data-aos-duration='5000' className="linkGroup">
              <span className="groupTitle">LAST MINUTE</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Darjeeling
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Cox'sBazar
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Rangamati
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Sitakunda
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Singapore
              </li>
            </div>
          </div>

           <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE IN BD.</small>
            <small>COPYRIGHTS RESERVED - SADIQ 2023 </small>
           </div>

        </div>
      </div>
    </section>
  );
};

export default Footer;
