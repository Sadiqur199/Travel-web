import React, { useEffect, useState } from 'react';
import './Main.scss'
import {HiOutlineClipboardCheck, HiOutlineLocationMarker} from 'react-icons/hi'

const Main = () => {
const [Data , setData] = useState([])
  useEffect(()=>{
    fetch("travel.json")
    .then(res=>res.json())
    .then(D=>setData(D))
  },[])
  console.log(Data)
  return (
    <section className='main container section'>

      <div className='secTitle'>
        <h3 className='title'>
          Most visited destinations
        </h3>
      </div>
      <div className="secContent grid">
      {
        Data.map((item)=>{
          return(
            <div key = {item.id} className='singleDestination'>
              <div className='imageDiv'>
                <img src={item.imgsrc} alt={item.desttitle} />
              </div>
               <div className="cardInfo">
                <h4 className='destTitle'>{item.desttitle}</h4>
                <span className='continent flex'>
                  <HiOutlineLocationMarker className='icon'/>
                  <span className='name'> {item.location}</span>
                </span>

                <div className='fees flex'>
                  <div className='grade'>
                   <span>{item.grade} <small>+1</small> </span>
                  </div>
                  <div className="price">
                    <h5>{item.price}</h5>
                  </div>
                </div>

                <div className='desc'>
                  <p>{item.description}</p>
                </div>

                 <button className='btn flex'>Details <HiOutlineClipboardCheck/> </button>

               </div>
            </div>
          )
        })
      }
      </div>
    </section>
  );
};

export default Main;