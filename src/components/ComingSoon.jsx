import React from 'react'
import { styled } from '@mui/system';

const MyComponent = styled('div')({
  color: 'darkslategray',
  backgroundColor: 'aliceblue',
  display:"flex",
  height:"80vh",
  alignItems:"center",
  fontSize:"3rem",
  textAlign:"center",
  justifyContent:"center",
  padding: 8,
  borderRadius: 4,
});
export const ComingSoon = () => {
  return (
   <>
    <MyComponent className='comingsoon'>
        <h1>Coming Soon...</h1>
    </MyComponent>
   </>
  )
}
