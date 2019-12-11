import React, { Component } from 'react';
import sponsors from '../img/sponsors.png';
import '../css/Sponsors.css';
import '../css/vendor/bootstrap.css';
import '../css/vendor/base.min.css';
import '../css/vendor/tab.min.css';
import '../css/vendor/event.min.css';

class Sponsors extends Component{
    render(){
        return(
        <div class="sponsors-body">
            <div class="container">
                <div class="centre-block">
                    <h1 class="heading-sponsors center-block text-center"><img src={sponsors} alt="terminator-font" border="0" /></h1>
                </div>
                <div class="content-sponsors row justify-content-center align-items-center text-center inner-data">
                    <div class='col-1 col-sm-10 col-sm-1'>
                        <h1 class="sponsors-buffer">STAY TUNED...</h1>
                    </div>
                </div> 
            </div>       
        </div>
        )
    }
}

export default Sponsors;