import React from "react";
import './Count.css'
const Count=(props)=>{
  return(
    <div className="count">
    <h4>{props.count}</h4>
    </div>
  )
}
export  default Count;