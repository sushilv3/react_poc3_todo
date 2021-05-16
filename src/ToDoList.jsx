import react from 'react'

const ToDoList = (props)=>{
   
    return (
    <>
    <div className="todo_style">
    <i className="bi bi-x" onClick={()=>{props.onSelect(props.id);}}>
    </i>
        <li> {props.text} </li>
    </div>
    </>
    );
}
export default ToDoList;