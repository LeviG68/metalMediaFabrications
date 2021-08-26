import React, { Component } from 'react';
import Navitems from './Navitems';

class Navbar  extends Component {

    constructor(props)

{

    super(props);
        this.state={
            'NavItemActive': 'Home'
        }
}

activeitem=(x)=>

{

    if(this.state.NavItemActive.length>0){
        document.getElementById(this.state.NavItemActive).classList.remove('active');

    }

    this.setState({'NavItemId': x}, function(){
        document.getElementById(this.state.NavItemActive).classList.add('active');

    });
};

    render () {

        return (

            <nav>
                <ul align="right">
                    <Navitems item= "Home" tolink='/' activec={this.activeitem}>
                </Navitems>
                    <Navitems item= "Fabrication" tolink='/Fabrications' activec={this.activeitem}>
                </Navitems>
                    <Navitems item= "Metal Art" tolink='/Art' activec={this.activeitem}>
                </Navitems>
                    <Navitems item= "Contact" tolink='/Contact' activec={this.activeitem}>
                </Navitems>
                </ul>
            </nav>
        )
    }
}

export default Navbar
