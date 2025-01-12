
import { ChangeEvent, useCallback, useState } from 'react'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import './App.css'

interface FitnessObject {
  exerciseName: string,
  targetBodyPart: string,
  numberOfReps: number, 
  numberOfSets: number,
}

function App() {
  //const [testData, setTestData] = useState(["item 0", "item 1", "item 2", "item 3"]);
  const [emptyTestData, setEmptyTestData] = useState([]);

  // Menu Inputs ----- START
  //const [exerciseName, setExerciseName] = useState<string>("");
  //const [targetBodyPart, setTargetBodyPart] = useState<string>(""); // this should be a dropdown
  //const [numberOfReps, setNumberOfReps] = useState<Number>(0);
  //const [numberOfSets, setNumberOfSets] = useState<Number>(0);
  // Menu Inputs ----> END

  const [exerciseObject, setExerciseObject] = useState<FitnessObject>({
    exerciseName: "",
    targetBodyPart: "",
    numberOfReps: 0,
    numberOfSets: 0,
  });

  const onDragStart = useCallback(() => {
    console.log("Starting drag...");
  }, []);

  const onDragEnd = useCallback(() => {
    // only one that is required
    console.log("Something is being dragged...");
  }, []);

  const showTestList = () : JSX.Element[] => {
    let count = 0;
    return (emptyTestData.map((element : string) => (
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

  const renderItemList = () : JSX.Element => {
    
    let reverseCount : number = 99;
    let otherCount : number = 1000;
    return (
      <Droppable droppableId={(--reverseCount).toFixed()}>
          {(provided, snapshot) => (
            <div key={(--otherCount).toFixed()} ref={provided.innerRef} {...provided.droppableProps}>
              {showTestList()}
              {provided.placeholder}
            </div>
          )}
      </Droppable>
    )
  }

  const addButtonClicked = () : void => {
    console.log("Add Button Clicked");
  }

  const clearButtonClicked = () : void => {
    console.log("Clear button clicked");
  }

  const handleChange = (event : ChangeEvent<HTMLInputElement>) : void => {
     event.preventDefault();

     console.log(event.target.value);

  }

  return (  
      <DragDropContext
        onDragStart={onDragStart}
        onDragEnd={onDragEnd} 
      >

        {renderItemList()}

        <button onClick={addButtonClicked}>Add Item</button>

        <div className="square">
          <input className="input-inside-square" name="exercise" placeholder="Exercise Name" ></input>
          <input className="input-inside-square" name="targetPart" placeholder="Target Body Part" ></input>
          <input className="input-inside-square" name="reps" placeholder="Number of Reps" type="number" ></input>
          <input className="input-inside-square" name="sets" placeholder="Number of Sets" type="number" ></input>
          
          <div className="button-container">
            <button className="square-button">Add</button>
            <button className="square-button">Clear</button>
          </div>
        </div>
        
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