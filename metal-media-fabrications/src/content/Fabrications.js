import React, { Component } from 'react';
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import Logo from './Logo';
import Navbar from '../components/Navbar';

import img00 from '../images/project-images/Door Handle.jpg';
import img01 from '../images/project-images/2nd level railing 2.jpg';
import img02 from '../images/project-images/Bunk beds.jpg';
import img25 from '../images/project-images/Bunk bed mockup.jpg';
import img03 from '../images/project-images/Cabin railing.jpg';
import img04 from '../images/project-images/Cabin railing 2.jpg';
import img05 from '../images/project-images/Curvered railing.jpg';
import img06 from '../images/project-images/Deck railing.jpg';
import img07 from '../images/project-images/Deck railing 2.jpg';
import img08 from '../images/project-images/Hand rail.jpg';
import img09 from '../images/project-images/Hand rail 3.jpg';
import img10 from '../images/project-images/Hand rail mount.jpg';
import img11 from '../images/project-images/Hand rail mount top view.jpg';
import img12 from '../images/project-images/Hand rail post .jpg';
import img13 from '../images/project-images/Hand rail rolled spendles.jpg';
import img14 from '../images/project-images/Hand rail side 2.jpg';
import img15 from '../images/project-images/Hand rail side view.jpg';
import img16 from '../images/project-images/image 1.jpg';
import img17 from '../images/project-images/Outside railing.jpg';
import img18 from '../images/project-images/Outside railing 2.jpg';
import img19 from '../images/project-images/Park Bench.jpg';
import img20 from '../images/project-images/Pot holder.jpg';
import img21 from '../images/project-images/Queen bed frame.jpg';
import img22 from '../images/project-images/Rolled spendle top view.jpg';
import img23 from '../images/project-images/Shelf stand.jpg';
import img24 from '../images/project-images/Truck bed.jpg';
import img26 from '../images/project-images/Stargate.jpg';

function App () {
    return (

        <div className="Projects">

        <Logo/>

        <Navbar/>

        <br></br>
        <br></br>

        <SimpleReactLightbox>
            <SRLWrapper>
    
                <img id="Img" src={img00} alt="Door Handle" />    

                <img id="Img" src={img01} alt="2nd Level railing" />
        
                <img id="Img" src={img02} alt="Twin Bunk beds" />

                <img id="Img" src={img25} alt="Twin Bunk bed mocked up before paint!" />

                <img id="Img" src={img03} alt="2nd Level railing" />
    
                <img id="Img" src={img04} alt="2nd Level railing" />
        
                <img id="Img" src={img05} alt="2nd Level railing" />
    
                <img id="Img" src={img06} alt="2nd Level railing" />
    
                <img id="Img" src={img07} alt="2nd Level railing" />
     
                <img id="Img" src={img08} alt="2nd Level railing" />
        
                <img id="Img" src={img09} alt="2nd Level railing" />
    
                <img id="Img" src={img10} alt="2nd Level railing" />

                <img id="Img" src={img11} alt="2nd Level railing" />
        
                <img id="Img" src={img12} alt="2nd Level railing" />
            
                <img id="Img" src={img13} alt="2nd Level railing" />
                
                <img id="Img" src={img14} alt="2nd Level railing" />
                
                <img id="Img" src={img15} alt="2nd Level railing" />
            
                <img id="Img" src={img16} alt="2nd Level railing" />
             
                <img id="Img" src={img17} alt="2nd Level railing" />
                
                <img id="Img" src={img18} alt="2nd Level railing" />
            
                <img id="Img" src={img19} alt="Park bench built for the Town of Troy,MT" />
                
                <img id="Img" src={img20} alt="Hanging Pot holder" />
        
                <img id="Img" src={img21} alt="Queen bed frame" />
            
                <img id="Img" src={img22} alt="Rolled spendle railing top view" />
                
                <img id="Img" src={img23} alt="Shelf stand" />
                
                <img id="Img" src={img24} alt="Queen bed frame ready to Ship!!" />

                <img id="Img" src={img26} alt="Garden gate with latch!!" />
            
            </SRLWrapper>
        </SimpleReactLightbox>
        
        </div>
    )
}
 export default App
