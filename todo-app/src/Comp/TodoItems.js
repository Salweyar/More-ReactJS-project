import React from 'react';

function TodoItems (props){ 

    let completedStyle = {
      fontFamily: 'Great Vibes',
      fontSize: 20,
      color: '#cdcdcd',
      textDecoration: 'line-through'
    }

    return (  
    <div className="todo-items">
        <ul>
      <li><input 
      type="checkbox" 
      checked={props.item.completed} 
      onChange={() => props.handleChange(props.item.id)}
      />
      <span style={props.item.completed ? completedStyle : null}>
      {props.item.text}</span></li>
      </ul>
    </div>
    )
   
}

export default TodoItems;