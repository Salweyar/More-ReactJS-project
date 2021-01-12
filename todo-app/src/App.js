import React from 'react';
//import logo from './logo.svg';
import './App.css';
import TodoItems from './Comp/TodoItems';
import todoData from './Comp/todoData';

/*function App() {

  const todoItems = todoData.map((items) => {
   return (
      <TodoItems key={items.id} item={items} />
      )
   });

  return (
    <div className="todo-list">
      {todoItems}
    </div>
  );
}*/

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      todos: todoData
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id){
      this.setState(prevState => {
        const updatedTodos = prevState.todos.map(todo => {
            if(todo.id === id){
              todo.completed = !todo.completed;
            }
            return todo;
        })
        return {
          todos: updatedTodos
        }
      })
  }

  render(){
    const todoItems = this.state.todos.map((items) => {
      return (
         <TodoItems key={items.id} item={items} 
         handleChange = {this.handleChange}/>
         )
      });
   
     return (
       <div className="todo-list">
         {todoItems}
       </div>
     );
  }
}

export default App;
