
import React, { Component } from 'react';
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import Container from 'react-bootstrap/Container';
import Logo from '../content/Logo';
import Navbar from '../components/Navbar';

import imga1 from '../images/Art-Images/Antler front mount.jpg';
import imga2 from '../images/Art-Images/Antler side mount.jpg';
import imga3 from '../images/Art-Images/Bear front.jpg';
import imga4 from '../images/Art-Images/Bear head.jpg';
import imga5 from '../images/Art-Images/Bear side.jpg';
import imga6 from '../images/Art-Images/Fire pit ring.png';
import imga7 from '../images/Art-Images/Rose card holder.jpg';
import imga8 from '../images/Art-Images/Star.jpg';
import imga9 from '../images/Art-Images/Alaska Rose.jpg';
import imga10 from '../images/Art-Images/Metal rose.jpg';
import imga11 from '../images/Art-Images/Metal roses setup.jpg';
import imga12 from '../images/Art-Images/2 metal roses.jpg';
import Social from './Social';



const options= {
    thumbnails: {
        showThumbnails: true,
        thumbnailsAlignment: 'center',
        thumbnailsContainerBackgroundColor: 'transparent',
        thumbnailsContainerPadding: '0',
        thumbnailsGap: '5px',
        thumbnailsOpacity: 0.4,
        thumbnailsPosition: 'bottom',
        thumbnailsSize: ['100px', '80px']
      }
}
function App () {
    return (


        <div className="Art">

            <Logo/>
            
            <Navbar/>

            <br></br>
            <br></br>

            <SimpleReactLightbox>
                <Container fluid='md' className= "artImages">
                    <SRLWrapper options={options}>
                            
                                
                                    <img id="Img" src={imga1} alt="" />
                                    <img id="Img" src={imga2} alt="" />
                                    <img id="Img" src={imga3} alt="" />
                                    <img id="Img" src={imga4} alt="" />
                                    <img id="Img" src={imga5} alt="" />
                                    <img id="Img" src={imga6} alt="" />
                                    <img id="Img" src={imga7} alt="" />
                                    <img id="Img" src={imga8} alt="" />
                                    <img id="Img" src={imga9} alt="" />
                                    <img id="Img" src={imga10} alt="" />
                                    <img id="Img" src={imga11} alt="" />
                                    <img id="Img" src={imga12} alt="" />


                            
                    </SRLWrapper>
                </Container>
            </SimpleReactLightbox>
            <Social />
        </div>
    )
}
export default App