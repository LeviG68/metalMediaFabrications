import React, { Component } from 'react';
import Navitems from './Navitems';

class Navbar  extends Component {

    constructor(props)

{

super(props);
this.state={
    'NavItemActive': ''
}
}

activeitem=(x)=>

{

    if(this.state.NavItemActive.length>0){
        document.getElementById(this.state.NavItemActive).classList.remove('active');

    }

    this.setState({'NavItmeId' : x}, ()=>{
        document.getElementById(this.state.NavItemActive).classList.add('active');

    });
};

    render () {

        return (

            <nav>
            <ul>
            <Navitems item= "Home" tolink='/' activec={this.activeitem}>
            </Navitems>
            <Navitems item= "Fabrications" tolink='/Fabrications' activec={this.activeitem}>
            </Navitems>
            <Navitems item= "Metal Art" tolink='/Art' activec={this.activeitem}>
            </Navitems>
            <Navitems item= "Contact" tolink='/contact' activec={this.activeitem}>
            </Navitems>
            </ul>
            </nav>
        )
    }
}

export default Navbar
