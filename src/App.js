import "./App.css";
import ToDoInputBox from './ToDoInputBox';
import ActiveNotes from './ActiveNotes';
import DeletedNotes from './DeletedNotes';
import { useReducer, useState } from 'react';
import { StaticNotesData } from './StaticNotesData';
import { initialState, reducer } from "./AppReducer";


function App() {

  const [state,dispatch] = useReducer(reducer,initialState);
  // const [NotesTakenArray,setNotesTakenArray]=useState(StaticNotesData);
  // const [id,setid]=useState(3);

  // function AddtoNotesArray(message){
  //   var TempArray=JSON.parse(JSON.stringify(NotesTakenArray));
  //   var Tempid=id+1;
  //   TempArray.push({content:message,recover:1,delete:0,id:Tempid});
  //   setNotesTakenArray(TempArray);
  //   setid(Tempid);
  // }

  // function ActiveDeleteHandler(id){
  //   var TempArray=JSON.parse(JSON.stringify(NotesTakenArray));
  //   for(let i=0;i<NotesTakenArray.length;i++)
  //   {
  //     if(NotesTakenArray[i].id==id)
  //     {
  //       TempArray[i].delete=1;
  //       TempArray[i].recover=0;
  //       break;
  //     }
  //   }
  //   setNotesTakenArray(TempArray);
  // }

  // function DeletedRecoverHandler(id){
  //   var TempArray=JSON.parse(JSON.stringify(NotesTakenArray));
  //   for(let i=0;i<NotesTakenArray.length;i++)
  //   {
  //     if(NotesTakenArray[i].id==id)
  //     {
  //       TempArray[i].delete=0;
  //       TempArray[i].recover=1;
  //       break;
  //     }
  //   }
  //   setNotesTakenArray(TempArray);
  // }

  // function PermanentDeleteHandler(id){
  //   var TempArray=JSON.parse(JSON.stringify(NotesTakenArray));
  //   for(let i=0;i<NotesTakenArray.length;i++)
  //   {
  //     if(NotesTakenArray[i].id==id)
  //     {
  //       TempArray[i].delete=0;
  //       TempArray[i].recover=0;
  //       break;
  //     }
  //   }
  //   setNotesTakenArray(TempArray);

  // }


  return (
    <div className="App">
      <header className="App-header">
        <h2>Let's note down everything</h2>
      </header>
      <div>
        <ToDoInputBox  state={state} dispatch={dispatch}/>
      </div>
      <hr></hr>
      <div>      
        <ActiveNotes state={state} dispatch={dispatch}/>
      </div>
      <hr></hr>
      <div>    
        <DeletedNotes state={state} dispatch={dispatch}/>
      </div>
    </div>
  );
}

export default App;
