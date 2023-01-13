import React from "react";
import './App.css';

export default class ClassComponent extends React.Component  {
    render() {
      return <div className="component__container class__background">
      <h1 style={{textAlign : "center"}}>This is created using Class Component</h1>
      <p className="externalFont">This is done using external css</p>
      <p style={{fontSize : "22px" , color : "blue"}}>This is done using inline css</p>
  </div>;
    }
  }