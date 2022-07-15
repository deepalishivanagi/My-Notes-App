import './SingleNote.css';

export default function SingleNote(props){


    function DeleteHandler(id){
        props.dispatch({'type':'ActiveDeleteHandler','id':id});

    }

    function RecoverHandler(id){
        props.dispatch({'type':'DeletedRecoverHandler','id':id});
    }

    function DdeleteHandler(id){
        props.dispatch({'type':'PermanentDeleteHandler','id':id});
    }


    return(
        <div className='main'>
        <div className="SingleNote-main">
            <h4>Your Note:</h4>
            <div>
                <p>{props.Notes.content}</p>
            </div>
            {props.active? <span><button onClick={()=>{DeleteHandler(props.Notes.id)}}>Delete</button></span>: <span><button onClick={()=>{RecoverHandler(props.Notes.id)}}>Recover</button><button onClick={()=>{DdeleteHandler(props.Notes.id)}}>Delete</button></span>}    
            
        </div>
        </div>
    );
}