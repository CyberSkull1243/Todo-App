import React from 'react';

const TodoLists = (props) => {
    
    
    return( 
    <>
    <div className="todo">
        <li> {props.text} </li>;
    </div>
    <button className="btn" onClick={()=>{
        props.onSelect(props.id);
    }}>|</button>
    </>)
}

export default TodoLists;