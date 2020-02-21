import React, { Component } from 'react';
import { bounceIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import '../css/Sponsors.css';
import '../css/vendor/bootstrap.css';
import '../css/vendor/base.min.css';
import '../css/vendor/tab.min.css';
import '../css/vendor/event.min.css';
import stall from '../img/sponsors/stall.png';
import sixdt from '../img/sponsors/6DT.png';
import studio from '../img/sponsors/studio.png';
import travel from '../img/sponsors/travel.png';
import webhosting from '../img/sponsors/webhosting.png';
import band from '../img/sponsors/band.png';
import educonsultancy from '../img/sponsors/educonsultancy.png';
import knowledgesharing from '../img/sponsors/knowledgesharing.png';
import socialinitiative from '../img/sponsors/socialinitiative.jpg';
import print from '../img/sponsors/print.png';
import tshirt from '../img/sponsors/tshirt.jpg';
import sports from '../img/sponsors/decathlon.png';
import ecosystem from '../img/sponsors/ecosystem.jpg';
import edii from '../img/sponsors/edii.jpg';
import cedi from '../img/sponsors/cedi.png';
import indianoil from '../img/sponsors/indianoil.jpg';
import inox from '../img/sponsors/inox.png';
import satvat from '../img/sponsors/satvat.jpg';
import gt from '../img/sponsors/gt.jpg';
import cegincubator from '../img/sponsors/cegincubator.jpg';
import happymenus from '../img/sponsors/happymenus.jpg';
import lassi from '../img/sponsors/lassi.jpg';
import punpaadu from '../img/sponsors/punpaadu.jpg';
import scossa from '../img/sponsors/scossa.jpg';
import collegefever from '../img/sponsors/collegefever.png';
import lifestyle from '../img/sponsors/lifestyle.png';
import noodle from '../img/sponsors/noodletheory.jpg';
import tea from '../img/sponsors/teavillacafe.jpg';

const styles = {
    bounceIn: {
      animation: 'x 3s ease-in-out',
      animationName: Radium.keyframes(bounceIn,'bounceIn')
    }
  }

class Sponsors extends Component{
    componentDidMount(){
        this.props.renderEvent(true);
    }
    render(){
        return(
        <div class="sponsors-body">
            <div class="container">
                <div class="centre-block">
                    <h1 class="heading-sponsors heading-sponsors center-block text-center">SPONSORS</h1>
                </div>
                <div>
                    <h2 class="fontchange-sponsor center-block text-center">Co-Sponsor</h2>
                </div>
                <br/>
                <div class="row justify-content-center align-items-center text-center inner-data">
                    <div class='col-8 col-md-3 col-sm-8'>
                        <img src={edii} width="100%"/>
                    </div>
                </div>
                <br/><br/>
                <div>
                    <h2 class="fontchange-sponsor center-block text-center">Incubation Sponsor</h2>
                </div>
                <br/>
                <div class="row justify-content-center align-items-center text-center inner-data">
                    <div class='col-8 col-md-3 col-sm-8'>
                        <img src={cedi} width="100%"/>
                    </div>
                </div>
                <br/>
                <div class="row justify-content-center align-items-center text-center inner-data">
                    <div class='col-8 col-md-3 col-sm-8'>
                        <img src={cegincubator} width="100%"/>
                    </div>
                </div>
                <br/><br/>
                <div>
                    <h2 class="fontchange-sponsor center-block text-center">Official Partner - 6DT</h2>
                </div>
                <br/>
                <div class="row justify-content-center align-items-center text-center inner-data">
                    <div class='col-8 col-md-3 col-sm-8'>
                        <img src={sixdt} width="100%"/>
                    </div>
                </div>
                <br/><br/>
                <div>
                    <h2 class="fontchange-sponsor center-block text-center">On-Campus Media Partner</h2>
                </div>
                <br/>
                <div class="row justify-content-center align-items-center text-center inner-data">
                    <div class='col-8 col-md-3 col-sm-8'>
                        <img src={gt} width="100%"/>
                    </div>
                </div>
                <br/><br/>
                <div>
                    <h2 class="fontchange-sponsor center-block text-center">Catering Partner</h2>
                </div>
                <br/>
                <div class="row justify-content-center align-items-center text-center inner-data">
                    <div class='col-8 col-md-3 col-sm-8'>
                        <img src={happymenus} width="100%"/>
                    </div>
                </div>
                <br/><br/>
                <div>
                    <h2 class="fontchange-sponsor center-block text-center">Digital Media Partner</h2>
                </div>
                <br/>
                <div class="row justify-content-center align-items-center text-center inner-data">
                    <div class='col-8 col-md-3 col-sm-8'>
                        <img src={punpaadu} width="100%"/>
                    </div>
                </div>
                <br/><br/>
                <div>
                    <h2 class="fontchange-sponsor center-block text-center">Hospitality Partner</h2>
                </div>
                <br/>
                <div class="row justify-content-center align-items-center text-center inner-data">
                    <div class='col-8 col-md-3 col-sm-8'>
                        <img src={scossa} width="100%"/>
                    </div>
                </div>
                <br/><br/>
                <div>
                    <h2 class="fontchange-sponsor center-block text-center">Ticketing Partner</h2>
                </div>
                <br/>
                <div class="row justify-content-center align-items-center text-center inner-data">
                    <div class='col-8 col-md-3 col-sm-8'>
                        <img src={collegefever} width="100%"/>
                    </div>
                </div>
                <br/><br/>
                <div>
                    <h2 class="fontchange-sponsor center-block text-center">Band Partner - Entretainment</h2>
                </div>
                <br/>
                <div class="row justify-content-center align-items-center text-center inner-data">
                    <div class='col-8 col-md-3 col-sm-8'>
                        <img src={band} width="100%"/>
                    </div>
                </div>
                <br/><br/>
                <div>
                    <h2 class="fontchange-sponsor center-block text-center">Gift Sponsor - Startup Weekend</h2>
                </div>
                <br/>
                <div class="row justify-content-center align-items-center text-center inner-data">
                    <div class='col-8 col-md-3 col-sm-8'>
                        <img src={satvat} width="100%"/>
                    </div>
                </div>
                <br/><br/>
                <div>
                    <h2 class="fontchange-sponsor center-block text-center">Gifting Partner</h2>
                </div>
                <br/>
                <div class="row justify-content-center align-items-center text-center inner-data">
                    <div class='col-8 col-md-3 col-sm-8'>
                        <img src={lifestyle} width="100%"/>
                    </div>
                </div>
                <br/><br/>
                <div>
                    <h2 class="fontchange-sponsor center-block text-center">Food and Beverage Partner</h2>
                </div>
                <br/>
                <div class="row justify-content-center align-items-center text-center inner-data">
                    <div class='col-8 col-md-3 col-sm-8'>
                        <img src={tea} width="100%"/>
                    </div>
                </div>
                <br/><br/>
                <div>
                    <h2 class="fontchange-sponsor center-block text-center">Food Street Partner</h2>
                </div>
                <br/>
                <div class="row justify-content-center align-items-center text-center inner-data">
                    <div class='col-8 col-md-3 col-sm-8'>
                        <img src={noodle} width="100%"/>
                    </div>
                </div>
                <br/><br/>
                <div>
                    <h2 class="fontchange-sponsor center-block text-center">Energy Partner</h2>
                </div>
                <br/>
                <div class="row justify-content-center align-items-center text-center inner-data">
                    <div class='col-8 col-md-3 col-sm-8'>
                        <img src={indianoil} width="100%"/>
                    </div>
                </div>
                <br/><br/>
                <div>
                    <h2 class="fontchange-sponsor center-block text-center">Lassi Partner</h2>
                </div>
                <br/>
                <div class="row justify-content-center align-items-center text-center inner-data">
                    <div class='col-8 col-md-3 col-sm-8'>
                        <img src={lassi} width="100%"/>
                    </div>
                </div>
                <br/><br/>
                <div>
                    <h2 class="fontchange-sponsor center-block text-center">Multiplex Partner</h2>
                </div>
                <br/>
                <div class="row justify-content-center align-items-center text-center inner-data">
                    <div class='col-8 col-md-3 col-sm-8'>
                        <img src={inox} width="100%"/>
                    </div>
                </div>
                <br/><br/>
                <div>
                    <h2 class="fontchange-sponsor center-block text-center">Web Hosting Partner</h2>
                </div>
                <br/>
                <div class="row justify-content-center align-items-center text-center inner-data">
                    <div class='col-8 col-md-3 col-sm-8'>
                        <img src={webhosting} width="100%"/>
                    </div>
                </div>
                <br/><br/>
                <div>
                    <h2 class="fontchange-sponsor center-block text-center">Print Partner</h2>
                </div>
                <br/>
                <div class="row justify-content-center align-items-center text-center inner-data">
                    <div class='col-8 col-md-3 col-sm-8'>
                        <img src={print} width="100%"/>
                    </div>
                </div>
                <br/><br/>
                <div>
                    <h2 class="fontchange-sponsor center-block text-center">Education Consultancy Partner</h2>
                </div>
                <br/>
                <div class="row justify-content-center align-items-center text-center inner-data">
                    <div class='col-8 col-md-3 col-sm-8'>
                        <img src={educonsultancy} width="100%"/>
                    </div>
                </div>
                <br/><br/>
                <div>
                    <h2 class="fontchange-sponsor center-block text-center">Knowledge Sharing Partner</h2>
                </div>
                <br/>
                <div class="row justify-content-center align-items-center text-center inner-data">
                    <div class='col-8 col-md-3 col-sm-8'>
                        <img src={knowledgesharing} width="100%"/>
                    </div>
                </div>
                <br/><br/>
                <div>
                    <h2 class="fontchange-sponsor center-block text-center">Social Initiative Partner</h2>
                </div>
                <br/>
                <div class="row justify-content-center align-items-center text-center inner-data">
                    <div class='col-8 col-md-3 col-sm-8'>
                        <img src={socialinitiative} width="100%"/>
                    </div>
                </div>
                <br/><br/>
                <div>
                    <h2 class="fontchange-sponsor center-block text-center">Stall Partner</h2>
                </div>
                <br/>
                <div class="row justify-content-center align-items-center text-center inner-data">
                    <div class='col-8 col-md-3 col-sm-8'>
                        <img src={stall} width="100%"/>
                    </div>
                </div> 
                <br/><br/>
                <div>
                    <h2 class="fontchange-sponsor center-block text-center">Music Studio Partner</h2>
                </div>
                <br/>
                <div class="row justify-content-center align-items-center text-center inner-data">
                    <div class='col-8 col-md-3 col-sm-8'>
                        <img src={studio} width="100%"/>
                    </div>
                </div>
                <br/><br/>
                <div>
                    <h2 class="fontchange-sponsor center-block text-center">Travel Partner</h2>
                </div>
                <br/>
                <div class="row justify-content-center align-items-center text-center inner-data">
                    <div class='col-8 col-md-3 col-sm-8'>
                        <img src={travel} width="100%"/>
                    </div>
                </div>
                <br/><br/>
                <div>
                    <h2 class="fontchange-sponsor center-block text-center">T-Shirt Partner</h2>
                </div>
                <br/>
                <div class="row justify-content-center align-items-center text-center inner-data">
                    <div class='col-8 col-md-3 col-sm-8'>
                        <img src={tshirt} width="100%"/>
                    </div>
                </div>
                <br/><br/>
                <div>
                    <h2 class="fontchange-sponsor center-block text-center">Sports Partner</h2>
                </div>
                <br/>
                <div class="row justify-content-center align-items-center text-center inner-data">
                    <div class='col-8 col-md-3 col-sm-8'>
                        <img src={sports} width="100%"/>
                    </div>
                </div>
                <br/><br/>
                <div>
                    <h2 class="fontchange-sponsor center-block text-center">Ecosystem Partner</h2>
                </div>
                <br/>
                <div class="row justify-content-center align-items-center text-center inner-data">
                    <div class='col-8 col-md-3 col-sm-8'>
                        <img src={ecosystem} width="100%"/>
                    </div>
                </div>
                <br/><br/>
            </div>       
        </div>
        )
    }
}

export default Sponsors;