
import React,{useState} from "react";
import "./CreateNote.css";
import AddIcon from '@material-ui/icons/Add';

export default function CreateNote(props) {
  const[expand, setexpand] = useState(false);
const[note, setNote] = useState({
  title:"",
  content:""
});
const  expandit=()=>{
  setexpand(true);
}
const back=()=>{
  setexpand(false);
}
const inputEvent=(e)=>{
  // const value = e.target.value;
  //   const name = e.target.name;
    const{name, value} = e.target;
  setNote((prevData)=>{
    return {
      ...prevData,
      [name]:value,
    }
  })
  console.log(note);
}
const addEvent=(e)=>{
  e.preventDefault();
props.passNote(note);
setNote({
   title:"",
  content:""
})
}
  return (
    <div className="main_note"  onDoubleClick={back}>
    <form>
      {expand ?(
      <input value={note.title} name="title" 
      onChange={inputEvent} 
      placeholder="Title" 
      /> ):null}

      <textarea value={note.content} name="content" 
      onChange={inputEvent} rows="" 
      column="" placeholder="Write a note...!" 
      onClick={expandit}/>
      {
        expand ?(
      <button className="btn" onClick={addEvent}>
        <AddIcon />
        </button> ): null}    
    </form>
    </div>
  );
}
