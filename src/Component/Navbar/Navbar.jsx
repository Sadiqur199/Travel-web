import React, { useState } from 'react';
import './Navbar.scss';
import {MdOutlineTravelExplore} from'react-icons/md';
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import { Link } from 'react-router-dom';
const Navbar = () => {

  const [active , setActive] = useState('navBar')
 //function to toggle navBar
  const showNav = () =>{
    setActive('navBar activeNavbar')
  }
 //function to remove navBar
  const removeNav = () =>{
    setActive('navBar')
  }

  return (
    <section className='navBarSection'>
      <header className='header flex'>
        <div className='logoDiv'>
        <Link to='/'>
        <a href="#" className='logo flex'>
            <h1><MdOutlineTravelExplore className='icon'/> Travel.</h1>
          </a>
        </Link>
        </div>
 
        <div className={active}>
          <ul className='navLists flex'>

          <Link to='/'>
          <li className='navItem'>
              <a href="#" className='navLink'>Home</a>
            </li>
            </Link>

            <li className='navItem'>
              <a href="#" className='navLink'>Package</a>
            </li>

            <li className='navItem'>
              <a href="#" className='navLink'>Shop</a>
            </li>

            <li className='navItem'>
              <a href="#" className='navLink'>About</a>
            </li>

            <li className='navItem'>
              <a href="#" className='navLink'>Pages</a>
            </li>

            <li className='navItem'>
              <a href="#" className='navLink'>News</a>
            </li>

            <li className='navItem'>
              <a href="#" className='navLink'>Contact</a>
            </li>
              
              <button className='btn'>
                <a href="">BOOK NOW</a>
              </button>
          </ul>
         
         <div onClick={removeNav} className='closeNavbar'>
           <AiFillCloseCircle className='icon'/>
         </div> 
        </div>

        <div onClick={showNav} className="toggleNavbar">
            <TbGridDots className='icon'/>
          </div>
        
      </header>
    </section>
  );
};

export default Navbar;