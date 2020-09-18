import React, { useContext, useEffect, useRef, useState } from 'react';
import MyContext from '../Context';

export default function AddNote() {
  
const {state,dispatch} = useContext(MyContext)


const [value,setValue] =useState('')

let ref=useRef()

useEffect(()=>{
  
      ref.current.focus()
},[])

const handleChange=(e)=>{
    setValue(e.target.value)
}

const handleSubmit=(e)=>{
  e.preventDefault()
     if(value===''){
       alert('cannot add a blank note')
     }
     else{
       dispatch({type:'ADD_NOTE',payload:value})
       setValue('')
     }
}

  return (
    <div className='note-form'>
                <form  action='' onSubmit={handleSubmit}>
                    <input type='text'  ref={ref}  onChange={handleChange} value={value}/>
                    <button>Add note</button>
                </form>
    </div>
  );
}

