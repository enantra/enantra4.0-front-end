import React,{ Component } from 'react';
import Particles from 'react-particles-js';
import '../css/About.css';
import annauniv from '../img/annauniv.png';
import capitalizelogo from '../img/capitalizelogo.png';
import ced from '../img/ced.png';

class About extends Component{
    
    render(){
        return(
            <div class="aboutbackground">
            <link href="https://fonts.googleapis.com/css?family=Rufina:400,700|Source+Sans+Pro:200,300,400,600,700" rel="stylesheet"></link> 
            <div class="main-about">
            <div id="site__bg">
            <Particles params={{
                    "particles": {
                      "number": {
                        "value": 30,
                        "density": {
                          "enable": true,
                          "value_area": 800
                        }
                      },
                      "color": {
                        "value": ["#6ECDDD", "#36BB93", "#7D43AE", "#E31565", "#EBA91F"]
                      },
                      "shape": {
                        "type": "circle",
                        "stroke": {
                          "width": 0,
                          "color": "#111820"
                        }
                      },
                      "opacity": {
                        "value": .5,
                        "random": false,
                        "anim": {
                          "enable": false,
                          "speed": .1,
                          "opacity_min": 0,
                          "sync": false
                        }
                      },
                      "size": {
                        "value": 6,
                        "random": true
                      },
                      "line_linked": {
                        "enable": false
                      },
                      "move": {
                        "enable": true,
                        "speed": .5,
                        "direction": "none",
                        "random": true,
                        "straight": false,
                        "out_mode": "in",
                        "attract": {
                          "enable": true,
                          "rotateX": 600,
                          "rotateY": 1200
                        }
                      }
                    },
                    "interactivity": {
                      "detect_on": "canvas",
                      "events": {
                        "onhover": {
                          "enable": false,
                          "mode": "repulse"
                        },
                        "onclick": {
                          "enable": true,
                          "mode": "push"
                        },
                        "resize": true
                      },
                      "modes": {
                        "push": {
                          "particles_nb": 3
                        }
                      }
                    },
                    "retina_detect": true
                  }}/> 
                </div>  
                <div class="site-about">
                <h1 class="about-title site__title-about site__title--separator-about">Enantra</h1>
                <p class="site__description-about">Entrepreneurship Mantra</p>
                <br/>
                <p>
                <h2>The Host: Anna University</h2>
                <br/>
                <img class="logo-about-annauniv" src={annauniv}/>
                Anna University is the one of the most reputed institutions in India. Located at the heart of Chennai is the College of Engineering, the principal college of Anna University boasts of a magnificent campus at one of the most prominent locations in the city – Guindy. With a rich history spanning over 225 years, CEG is one of the oldest colleges in the world. Ranked amongst the top 10 institutions in the country, this prestigious institution has produced many budding engineers and successful businessmen over the years. True to its esteem, as an institution enriched with rich entrepreneurial culture, CEG even today stands as a beacon of light to students who wish to be entrepreneurs. The notable Alumni from this institution include Verghese Kurien (Amul), Venu Srinivisan(TVS), N Srinivasan (India Cements), M.Murugappa (Murugappa group) etc.
                </p>
                <br/>
                <br/>
                <p>
                <h2>Centre of Entrepreneurship Development</h2>
                <br/>
                <img class="logo-about-ced" src={ced}/>
                CED, Anna University provides one such platform that establishes links and interactions with industries belonging to several facets and educational institutions. With a view to inculcate entrepreneurial values among the student population, CED has been consistent in carrying out various programs for engineering students of the state by organizing in a diversified and eye-opening manner. Also, nurturing many budding and nascent startups under its banner, CED takes immense efforts in cultivating the spirit of entrepreneurship.
                </p>
                <br/>
                <br/>
                <br/>
                <p>
                <h2>The Organising Team: Capitalize</h2>
                <br/>
                <img class="logo-about-capitalize" src={capitalizelogo}/>
                Capitalize is the student run entrepreneurship cell of Anna university that aims to nurture entrepreneurial culture with the judicious combination of start-ups, corporates and the student community into one common platform. Capitalize as a club, envisions to instill the perfect qualities in a leader, eventually enabling them to be the trailblazers of tomorrow. This club incubates ideas, no matter how miniscule or eccentric and extends immense support to equip these ideas with a successful front. Fortified with a core team of creative and bold minds, Capitalize challenges, tests and motivates its members to follow their goals and revolves around the ideals of innovation and leadership.
                </p>
                </div> 
            </div>
            </div>
        )
    }

}

export default About;