import React from "react";
import ListRender from "./ListRender";

const Today = (props) => {
  const date = new Date();
  const filteredList = props.list.filter(item=>{
    if(date.getFullYear() === item.date.getFullYear() && date.getMonth()===item.date.getMonth() && date.getDate()===item.date.getDate())
      return true
    return false
  })
  return (
    <div id="today-list">
      <ListRender list={filteredList} />
    </div>
  );
};

export default Today;
