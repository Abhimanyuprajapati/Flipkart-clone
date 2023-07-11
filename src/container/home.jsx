import { Container, Grid } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Product } from '../components/Product';
import { Data } from '../components/data';
import "../css/navdata.css";

export const Home = () => {
const [detail,setDetail]=useState([])
  useEffect(()=>{
    axios.get('https://dummyjson.com/products')
  .then((response=>{
    // handle success
    setDetail(response.data.products);   // always us what we want from that data arrays
    console.log(response.data.products);
    // console.log("hello =",response.data.products);
  }))
  .catch(((error)=>{
    // handle error
    console.log(error);
  }));
  },[])
  

  return (
    <>
    <div className='homepage'>
    <div className='navdata'> 
      {Data.map((data)=>{
        return(
          <div className='navdata1'>
            <img src={data.url} alt="img" />
            <p>{data.text}</p>
          </div>
        )
    })}
    </div>
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
