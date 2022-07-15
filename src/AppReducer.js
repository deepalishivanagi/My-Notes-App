import {StaticNotesData} from './StaticNotesData';

export const initialState={
    id:3,
    NotesTakenArray:StaticNotesData
}

export const reducer= (state, action)=>{
    switch(action.type)
    {
        case "AddtoNotesArray":
            return{ ...state,
                id:state.id+1,
                NotesTakenArray:[...state.NotesTakenArray,{content:action.message,recover:1,delete:0,id:state.id+1}]
            }
        case "ActiveDeleteHandler":
            var TempArray=JSON.parse(JSON.stringify(state.NotesTakenArray));
            for(let i=0;i<state.NotesTakenArray.length;i++)
            {
              if(state.NotesTakenArray[i].id==action.id && state.NotesTakenArray[i].recover==1 && state.NotesTakenArray[i].delete==0)
              {
                TempArray[i].delete=1;
                TempArray[i].recover=0;
                break;
              }
            }
            return {...state,NotesTakenArray:TempArray};
        case "DeletedRecoverHandler":
            var TempArray=JSON.parse(JSON.stringify(state.NotesTakenArray));
            for(let i=0;i<state.NotesTakenArray.length;i++)
            {
            if(state.NotesTakenArray[i].id==action.id && state.NotesTakenArray[i].recover==0 && state.NotesTakenArray[i].delete==1)
            {
                TempArray[i].delete=0;
                TempArray[i].recover=1;
                break;
            }
            }
            return {...state,NotesTakenArray:TempArray};
        case "PermanentDeleteHandler":
            var TempArray=[];
            for(let i=0;i<state.NotesTakenArray.length;i++)
            {
            if(state.NotesTakenArray[i].id==action.id && state.NotesTakenArray[i].delete==1 && state.NotesTakenArray[i].recover==0 )
            {
            }
            else{
                TempArray.push(state.NotesTakenArray[i]);
            }
            }
            return {...state,NotesTakenArray:TempArray};
            default :
            return state;

    }


}