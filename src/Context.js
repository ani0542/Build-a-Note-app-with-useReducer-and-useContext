


import {createContext} from 'react';

 const MyContext=createContext({
    currentNote:null,
    notes:[
        {id:1,text:'do homework'},
        {id:2,text:'do classwork'},
        {id:3,text:'not to indulge with any other activity'}
    ]
})

export default MyContext;