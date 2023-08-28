import { Container, Grid } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Product } from '../components/Product';
import { Data } from '../components/data';
import { bannerData }from '../components/data'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { styled } from '@mui/material';
import "../css/navdata.css";
import { useNavigate } from 'react-router-dom';


export const Home = () => {
const [detail,setDetail]=useState([])
  useEffect(()=>{
    // axios.get('https://dummyjson.com/products')
    axios.get('https://dummyjson.com/products?limit=100')
  .then((response=>{
    // handle success
    setDetail(response.data.products);   // always us what we want from that data arrays
    // console.log(response.data.products);
    // console.log("hello =",response.data.products);
  }))
  .catch(((error)=>{
    // handle error
    console.log(error);
  }));
  },[])
  

  // coming soon page 
  const navigate=useNavigate();
  const comingsoon=()=>{
    navigate('/ComingSoon');
  }

  // carousel responsive design
  const responsive = {

    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const Image=styled('img')({
    width:'100%',
    height:260
  })

  return (
    <>
    {/* this is the header part */}
    <div className='homepage'>
    <div className='navdata'> 
      {Data.map((data)=>{
        return(
          <div key={data.id} className='navdata1' onClick={comingsoon}>
            <img src={data.url} alt="img" />
            <p>{data.text}</p>
          </div>
        )
    })}
    </div>

    {/* this is the banner part */}

    <div className='Carousel'>
      <Carousel responsive={responsive}
       swipeable={false}
       draggable={false}
       infinite={true}
       autoPlay={true}
       autoPlaySpeed={2000}
       dotListClass="custom-dot-list-style"
       itemClass="carousel-item-padding-40-px"
       containerClass="carousel-container"
      >
       {bannerData.map((item)=>{
        return ( <Image src={item.url} alt="img" key={item.id} />)
       })}
      </Carousel>;
    </div>

{/* this is the data part */}

      <Container maxWidth="lg" sx={{ mt:5 }}>
        {" "}
        {/*mt = margin top*/}
        <Grid container spacing={2}>
          {detail.map((product)=>{
          // {  console.log("this is me",product)}
            return(
              <Grid key={product.id} item xs={4}>
              <Product product={product} />
            </Grid>
            )
          })}
        </Grid>
      </Container>
    </div>
    </>
    
  )
}

// axios.get('https://dummyjson.com/products?limit=100')