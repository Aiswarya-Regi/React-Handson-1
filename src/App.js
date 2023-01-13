import { useState } from 'react';
import './App.css';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';

function App() {
  const [showFunctionComponent,setShowFunctionComponent] = useState(false);
  const [showClassComponent,setShowClassComponent] = useState(false);

  return <>
  <div className='container'>
  <h1 className='header'>Styling using Functional and Class Component</h1>
  <div className='container2'>
    <button className='btn' onClick={() =>setShowFunctionComponent(prevState => !prevState)}>To see styling in functional component</button>
    <button className='btn' onClick={() =>setShowClassComponent(prevState => !prevState)}>To see styling in class component</button>
  </div>
  </div>
  <div className='container3'>
    <div className='subContainer'>
  {showFunctionComponent &&  <FunctionalComponent /> } 
  {/* <FunctionalComponent/> */}
  </div>
  <div  className='subContainer'>
  {showClassComponent && <ClassComponent /> }
  {/* <ClassComponent /> */}
  </div>
  </div>
  </>
}

export default App;
