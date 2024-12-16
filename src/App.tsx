
import { useCallback, useState } from 'react'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import './App.css'

function App() {
  const [testData, setTestData] = useState(["item 0", "item 1", "item 2", "item 3"]);

  const onDragStart = useCallback(() => {
    console.log("Starting drag...");
  }, []);

  const onDragEnd = useCallback(() => {
    // only one that is required
    console.log("Something is being dragged...");
  }, []);

  const showTestList = () => {
    let count = 0;
    return (testData.map((element : string) => (
      <Draggable draggableId={(count++).toFixed()} index={count} >
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <h1>{element}</h1>
          </div>
        )}
      </Draggable>
    )))
  }

  const renderItemList = () => {
    let count = 0;
    let reverseCount = 99;
    return (
      <Droppable droppableId={(reverseCount--).toFixed()}>
          {(provided, snapshot) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {showTestList()}
              {provided.placeholder}
            </div>
          )}
      </Droppable>
    )
  }

  return (  
      <DragDropContext
        onDragStart={onDragStart}
        onDragEnd={onDragEnd} 
      >

        {renderItemList()}
        
      </DragDropContext>
    
  )
}

export default App



     /*   {testData.map((item) => {
          return <Draggable 
            key={count++} 
            draggableId={count.toFixed()} 
            index={count}
            children={item}
            >

            </Draggable> 
        })} */