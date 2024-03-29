import React, { useState } from 'react'
import BreadCrum from './BreadCrum'
import ProductCard from '../Components/ProductCard'
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import { FaCodeCompare } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import Color from '../Components/Color';
import Container from '../Components/Container';
const SingleProduct = () => {
  const props = {
    width: 2, 
    height: 190, 
    zoomWidth:500, 
    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }
     const[Product,setProduct]=useState(true);
     const copyToClipboard = (text) => {
      console.log('text', text)
      var textField = document.createElement('textarea')
      textField.innerText = text
      document.body.appendChild(textField)
      textField.select()
      document.execCommand('copy')
      textField.remove()
    }
  return (
    <>
      <BreadCrum title='SpecialProduct'/>
    <Container class1="main-product-wrapper py-5 home-wrapper">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-20">
                <div>
                  <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt=''className="img-fluid"/>
                </div>                
                <div className="img-fluid">
                <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt=''className="img-fluid"/>
                </div>                
                <div className="img-fluid">
                <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt=''className="img-fluid"/>
                 </div>                
                <div className="img-fluid">
                <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt=''className="img-fluid"/>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className='title'>
                    Kids Headphones Bulk 10 Pack Multi Colored For Students
                  </h3>
                </div>
                <div className='border-bottom py-3'>
                  <p className='price'>$ 100</p>
                  <div className='d-flex align-items-center gap-10'>
                  <ReactStars
                   count={5}
                   size={24}
                   value={4}
                   edit={false}
                   activeColor="#ffd700" />
                   <p className='mb-0 t-review'>(2 Reviews)</p>             
                   </div>
                   <a  className='review-btn'href='#review'>Write a Review</a>
                </div>
                <div className="border-bottom ">
                 <div className='d-flex gap-10 align-items-center my-2 '>
                  <h3 className='product-heading'>Type:</h3>
                  <p className='product-data'>Watch</p>
                  </div> 
                  <div className='d-flex gap-10 align-items-center mb-0 my-2'>
                  <h3 className='product-heading'>Brand :</h3>
                  <p className='product-data'>Havells</p>
                  </div> 
                  <div className='d-flex gap-10 align-items-center mb-0 my-2'>
                  <h3 className='product-heading'>Category :</h3>
                  <p className='product-data'>Watch</p>
                  </div> 
                  <div className='d-flex gap-10 align-items-center mb-0 my-2'>
                  <h3 className='product-heading'>Tags :</h3>
                  <p className='product-data'>Watch</p>
                  </div> 
                  <div className='d-flex gap-10 align-items-center my-2 mb-0'>
                  <h3 className='product-heading'>Availablity :</h3>
                  <p className='product-data'>In Stock</p>
                  </div> 
                  <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                  <h3 className='product-heading'>Size :</h3>
                  <div className='d-flex flex-wrap gap-20'>
                    <span className='badge border border-1 bg-white text-dark border-secondary'>S</span>
                    <span className='badge border border-1 bg-white text-dark border-secondary'>M</span>
                    <span className='badge border border-1 bg-white text-dark border-secondary'>XL</span>
                    <span className='badge border border-1 bg-white text-dark border-secondary'>XXl</span>
                  </div>
                  </div> 
                  <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                  <h3 className='product-heading'>Color:</h3>
                  <Color />
                  </div> 
                  <div className='d-flex  align-items-center gap-20 flex-row mt-2 mb-3'>
                  <h3 className='product-heading'>Quantity :</h3>
                  <div className=''>
                  <input 
                   type='number'
                   name=''
                   min={1}
                   max={10}
                   className='form-control'
                   style={{width:'70px'}}
                   />
                  </div>
                  <diV className='d-flex align-items-center gap-30 ms-5 '>
                    <button className='button border-0' type='submit'>
                     Add to Cart
                    </button> 
                    <button className='button signup' type='submit'>
                     Buy it Now
                    </button>
                   </diV>
                  </div> 
                 <div className='d-flex align-items-center gap-20'>
                  <div>
                    <a href=''><FaCodeCompare className='fs-5 me-2'/>Add to Compare</a>
                  </div>
                  <div>
                    <a href=''>  <CiHeart className='fs-5 me-2'/>Add to Wishlist</a>
                  </div>
                 </div>
                 <div className='d-flex gap-10  flex-column  my-3 '>
                  <h3 className='product-heading'>Shipping & Returns:</h3>
                  <p className='product-data'>
                    Free Shipping and returns avalible on all orders!<br/>
                    we ship all US domestic orders within
                    <b>5-10 bussiness days</b>
                  </p>
                  </div> 
                  <div className='d-flex gap-10  align-items-center my-3 '>
                  <h3 className='product-heading'>ProductLink:</h3>
                  <a href='javascript:void(0);'
                   onClick={()=>{
                    copyToClipboard("https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
                   }}>
                    Copy Product Link
                   </a>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        
    </Container>
    <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12"> 
           <h4>Description</h4>
          <div className='bg-white p-3'>            
         <p >
           Kids headphones bulk 10 pack multi color for students
           Kids headphones bulk 10 pack multi color for students
           Kids headphones bulk 10 pack multi color for students
           Kids headphones bulk 10 pack multi color for students
           Kids headphones bulk 10 pack multi color for students
           Kids headphones bulk 10 pack multi color for students
           Kids headphones bulk 10 pack multi color for students
           Kids headphones bulk 10 pack multi color for students
          </p>
          </div>
        </div>
     </div>
    </Container>
    <Container class1="reviews-wrapper  home-wrapper">
       
        <div className="row">
          <div className="col-12">
            <h3 id='review'>Reviews</h3>
            <div className="review-inner-wrapper">
          <div className="review-head d-flex justify-content-between align-items-end">
          <div>
            <h4 className='mb-2'>Customer Reviews</h4>
           <div className=' d-flex  align-items-center gap-10'>
            <ReactStars
             count={5}
             size={24}
             value={4}
             edit={false}
             activeColor="#ffd700"
             />
            <p className='mb-0'>Based on 2 Reviews</p>             
           </div>
          </div>
        { Product &&(
            <div>
              <a className='' href=''>write a review</a>
            </div>
          )}
        </div>
        <div className="review-form py-4">
        <h4>Write a review</h4>
        <form action='' className='d-flex flex-column gap-20'>
               <div>
               <ReactStars
             count={5}
             size={24}
             value={4}
             edit={false}
             activeColor="#ffd700"
             />
            <textarea
                 name=''
                 id=''
                 className='w-100 form-control mt-4'
                 cols='30'
                 rows='4'
                 placeholder='Comment'
                 />
               </div>
              <div className='d-flex justify-content-end'>
                <button className='button border-0'>Submit Review</button>
              </div>
              </form>
        </div>
        <div className="reviews mt-4">
          <div className="review">
          <div className="d-flex gap-10 align-items-center"> 
          <h6 className='mb-0'>Navdeep</h6>      
          <ReactStars
             count={5}
             size={24}
             value={4}
             edit={false}
             activeColor="#ffd700"
             />
             </div>
            <p className='mt-3'> 
           Kids headphones bulk 10 pack multi color for students
           Kids headphones bulk 10 pack multi color for students
           Kids headphones bulk 10 pack multi color for students
           Kids headphones bulk 10 pack multi color for students
           Kids headphones bulk 10 pack multi color for students
           Kids headphones bulk 10 pack multi color for students
           Kids headphones bulk 10 pack multi color for students
           Kids headphones bulk 10 pack multi color for students
          </p>
          </div>
        </div>
       </div>  
       </div>
       </div>
    </Container>
    <Container class1='popular-wrapper py-5 home-wrapper-2'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className='section-heading'>Our Popular Products</h3>
            </div>
          <ProductCard/> 
          </div>
        </div>
    </Container>
   
    </>
  )
}

export default SingleProduct
