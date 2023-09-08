// import { Container } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BoltIcon from '@mui/icons-material/Bolt';
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './carddetail.css';
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice.jsx'
import toast, { Toaster } from 'react-hot-toast';


/*
import { Terms } from '../components/terms';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 
*/



export const CardDetail = () => {

    const param =useParams();
    // console.log(param.slug);
    const [productinfo,setProductinfo]=useState({})
    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${param.id}`)
        .then((response)=>{
            console.log(response.data);
            // const products=response.data.map((product)=>({...product,quantity:0}))

            setProductinfo(response.data);
            // setProductinfo(products);
            // console.log(products);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[param.id]);

    // console.log("this is for test",productinfo);

    // console.log("this is for image",productinfo.thumbnail);
    // const imagedata=productinfo.thumbnail;

    const[imagegeter,Setimagegeter]=useState("");
    const clickImage=((e)=>{
        console.log(e.target.src);
        // Setimg(e.target.value);
        Setimagegeter(e.target.src);
    })
        
// add to cart logic
const dispatch=useDispatch();
const AddToCard=(productinfo)=>{
    toast.success('Product Added To Cart Successfully!')
    dispatch(add(productinfo));
}

  return (
    <>
    
    <div className="cardContainer">
        <div className="left-side">
            <div className="left-side1">
                <div className="left1">
                    <span className="left2">
                        {productinfo.images?.map((image,index)=>{
                            // {console.log("hii abhi=",image)}
                            return(  
                                <img src={image} alt="img" className="imagedetail" onClick={clickImage} key={index}/>
                            )
                        })}
                    </span>

                </div>
                <div className="oneimage">
                    {/* <img src={productinfo.thumbnail} alt="image" /> */}
                    <img src={imagegeter||productinfo.thumbnail} alt="image" />
                </div>
            </div>  
            <div className='carder'>
                <div className='carder1' onClick={()=>AddToCard(productinfo)}><ShoppingCartIcon/> ADD TO CARD</div>
                <div className='carder1'><BoltIcon/> BUY NOW</div>
            </div>
        </div>

        {/* this is the right side */}
        <div className="right-side">
            <div className="right1">
                <h1>{productinfo.brand}</h1>
                <h2>{productinfo.title}</h2>
                <h4>{productinfo.description}</h4>

                <span className='right2'>{productinfo.rating} <StarIcon/></span>
                <span className='right3'><img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="image" /></span>
                <div className='right4'>
                    <CurrencyRupeeIcon/>{productinfo.price}
                </div>
                <div className='right5'>
                    <h3>Available offers</h3>
                    <div className='right6'><LocalOfferIcon/><b>Bank Offer </b>Flat ₹1,250 Off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹15,000 to ₹39,999 <span className='right7'>T&C</span></div>
                    <div className='right6'><LocalOfferIcon/><b>Bank Offer </b>Flat ₹3,000 Off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹40,000 to ₹49,999 <span className='right7'>T&C</span></div>
                    <div className='right6'><LocalOfferIcon/><b>Bank Offer </b>Flat ₹4,000 Off on HDFC Bank Credit Card EMI Trxns on orders of ₹50,000 and above <span className='right7'>T&C</span></div>
                    <div className='right6'><LocalOfferIcon/>Extra ₹500 Off on Bikes & Scooters on purchase of ₹30,000 or more <span className='right7'>T&C</span></div>
                    <div className='right6'><LocalOfferIcon/><b>Bank Offer </b>5% Cashback on Flipkart Axis Bank Card <span className='right7'>T&C</span></div>
                </div>
                <div className='right8'><span className='right9'>{productinfo.brand} </span> 1 Years Warranty with Product Registration <span  className='right7'>Know More</span></div>
            </div>
        </div>
        <Toaster
            position="top-right"
            reverseOrder={false}
        />
    </div>
    </>
  )
};



