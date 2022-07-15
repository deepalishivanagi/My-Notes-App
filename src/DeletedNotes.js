import './DeletedNotes.css';
import SingleNote from "./SingleNote";

export default function DeletedNotes(props){
    var ShowDeletedNotes=[];

    for(let i=0;i<props.state.NotesTakenArray.length;i++)
    {
        if(props.state.NotesTakenArray[i].delete==1)
        {
            ShowDeletedNotes.push(props.state.NotesTakenArray[i]);
        }
    }
    console.log(ShowDeletedNotes);

    return(
        <div>
            <h3>This will show list of deleted notes</h3>
            <div className="deleted-notes-list">
                {ShowDeletedNotes.map((Notes,index)=>{ return(<SingleNote Notes={Notes} key={index} active={false} dispatch={props.dispatch} 
                />);})}
                
            </div>
        </div>
    );
}