

import React, { useContext }  from 'react';
 import MyContext from '../Context';
 import Note from './Note';
function NoteList() {

  const {state} =  useContext(MyContext)


  return (
    <div className='notes-container'>
              {
                state.notes.map((value,index)=>{
                  return(
                          <Note note={value} key={index}/>
                  )
                })
              }
    </div>
  )
}

export default NoteList
