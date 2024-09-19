import React from 'react'


function prop(props) {
  return (
  
        <div className='productbox'>
        <img src={props.image} className='img'/>
      <h3>{props.name}</h3>
      <h4>{props.describe}</h4>
      <p>{props.price}</p>
      
      
      </div>
  
   
  )

}




export default prop
