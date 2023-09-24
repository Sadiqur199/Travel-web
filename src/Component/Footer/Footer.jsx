import React from 'react';
import './Footer.scss'
import video from '../../assets/istockphoto-1133146144-640_adpp_is.mp4'
import {FiSend} from 'react-icons/fi'
const Footer = () => {
  return (
    <section className='footer'>
      <div className='videoDiv'>
      <video src={video} loop autoPlay muted type='video-/-mp4'></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">

           <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
           </div>

          <div className='inputDiv flex'>
            <input type="text" placeholder='Enter Your Mail Address'/>
            <button className='btn flex' type='submit'>
             SEND <FiSend className='icon'/>
            </button>
          </div>
          
        </div>
      </div>

    </section>
  );
};

export default Footer;