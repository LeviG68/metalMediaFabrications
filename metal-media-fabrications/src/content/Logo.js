import React, { Component } from 'react';
import logo from '../images/headLogo.png';

class Logo extends Component {

    render() {
        return(
            <div className="logo">
            
            <img src={logo} className="headLogo" alt="company logo"></img>

            </div>
        )
    }
}
export default Logo