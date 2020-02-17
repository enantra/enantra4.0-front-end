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