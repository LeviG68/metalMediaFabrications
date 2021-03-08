
import React, { Component } from 'react';

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-regular-svg-icons';


class Social extends Component {

    render () {

        return (

            <div className='social'>
            
            <a
                href='https://www.facebook.com/Metal-Media-Fabrication-LLC-113421187102489'
                className="Facebook social"
                >
                <FontAwesomeIcon icon={faFacebook} size='4x' />
            </a>
            <a
                href='mailto:metalmediafab@gmail.com'
                className="Email social"
                >
                <FontAwesomeIcon icon={faEnvelope} size='4x' />
            </a>
            <a
                href='https://www.instagram.com/metal_media_fab/?hl=en'
                className="Instagram social"
                >
                <FontAwesomeIcon icon={faInstagram} size='4x' />
            </a>
        
            <p className='noHover'> Copyright &copy; 2020 Metal Media Fabrication</p>

            </div>
        
        )
    }
}
export default Social 