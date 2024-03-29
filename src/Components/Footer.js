import React from 'react'
import { Link } from 'react-router-dom';
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import newsletter from '../images/newsletter.png'

const Footer = () => {
  return (
    <>
   <footer className="py-4">
    <div className="container-xxl">
      <div className="row align-items-center">
        <div className="col-5">
          <div className="footer-top-data d-flex gap-30 align-items-center ">
            <img src={newsletter} alt='newsletter'/>
            <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
          </div>
        </div>
        <div className="col-7">
        <div className='input-group '>
              <input
               type='text'
               className='form-control py-1'
               placeholder='Your Email Adress'
               aria-label='Your Email Adress'
               aria-describedby='basic-addon2'
              />
              <span className='input-group-text py-2' id='basic-addon2'>
               Subscribe
              </span>
            </div>
          
        </div>
      </div>
    </div>
   </footer>
    <footer className="py-3">
      <div className="container-xxl">
        <div className="row">
          <div className="col-4">
            <h4 className='text-white mb-4'>Contact Us</h4>
            <div className='footer-link d-flex flex-column'>
             <address className='text-white fs-6'>
              Hno:277 Near Vill Chopal,<br/>Sonipat, Haryana<br/>
              pincode:131103
              </address>  
              <a href='tel:+91 1234567890' className='mt-1 d-block mb-1 text-white'>+91 1234567890</a>
              <a href='mailto:naveenpayal733@gamil.com' className='mt-2 d-block mb-0 text-white'>naveenpayal733@gamil.com</a>
             <div className="social_icons d-flex align-items-center gap-30 mt-4">
              <a href='#'  className='text-white'>
              <FaInstagramSquare className='fs-4' />
                </a>             
              <a href='#' className='text-white'>
                <FaLinkedin className=' fs-4'/>
                </a>              
              <a href='#' className='text-white'>
              <FaYoutube  className='fs-4'/>
                </a>           
               <a href='#' className='text-white' >
               < FaGithub  className=' fs-4'/>
               </a>
             </div>
            </div>
          
          </div>
          <div className="col-3">
            <h4 className='text-white mb-4'> Information</h4>
            <div className='footer-link d-flex flex-column'>
              <Link to='privacy'className='text-white py-2 mb-1'> Privacy Policy</Link>
              <Link to='Refund'className='text-white py-2 mb-1'> Refund Policy</Link>
              <Link to='shipping' className='text-white py-2 mb-1'>Shipping Policy</Link>
              <Link to='terms'className='text-white py-2 mb-1'>Tearms & Conditions</Link>
              <Link className='text-white py-2 mb-1'>Blogs</Link>
            </div>
          
          </div>
          <div className="col-3">
            <h4 className='text-white mb-4'> Acount</h4>
            <div className='footer-link d-flex flex-column'>
              <Link className='text-white py-2 mb-1'> About Us</Link>
              <Link className='text-white py-2 mb-1'> Faq</Link>
              <Link className='text-white py-2 mb-1'>Contact</Link>
            </div>
          
          </div>
          <div className="col-2 ">
            <h4 className='text-white mb-4'>Quick Links</h4>
            <div className='footer-link d-flex flex-column'>
              <Link className='text-white py-2 mb-1'> Laptops</Link>
              <Link className='text-white py-2 mb-1'> Headphones</Link>
              <Link className='text-white py-2 mb-1'>Tablets</Link>
              <Link className='text-white py-2 mb-1'>Watches</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className="py-3">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className='text-center mb-0 text-white'>&copy:{new Date().getFullYear()}; Powered by Developer's Corner</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer