import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navitems extends Component{

    /* the "activeitem() method takes an imput parameter "x" which is the click Navitem id  */
    render() {

        return(

            <li id={this.props.item}>
            <Link to={this.props.tolink} onClick={this.props.activec.bind(this.props.item)}> {this.props.item}


            </Link>
            </li>
        )
    }
}
export default Navitems