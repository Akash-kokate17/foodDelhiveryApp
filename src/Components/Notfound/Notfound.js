import React from 'react';
import img1 from './notFound.jpg'
export default function Notfound(){
  return<>
   <div className='container'>
    <div className='row'>
      <div className='text-center'>
        <img src={img1} alt='notfound' style={{width:"300px"}}/>
        <p className='fw-bold '> Search Not found</p>
      </div>
    </div>
   </div>
  </>
}