import React from 'react'
import './CreateTodoButton.css'

function CreateTodoButton (props) {
  const onClicButton = (msg) => {
    props.setOpenModal(prevState => !prevState)
  }

  return (
    <button className='CreateTodoButton' onClick={onClicButton}>
      +
    </button>
  )
}

export { CreateTodoButton }
