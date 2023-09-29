import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ViewDestination.scss'
import { HiOutlineClipboardCheck } from 'react-icons/hi';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const ViewDestination = () => {
  const { id } = useParams(); // Get the 'id' parameter from the URL

  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/travel.json')
      .then((res) => res.json())
      .then((data) => {
        const foundDestination = data.find((item) => item.id === parseInt(id));
        if (foundDestination) {
          setDestination(foundDestination);
        } else {
          setDestination(null); // Destination not found
        }
      })
      .catch((error) => {
        console.error('Error fetching destination details:', error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!destination) {
    return <div>Destination not found for ID: {id}</div>;
  }

  const ClickBookNow = () =>{
    toast(`Complete Book ${destination.desttitle}`)

  }

  return (
    <div className='detailsCard'>
      <div className='imageDiv'>
      <img src={destination.imgsrc} alt={destination.desttitle} />
      </div>
       <div className='detailsDescription'>
        <h2>{destination.desttitle}</h2>
       <p className='description'>{destination.description}</p>
       <p className='price'><span>Price:</span>{destination.price}</p>
       <p className='price'><span>Rating:</span>{destination.grade}</p>
         <Link className='btn flex' onClick={ClickBookNow} > Book Now <HiOutlineClipboardCheck />     <ToastContainer />
        </Link>
       </div>
    </div>
  );
};

export default ViewDestination;
