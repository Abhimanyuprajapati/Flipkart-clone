import { Container } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CardDetail = () => {
    const param =useParams();
    // console.log(param.slug);
    const [productinfo,setProductinfo]=useState({})
    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${param.id}`)
        .then((response)=>{
            console.log(response.data);
            setProductinfo(response.data)
        })
        .catch((error)=>{
            console.log(error);
        })
    },[param.id]);

  return (
    <>
    <div className="cardContainer">
        <div className="left-side">
            <Container maxWidth="xl">
                <div>
                    <span>
                        {productinfo.images?.map((image)=>{
                            {console.log("hii abhi=",image)}
                            return(  
                                <img src={image} alt="img" />
                            )
                        })}
                    </span>
                    
                </div>
            </Container>
        </div>
        <div className="right-side">

        </div>
    </div>
    </>
  )
};
