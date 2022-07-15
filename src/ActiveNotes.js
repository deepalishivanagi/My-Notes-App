import { StaticNotesData } from "./StaticNotesData";
import SingleNote from "./SingleNote";
import './ActiveNote.css';

export default function ActiveNotes(props)
{
    var ShowActiveNotes=[];

    for(let j=0;j<props.state.NotesTakenArray.length;j++)
    {
        if(props.state.NotesTakenArray[j].recover==1)
        {
            ShowActiveNotes.push(props.state.NotesTakenArray[j]);
        }
    }
    console.log(ShowActiveNotes);

    return(
        <div>
            <h3>This will show list of active notes</h3>
            <div className="Active-notes-list">
                {ShowActiveNotes.map((Notes,index)=>{ return(<SingleNote Notes={Notes} key={index} active={true} dispatch={props.dispatch}/>);})}
                
            </div>

        </div>
    );
}