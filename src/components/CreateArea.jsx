import React,{useState} from "react";

function CreateArea(props) {
    const [input, setInput] = useState({
        title:'',
        content: ''
    })
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
      <form>
        <input onChange={inputHandler} name="title" placeholder="Title" value={input.title}/>
        <textarea onChange={inputHandler} name="content" placeholder="Take a note..." rows="3" value={input.content} />
        <button onClick={(e)=>{
            e.preventDefault()
            props.createNote(input)
            setInput({
                title:'',
                content: ''
            })
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
