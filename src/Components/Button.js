import React from 'react';

const Button =(props)=>{
    return(
        <div className='buttons'>
        <button onClick={(e)=> props.handleMinus(e)} className='clear'>{'<'}Previous</button>
        <button className='blued' onClick={(e)=> props.handleEdit(e)}>Edit</button>
          <button className='blued' onClick={()=>props.handleRemove(props.counter) }>Remove</button> 
          <button onClick={(e)=> props.handleClick(e)} className='clear'>Next{'>'}</button> 
          </div>
    )

    
}
export default Button
