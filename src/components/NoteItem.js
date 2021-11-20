import React ,{useContext} from 'react'
import NoteContext from "../context/NoteContext";
const NoteItem = (props) => {
    const context = useContext(NoteContext);
    const { deleteNote} = context;
    const { note ,updateNote } = props;
    return (
        <div className=
        "col-md-3"> 
            <div className="card" >
                {/* <img src="..." className="card-img-top" alt="..."/> */}
                <div className ="card-body"><div className="d-flex">
                <h5 className ="card-title">{note.title}</h5>
                <i className="fas fa-trash mx-1" onClick={ ()=> {deleteNote(note._id)}}></i>
                <i className="fas fa-edit mx-1 " onClick={()=>{updateNote(note)}}></i>
                </div>
                <footer className="blockquote-footer">{note.tag}</footer>
                <p className ="card-text">{note.description}</p>
                {/* <a href="#" class ="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>
    )
}

export default NoteItem
