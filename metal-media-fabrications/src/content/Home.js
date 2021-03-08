import React, { Component } from 'react';

import Logo from '../content/Logo';
import About from '../content/About';
import Navbar from '../components/Navbar';
import Social from './Social';

class Head extends Component {

    render() {
        return (

            <div className="logoHomePage">

                <Logo/>

                <Navbar />

                <br></br>
                <br></br>
                <br></br>

                <About/>

               <Social/>

            </div>
            
        )
    }
}
export default Head