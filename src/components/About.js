import React,{ Component } from 'react';
import Particles from 'react-particles-js';
import '../css/About.css';

class About extends Component{
    
    render(){
        return(
            <div class="aboutbackground">
            <link href="https://fonts.googleapis.com/css?family=Rufina:400,700|Source+Sans+Pro:200,300,400,600,700" rel="stylesheet"></link>    
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
                  }}
            />
            </div>
            <div class="main-about">
                <section class="site-about">
                <h1 class="about-title site__title-about site__title--separator-about">Enantra</h1>
                <p class="site__description-about">Entrepreneurship Mantra</p>
                <p class="episode__description-about">
                Enantra is an annual fest conducted by Capitalize, the entrepreneurship club of Anna University and is scheduled to take place from the 20th to the 23rd of February 2020.
                This fest that actually was named as an acronym for &apos;Entrepreneurship Mantra&apos; is aimed to not only celebrate the spirit of entrepreneurship, but also to honor those who have tasted success and paved the way for upcoming entrepreneurs and to encourage students across the state to dream bigger. Every year Enantra takes pride in a plethora of flagship and mini events, along with workshops to provide a common platform for corporates, start-ups and the student community to interact and learn through discussion.
                Enantra was created to encourage students to recognise and develop their entrepreneurial skills, since budding entrepreneurs are the nation's biggest hope in creating job opportunities, building economy and putting the nations foot forward in overall development. The team of Enantra 4.0 looks forward to hosting not just a fest, but a life changing experience for dreamers and upcoming entrepreneurs along with exciting incentives, events and a wide networking opportunity amongst students to create a brighter tomorrow.
                </p>
                </section>
            </div>
            </div>
        )
    }

}

export default About;