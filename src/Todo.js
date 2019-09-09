import React from 'react';
import './index.css'


export default props => 


<button onClick={props.toggleComplete} type="button" 
style={{textDecoration: props.todo.complete? "line-through":""}}
class="btn btn-secondary btn-lg btn-block list-items">{props.todo.text} </button>
