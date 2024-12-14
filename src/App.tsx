import { useState } from 'react'
import Draggable from 'react-draggable'
import {DraggableCore} from 'react-draggable'
import './App.css'

function App() {
  

  return (
    <>
      <div className="grid-container">
        <div className="title-a">Title 1</div>
        <div className="title-b">Title 2</div>
        <div className="title-c">Title 3</div>
        <div className="title-d">Title 4</div>
        
        
        <div className="item-b">Temp 3</div>
        
      </div>

      <button className="add-item-button">Add to Grid</button>
    </>
  )
}

export default App
