import React,{useState} from "react";
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function CreateArea(props) {
    const [input, setInput] = useState({
        title:'',
        content: ''
    })
    const [click,setClick] = useState(false)
    function inputHandler(e){
    const {value,name} = e.target;
    setInput((prevValue)=>{
        return {
            ...prevValue,
            [name]:value
        }
    })

    }
  return (
    <div>
      <form className="create-note">

        <input onChange={inputHandler} hidden={click?false:true} name="title" placeholder="Title" value={input.title}/>
        <textarea onClick={()=>{
            setClick(true)
        }} onChange={inputHandler} name="content" placeholder="Take a note..." rows={click?3:1} value={input.content} />
        <Zoom in={click?true:false}>
        <Fab onClick={(e)=>{
            e.preventDefault()
            props.createNote(input)
            setInput({
                title:'',
                content: ''
            })
        }}><AddCircleIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
