import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import './Note.css'

 const Note=(props)=>{

   return (
     <div className="note">
     <h1>{props.title}</h1>
     <br/>
     <p>{props.content}</p>
     <button onClick={()=> props.deleteitem(props.id)}>
     <DeleteIcon /> 
     </button>
     </div>
   
   )
 }
 export default Note;