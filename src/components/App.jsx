import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes,setNotes] = useState([])
    function addNote(input){
    setNotes(prevValue=>{
        return [...prevValue,input]
    })
    }
    function deleteNote(id){
         setNotes((prevValue)=>{
            return prevValue.filter((item,index)=>{
                return index !== id
            })
         })
    }
  return (
    <div>
      <Header />
      <CreateArea createNote={addNote}/>
      {notes.map((note,index)=>{
     return(
        <Note key={index} id={index} title={note.title} content={note.content} remove={deleteNote}/>
     )
      })}
      <Footer />
    </div>
  );
}

export default App;


