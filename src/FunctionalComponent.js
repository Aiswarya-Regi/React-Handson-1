import './App.css'
import './App.css';

const FunctionalComponent = () =>{
    return <div className="component__container function__background">
        <h1 style={{textAlign : "center"}}>This is created using functional Component</h1>
        <p className="externalFont">This is done using external css</p>
        <p style={{fontSize : "22px" , color : "blue"}}>This is done using inline css</p>
    </div>
}

export default FunctionalComponent;