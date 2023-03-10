import React, { useState, useRef } from "react";

const Inbox = (props) => {
 const [newTask,setNewTask]= useState(false)
 const titleRef=useRef(null)
 const dateRef=useRef(null)

 const addTodoItem = (e) => {
    e.preventDefault()
    if(titleRef.current.value!==""){
      props.append({
        number: props.list.length+1,
        title: titleRef.current.value,
        date: new Date(dateRef.current.value)
      })
      setNewTask(false)
    }
 }
  return (
    <div>
      <h3>Inbox</h3>
      {!newTask && (
        <button className="new" onClick={()=>{
          setNewTask(true)
        }} id='add-new'>
          +Add New
        </button>
      )}
      {newTask && (
        <form className="newtask-box">
          <input type="text" id="title" ref={titleRef}></input>
          <div className="buttons">
            <button className="new" id="add-list" onClick={addTodoItem}>
              Add Task
            </button>
            <button className="new" onClick={()=>{
              setNewTask(false)
            }}>
              Cancel
            </button>
            <input
              type="date"
              ref={dateRef}
              defaultValue="2022-09-27"
              id="date"
            ></input>
          </div>
        </form>
      )}
      <div id="inbox">
        {props.list.map((list) => {
          return (
            <div className="box" key={list.number}>
              <div className="task">
                {list.title} ({list.date.toLocaleString()})
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Inbox;
