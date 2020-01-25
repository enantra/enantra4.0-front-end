import React, { Component } from 'react';
import { bounceIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import '../css/Sponsors.css';
import '../css/vendor/bootstrap.css';
import '../css/vendor/base.min.css';
import '../css/vendor/tab.min.css';
import '../css/vendor/event.min.css';

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
                <div class="heading-sponsors d-flex justify-content-center">
                        <h1 class="heading-buffer">SPONSORS</h1>
                </div> 
                <div class="content-sponsors d-flex justify-content-center">
                    <StyleRoot>
                    <div  style={styles.bounceIn}>
                        <h1 class="sponsors-buffer">STAY TUNED</h1>
                    </div>
                    </StyleRoot>
                </div> 
            </div>       
        </div>
        )
    }
}

export default Sponsors;