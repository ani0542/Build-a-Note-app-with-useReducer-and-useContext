

import React, { useContext }  from 'react';
 import MyContext from '../Context';

function Note(props) {

  const {dispatch} = useContext(MyContext)
  

  const handleClick=()=>{
      dispatch({type:'SET_CURRENT_NOTE',payload:props.note})
  }



  const handleClicks=()=>{
    dispatch({type:'DELETE_NOTE',payload:props.note.id})
  }




  return (
    <div className='note'>
           <p>{props.note.text}</p>
                      <div className='btn-container'>
                        <button className='edit' onClick={handleClick} >
                          Edit
                        </button>
                      
                        <button className='delete' onClick={handleClicks}>
                            Delete
                        </button>
                        
                          
                        
                      
                      </div>
         </div>
  )
}

export default Note
