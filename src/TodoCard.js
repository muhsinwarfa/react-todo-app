import React, { Component} from 'react';
import TodoInput from './TodoInput'
import TodoList from './TodoList.js'


class TodoCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
	        <div class="card container">
			  <h5 class="card-header cardheader">To-do list</h5>
			  <TodoList/>
			</div>
        );
    }
}

export default TodoCard;
