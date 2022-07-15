import { useState } from 'react';
import './ToDoInputBox.css';

export default function ToDoInputBox(props)
{
    const [msg,setmsg]=useState("");
  
    function messageHandler(event)
    {
        var Uservalue=event.target.value;
        setmsg(Uservalue);
        console.log(Uservalue);
    }

    function SubmitBtnHandler()
    {
        props.dispatch({'type':'AddtoNotesArray' ,'message':msg});
        setmsg("");
    }


    return(
        <div>
            <p>This is ToDo Input box</p>
            <div>
                <div><textarea id="TextAreabox" placeholder="Content to be written here..." value={msg}  onChange={messageHandler}></textarea></div>
                <button onClick={SubmitBtnHandler}>Submit</button>
            </div>
        </div>
    );
}