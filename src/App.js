import React, { useState } from 'react';
import ToDoList from './ToDoList';
import './App.css';

const App = () => {

  //hook
  const [inputList, setInputList] = useState("");

  //here items = [] array
  const [items,setItems] = useState([]);

  //called onChange
  const itemEvent = (event)=>{
    setInputList(event.target.value);
  };

  //called onClick
const listOfItems = ()=>{
  //oldItem is array
  setItems((oldItems)=>{
    return[...oldItems,inputList];
   
  });
  setInputList("");
};

const deleteItem =(id)=>{
  console.log("deleted");
  setItems((oldItems)=>{return oldItems.filter((arrEle, index)=>{return index !==id;});});

};

  return (
    <>
      <div className="main_div">
        <div className="center_div">
        <br />
        <h1> ToDo List</h1>
        <br />
          <input type="text" value= {inputList} placeholder="add a items" onChange={itemEvent}/>
          <button onClick={listOfItems}> + </button>

          <ol>
    {/* <li> {inputList}</li> */}

  {  items.map((i, index)=>{
     return <ToDoList text={i}  key = {index} id={index} onSelect = {deleteItem}/>;
    })
  }
          </ol>
        </div>
      </div>
   </>
  );
}

export default App;
