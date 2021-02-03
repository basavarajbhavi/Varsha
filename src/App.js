import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Birthday from '../src/Birthday';
import Navbar from '../src/Navbar';




class App extends Component {
 render(){
   return(
     <div className="App">
       <Navbar/>
       <Birthday/>
       
     </div>
   )
 }
}

export default App;
