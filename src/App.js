import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoCard from './TodoCard'


class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoCard/>
      </div>
    )
  }
}

export default App
