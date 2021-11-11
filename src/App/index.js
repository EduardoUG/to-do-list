import React from 'react'
import { TodoProvider } from '../TodoContext'
import { AppUI } from './AppUI.js'
// import logo from './logo.svg';
// import './App.css';

// const defaultTodos = [
//   { text: 'Aprender React', completed: true },
//   { text: 'Aprender Node', completed: false },
//   { text: 'Aprender HTML', completed: false }
// ]



function App (props) {


  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  )
}

export default App
