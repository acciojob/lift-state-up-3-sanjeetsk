
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [selectedOption, setSelectedOption] = useState('');

  function handleSetOption(){
    setSelectedOption('Option 1');
  }

  function handleSetOption1(){
    setSelectedOption('Option 2');
  }

  return (
    <div id="main">
      <div className="parent">
        <h1>Parent Component</h1>
        <Child1 handleSetOption={handleSetOption} />
        <Child2 handleSetOption={handleSetOption1} />
        <p>Selected Option: {selectedOption}</p>
      </div>
    </div>
  )
}

const Child1 = ({handleSetOption}) => {

  return(
    <div className="child1">
      <h2>Child Component 1</h2>
      <button onClick={handleSetOption}>Option 1</button>
    </div>
  )
}

const Child2 = ({handleSetOption}) => {

  return(
    <div className="child2">
      <h2>Child Component 2</h2>
      <button onClick={handleSetOption}>Option 2</button>
    </div>
  )
}

export default App
