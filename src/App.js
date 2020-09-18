


import React,{useContext, useReducer} from 'react'
import AddNote from './Components/AddNote';
import Nav from './Components/Nav';
import NoteList from './Components/NoteList';
import MyContext from './Context';
import EditNote from './Components/EditNote';
import notesReducer from './reducer';

function App() {

    const initialState=useContext(MyContext)
    const [state,dispatch] =useReducer(notesReducer,initialState)

    return (
        <>
                  <MyContext.Provider value={{state,dispatch}}>
                             <Nav/>
                             {state.currentNote === null ? (
                                <div>
                                <AddNote />
                                <NoteList />
                                </div>
                                      ) : (
                              <EditNote />
                                             )}
                  </MyContext.Provider>       
        </>
    )
}

export default App

