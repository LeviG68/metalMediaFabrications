import React, { Component } from 'react';

import Logo from '../content/Logo';
import About from '../content/About';
import Navbar from '../components/Navbar';
import Social from './Contact';

class Head extends Component {

    render() {
        return (

            <div className="logoHomePage">

            <Logo/>

            <Navbar />

            <br></br>

            <About/>

            <Social/>

            </div>
            
        )
    }
}
export default Head