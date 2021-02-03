import React, { Component } from 'react';
import HappyBirthday from '../src/Images/HappyBirthday.jpg';



class Navbar extends Component{
    render(){
        return(
            <header className="navbar-navbar bg-danger" >
                <img src={HappyBirthday} className="img-fluid" alt="Responsive image" />
            </header>
        )
    }
}
export default Navbar