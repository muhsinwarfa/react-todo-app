import React, { Component } from 'react';
import TodoInput from './TodoInput'
import Todo from './Todo'


class TodoList extends Component {
    state = {
    	todos: []
    }
    addTodo = (todo)=> {
    	this.setState({
    		todos: [todo,...this.state.todos]
    	})
    }
    toggleComplete = (id) => {
    	this.setState({
    		todos: this.state.todos.map(todo=>{
    			if(todo.id === id){
    				return {
    					id: todo.id,
    					text: todo.text,
    					complete: !todo.complete
    				}

    			}
    			else{
    				return todo;
    			}
    		})
    	})
    }
    render() {
        return (
        	<div>
        	<TodoInput onSubmit ={this.addTodo}/>
        	{this.state.todos.map(todo =>(<Todo key={todo.id} toggleComplete={()=> this.toggleComplete(todo.id)} todo={todo}/>
        		))}
        	</div>
            
        );
    }
}

export default TodoList;
