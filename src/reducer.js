import { v4 as uuidv4 } from 'uuid';

export default function reducer(state,action){
    switch(action.type)
    {
        case 'SET_CURRENT_NOTE':return {
            ...state,
            currentNote:action.payload
        }
        case 'DELETE_NOTE':

        const deleteNotes=state.notes.filter((value,index)=>{
            return(

                value.id!==action.payload
            )
        })
        return {
            ...state,
            notes:deleteNotes
        }

        case 'ADD_NOTE':
            const newNote={
                id:uuidv4(),
                text:action.payload
            }

            const addNotes=[...state.notes,newNote]
            return {
                ...state,
                notes:addNotes
            }

            case 'UPDATE_NOTE':
      const updatedNote = {
        ...state.currentNote,
        text: action.payload
      };

      const updatedNotesIndex = state.notes.findIndex(
        note => note.id === state.currentNote.id
      );

      const updatedNotes = [
        ...state.notes.slice(0, updatedNotesIndex),
        updatedNote,
        ...state.notes.slice(updatedNotesIndex + 1)
      ];

      return {
        currentNote: null,
        notes: updatedNotes
      };

        default:return state
    }
}