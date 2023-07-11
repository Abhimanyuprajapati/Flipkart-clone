import { useEffect } from "react";

const ApiLoad = () => {
    useEffect(()=>{
        fetchData();
    },[])
    
  return (
    <div>
       
    </div>
  )
}

export default ApiLoad;


// const response = await fetch(' ');
 // const result = await response.json();

//    const response =fetch('https://dummyjson.com/products');