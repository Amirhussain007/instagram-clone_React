
import React from "react";
import Login from "./components/Login";
import "./styles/app.css"
import Register from "./components/Register";
import Home from "./components/home/Home";
function App() {
  return(
    <div className="App">
      <Home/>
      {/* <Login/> */}
      {/* <div style={{height:"100vh", display:'flex',  alignItem:'center'}}>
      <Register/>
      </div> */}
    </div>
  )
}

export default App;
