
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div id="main">
        <Comp parent="Parent Component" child1="Child Component 1" child2="Child Component 2" />
    </div>
  )
}

const Comp = (props) => {
    const [option, setOption] = useState('');

    return(
          <div className="parent">
            <h1>{props.parent}</h1>
            <div className="child1">
              <h2>{props.child1}</h2>
              <button onClick={() => setOption("Option 1")}>Option 1</button>
            </div>
            <div className="child2">
              <h2>{props.child2}</h2>
              <button onClick={() => setOption("Option 2")}>Option 2</button>
            </div>
            <p>Selected Option: {option}</p>
          </div>
    )
}

export default App
