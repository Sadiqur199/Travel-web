import React, { useEffect } from 'react';
import './Home.scss'
import video from '../../assets/ocean_-_65560 (Original).mp4'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {FiFacebook} from 'react-icons/fi'
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaWhatsapp  } from 'react-icons/fa';
import { BsListTask  } from 'react-icons/bs';
import { TbApps } from 'react-icons/tb';
import Aos from 'aos'
import 'aos/dist/aos.css'


const Home = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <>
    <section className='home'>
      <div className='overlay'></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className='textDiv'>
          <span data-aos='fade-up'  className=' smallText'>Our Packages</span> 

          <h1 data-aos='fade-up' className='homeTitle'>Search your Holidays</h1>

        </div>

        <div data-aos='fade-up' className='cardDiv grid'>
          <div className='destinationInput'>
             <label htmlFor="city">Search your destination:</label>
             <div className='input flex'>
                <input type="text" placeholder='Enter name here' />
                <GrLocation className='icon'/>
             </div>  
          </div>

          <div className='dateInput'>
             <label htmlFor="date">Select Your Date:</label>
             <div className='input flex'>
                <input type="date" />
             </div>  
          </div>

          <div className='priceInput'>
            <div className='label_total flex'>
             <label htmlFor="price">Max price:</label>
             <h3 className='total'>$5000</h3>
            </div>
            <div className='input flex'>
               <input type="range" max="5000" min="1000"/>
            </div>
          </div>
       
         <div className='searchOptions flex'>
            <HiFilter className='icon'/>
            <span>MORE FILTERS</span>
         </div>
        </div>

         <div data-aos='fade-up' className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className='icon'/>
            <AiOutlineInstagram className='icon'/>
            <FaWhatsapp className='icon'/>
          </div>
          <div className="leftIcons">
          <BsListTask className='icon'/>
          <TbApps className='icon'/>
          </div>
         </div>
      </div>
    </section>

    <section>

      <div className='whatsapp'>
        <a href="https://wa.me/01775070762" target='_blank'>
        <img src="https://i.ibb.co/dPYfPcY/download-removebg-preview.png" alt="" />
        </a>
      </div>
    </section>
    </>
  );
};

export default Home;