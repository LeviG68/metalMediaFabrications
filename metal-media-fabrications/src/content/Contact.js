
import React, { Component } from 'react';
import Logo from './Logo';
import Navbar from '../components/Navbar';
import Social from '../content/Social';

import contactImg from '../images/contactPage.jpeg';


class Contact extends Component {

    render () {

        return (
            <div className='contacthead'>
                <div className='contact'>

                    <Logo/>

                    <Navbar />

                    <br></br>
                  
                </div>
                <div className='lowerhalf'>

                <br></br>

                    <img className='contactimg' src={contactImg}  alt='contact'/>

                    <p className='contactphrase'> When you're in need of a <br></br> dependable Fabrication Company, don’t hesitate.<br></br> <br></br> Contact Metal Media Fabrication today!</p>

                    <h3 className='phone'> Phone: (406)-366-2160</h3>

                    <h3 className="email"> <a href= 'mailto:metalmediafab@gmail.com'> Send an Email</a> </h3>

                </div>
                
                <Social/>

            </div>
        )
    }
}
export default Contact