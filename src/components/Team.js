import React, { Component } from 'react';
import '../css/Team.css';
import anime from '../js/vendor/anime.min.js';
import imagesLoaded from '../js/vendor/imagesloaded.pkgd.min.js';
import one from '../img/team/1.jpg';
import two from '../img/team/2.jpg';
import three from '../img/team/3.jpg';
import four from '../img/team/4.jpg';
import five from '../img/team/5.jpg';
import six from '../img/team/6.jpg';
import seven from '../img/team/7.jpg';
import eight from '../img/team/8.jpg';
import nine from '../img/team/9.jpg';
import ten from '../img/team/10.jpg';
import twentyone from '../img/team/21.jpg';
import twentytwo from '../img/team/22.jpg';
import twentythree from '../img/team/23.jpg';
import twentyfour from '../img/team/24.jpg';
import twentyfive from '../img/team/25.jpg';
import twentyseven from '../img/team/27.jpg';
import twentyeight from '../img/team/28.jpg';
import twentynine from '../img/team/29.jpg';
import thirtyone from '../img/team/31.jpg';
import thirtytwo from '../img/team/32.jpg';
import thirtythree from '../img/team/33.jpg';
import thirtyfour from '../img/team/34.jpg';
import fourtyone from '../img/team/41.jpg';
import fourtytwo from '../img/team/42.jpg';
import fiftyone from '../img/team/51.jpg';
import sixtyone from '../img/team/61.jpg';
import sixtytwo from '../img/team/62.jpg';
import sixtythree from '../img/team/63.jpg';
import seventyone from '../img/team/71.jpg';
import seventytwo from '../img/team/72.jpg';
import eightyone from '../img/team/81.jpg';
import eighthytwo from '../img/team/82.jpg';
import ninetyone from '../img/team/91.jpg';
import ninetytwo from '../img/team/92.jpg';
import hundredone from '../img/team/101.jpg';
import hundredtwo from '../img/team/102.jpg';
import hundredthree from '../img/team/103.jpg';
import hundredfour from '../img/team/104.jpg';
import hundredeleven from '../img/team/111.jpg';
import hundredtwentyone from '../img/team/121.png';
import hundredtwentytwo from '../img/team/122.jpg';
import hundredtwentythree from '../img/team/123.jpg';
import hundredtwentyfour from '../img/team/124.jpg';
import hundredthirtyone from '../img/team/131.jpg';
import hundredthirtytwo from '../img/team/132.jpg';
import hundredfourtyone from '../img/team/141.jpg';
import twohundredten from '../img/team/210.jpg';

class Team extends Component{
    componentDidMount(){

        this.props.renderEvent(true);
        
        function extend( a, b ) {
            for( var key in b ) { 
                if( b.hasOwnProperty( key ) ) {
                    a[key] = b[key];
                }
            }
            return a;
        }
    
        // from http://www.quirksmode.org/js/events_properties.html#position
        function getMousePos(e) {
            var posx = 0, posy = 0;
            if (!e) var e = window.event;
            if (e.pageX || e.pageY) 	{
                posx = e.pageX;
                posy = e.pageY;
            }
            else if (e.clientX || e.clientY) 	{
                posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            }
            return { x : posx, y : posy }
        }
    
        /**
         * TiltFx obj.
         */
        function TiltFx(el, options) {
            this.DOM = {};
            this.DOM.el = el;
            this.options = extend({}, this.options);
            extend(this.options, options);
            this._init();
        }
    
        TiltFx.prototype.options = {
            movement: {
                imgWrapper : {
                    translation : {x: 0, y: 0, z: 0},
                    rotation : {x: -5, y: 5, z: 0},
                    reverseAnimation : {
                        duration : 1200,
                        easing : 'easeOutElastic',
                        elasticity : 600
                    }
                },
                lines : {
                    translation : {x: 10, y: 10, z: [0,10]},
                    reverseAnimation : {
                        duration : 1000,
                        easing : 'easeOutExpo',
                        elasticity : 600
                    }
                },
                caption : {
                    translation : {x: 20, y: 20, z: 0},
                    rotation : {x: 0, y: 0, z: 0},
                    reverseAnimation : {
                        duration : 1500,
                        easing : 'easeOutElastic',
                        elasticity : 600
                    }
                },
                /*
                overlay : {
                    translation : {x: 10, y: 10, z: [0,50]},
                    reverseAnimation : {
                        duration : 500,
                        easing : 'easeOutExpo'
                    }
                },
                */
                shine : {
                    translation : {x: 50, y: 50, z: 0},
                    reverseAnimation : {
                        duration : 1200,
                        easing : 'easeOutElastic',
                        elasticity: 600
                    }
                }
            }
        };
    
        /**
         * Init.
         */
        TiltFx.prototype._init = function() {
            this.DOM.animatable = {};
            this.DOM.animatable.imgWrapper = this.DOM.el.querySelector('.tilter__figure');
            this.DOM.animatable.lines = this.DOM.el.querySelector('.tilter__deco--lines');
            this.DOM.animatable.caption = this.DOM.el.querySelector('.tilter__caption');
            this.DOM.animatable.overlay = this.DOM.el.querySelector('.tilter__deco--overlay');
            this.DOM.animatable.shine = this.DOM.el.querySelector('.tilter__deco--shine > div');
            this._initEvents();
        };
    
        /**
         * Init/Bind events.
         */
        TiltFx.prototype._initEvents = function() {
            var self = this;
            
            this.mouseenterFn = function() {
                for(var key in self.DOM.animatable) {
                    anime.remove(self.DOM.animatable[key]);
                }
            };
            
            this.mousemoveFn = function(ev) {
                requestAnimationFrame(function() { self._layout(ev); });
            };
            
            this.mouseleaveFn = function(ev) {
                requestAnimationFrame(function() {
                    for(var key in self.DOM.animatable) {
                        if( self.options.movement[key] == undefined ) {continue;}
                        anime({
                            targets: self.DOM.animatable[key],
                            duration: self.options.movement[key].reverseAnimation != undefined ? self.options.movement[key].reverseAnimation.duration || 0 : 1,
                            easing: self.options.movement[key].reverseAnimation != undefined ? self.options.movement[key].reverseAnimation.easing || 'linear' : 'linear',
                            elasticity: self.options.movement[key].reverseAnimation != undefined ? self.options.movement[key].reverseAnimation.elasticity || null : null,
                            scaleX: 1,
                            scaleY: 1,
                            scaleZ: 1,
                            translateX: 0,
                            translateY: 0,
                            translateZ: 0,
                            rotateX: 0,
                            rotateY: 0,
                            rotateZ: 0
                        });
                    }
                });
            };
    
            this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
            this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
            this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
        };
    
        TiltFx.prototype._layout = function(ev) {
            // Mouse position relative to the document.
            var mousepos = getMousePos(ev),
                // Document scrolls.
                docScrolls = {left : document.body.scrollLeft + document.documentElement.scrollLeft, top : document.body.scrollTop + document.documentElement.scrollTop},
                bounds = this.DOM.el.getBoundingClientRect(),
                // Mouse position relative to the main element (this.DOM.el).
                relmousepos = { x : mousepos.x - bounds.left - docScrolls.left, y : mousepos.y - bounds.top - docScrolls.top };
    
            // Movement settings for the animatable elements.
            for(var key in this.DOM.animatable) {
                if( this.DOM.animatable[key] == undefined || this.options.movement[key] == undefined ) {
                    continue;
                }
                var t = this.options.movement[key] != undefined ? this.options.movement[key].translation || {x:0,y:0,z:0} : {x:0,y:0,z:0},
                    r = this.options.movement[key] != undefined ? this.options.movement[key].rotation || {x:0,y:0,z:0} : {x:0,y:0,z:0},
                    setRange = function (obj) {
                        for(var k in obj) {
                            if( obj[k] == undefined ) {
                                obj[k] = [0,0];
                            }
                            else if( typeof obj[k] === 'number' ) {
                                obj[k] = [-1*obj[k],obj[k]];
                            }
                        }
                    };
    
                setRange(t);
                setRange(r);
                
                var transforms = {
                    translation : {
                        x: (t.x[1]-t.x[0])/bounds.width*relmousepos.x + t.x[0],
                        y: (t.y[1]-t.y[0])/bounds.height*relmousepos.y + t.y[0],
                        z: (t.z[1]-t.z[0])/bounds.height*relmousepos.y + t.z[0],
                    },
                    rotation : {
                        x: (r.x[1]-r.x[0])/bounds.height*relmousepos.y + r.x[0],
                        y: (r.y[1]-r.y[0])/bounds.width*relmousepos.x + r.y[0],
                        z: (r.z[1]-r.z[0])/bounds.width*relmousepos.x + r.z[0]
                    }
                };
    
                this.DOM.animatable[key].style.WebkitTransform = this.DOM.animatable[key].style.transform = 'translateX(' + transforms.translation.x + 'px) translateY(' + transforms.translation.y + 'px) translateZ(' + transforms.translation.z + 'px) rotateX(' + transforms.rotation.x + 'deg) rotateY(' + transforms.rotation.y + 'deg) rotateZ(' + transforms.rotation.z + 'deg)';
            }
        };

        (function () {
            var tiltSettings = [
                {},
                {
                    movement: {
                        imgWrapper: {
                            translation: { x: 10, y: 10, z: 30 },
                            rotation: { x: 0, y: -10, z: 0 },
                            reverseAnimation: { duration: 200, easing: 'easeOutQuad' }
                        },
                        lines: {
                            translation: { x: 10, y: 10, z: [0, 70] },
                            rotation: { x: 0, y: 0, z: -2 },
                            reverseAnimation: { duration: 2000, easing: 'easeOutExpo' }
                        },
                        caption: {
                            rotation: { x: 0, y: 0, z: 2 },
                            reverseAnimation: { duration: 200, easing: 'easeOutQuad' }
                        },
                        overlay: {
                            translation: { x: 10, y: -10, z: 0 },
                            rotation: { x: 0, y: 0, z: 2 },
                            reverseAnimation: { duration: 2000, easing: 'easeOutExpo' }
                        },
                        shine: {
                            translation: { x: 100, y: 100, z: 0 },
                            reverseAnimation: { duration: 200, easing: 'easeOutQuad' }
                        }
                    }
                },
                {
                    movement: {
                        imgWrapper: {
                            rotation: { x: -5, y: 10, z: 0 },
                            reverseAnimation: { duration: 900, easing: 'easeOutCubic' }
                        },
                        caption: {
                            translation: { x: 30, y: 30, z: [0, 40] },
                            rotation: { x: [0, 15], y: 0, z: 0 },
                            reverseAnimation: { duration: 1200, easing: 'easeOutExpo' }
                        },
                        overlay: {
                            translation: { x: 10, y: 10, z: [0, 20] },
                            reverseAnimation: { duration: 1000, easing: 'easeOutExpo' }
                        },
                        shine: {
                            translation: { x: 100, y: 100, z: 0 },
                            reverseAnimation: { duration: 900, easing: 'easeOutCubic' }
                        }
                    }
                },
                {
                    movement: {
                        imgWrapper: {
                            rotation: { x: -5, y: 10, z: 0 },
                            reverseAnimation: { duration: 50, easing: 'easeOutQuad' }
                        },
                        caption: {
                            translation: { x: 20, y: 20, z: 0 },
                            reverseAnimation: { duration: 200, easing: 'easeOutQuad' }
                        },
                        overlay: {
                            translation: { x: 5, y: -5, z: 0 },
                            rotation: { x: 0, y: 0, z: 6 },
                            reverseAnimation: { duration: 1000, easing: 'easeOutQuad' }
                        },
                        shine: {
                            translation: { x: 50, y: 50, z: 0 },
                            reverseAnimation: { duration: 50, easing: 'easeOutQuad' }
                        }
                    }
                },
                {
                    movement: {
                        imgWrapper: {
                            translation: { x: 0, y: -8, z: 0 },
                            rotation: { x: 3, y: 3, z: 0 },
                            reverseAnimation: { duration: 1200, easing: 'easeOutExpo' }
                        },
                        lines: {
                            translation: { x: 15, y: 15, z: [0, 15] },
                            reverseAnimation: { duration: 1200, easing: 'easeOutExpo' }
                        },
                        overlay: {
                            translation: { x: 0, y: 8, z: 0 },
                            reverseAnimation: { duration: 600, easing: 'easeOutExpo' }
                        },
                        caption: {
                            translation: { x: 10, y: -15, z: 0 },
                            reverseAnimation: { duration: 900, easing: 'easeOutExpo' }
                        },
                        shine: {
                            translation: { x: 50, y: 50, z: 0 },
                            reverseAnimation: { duration: 1200, easing: 'easeOutExpo' }
                        }
                    }
                },
                {
                    movement: {
                        lines: {
                            translation: { x: -5, y: 5, z: 0 },
                            reverseAnimation: { duration: 1000, easing: 'easeOutExpo' }
                        },
                        caption: {
                            translation: { x: 15, y: 15, z: 0 },
                            rotation: { x: 0, y: 0, z: 3 },
                            reverseAnimation: { duration: 1500, easing: 'easeOutElastic', elasticity: 700 }
                        },
                        overlay: {
                            translation: { x: 15, y: -15, z: 0 },
                            reverseAnimation: { duration: 500, easing: 'easeOutExpo' }
                        },
                        shine: {
                            translation: { x: 50, y: 50, z: 0 },
                            reverseAnimation: { duration: 500, easing: 'easeOutExpo' }
                        }
                    }
                },
                {
                    movement: {
                        imgWrapper: {
                            translation: { x: 5, y: 5, z: 0 },
                            reverseAnimation: { duration: 800, easing: 'easeOutQuart' }
                        },
                        caption: {
                            translation: { x: 10, y: 10, z: [0, 50] },
                            reverseAnimation: { duration: 1000, easing: 'easeOutQuart' }
                        },
                        shine: {
                            translation: { x: 50, y: 50, z: 0 },
                            reverseAnimation: { duration: 800, easing: 'easeOutQuart' }
                        }
                    }
                },
                {
                    movement: {
                        lines: {
                            translation: { x: 40, y: 40, z: 0 },
                            reverseAnimation: { duration: 1500, easing: 'easeOutElastic' }
                        },
                        caption: {
                            translation: { x: 20, y: 20, z: 0 },
                            rotation: { x: 0, y: 0, z: -5 },
                            reverseAnimation: { duration: 1000, easing: 'easeOutExpo' }
                        },
                        overlay: {
                            translation: { x: -30, y: -30, z: 0 },
                            rotation: { x: 0, y: 0, z: 3 },
                            reverseAnimation: { duration: 750, easing: 'easeOutExpo' }
                        },
                        shine: {
                            translation: { x: 100, y: 100, z: 0 },
                            reverseAnimation: { duration: 750, easing: 'easeOutExpo' }
                        }
                    }
                }];

            function init() {
                var idx = 0;
                [].slice.call(document.querySelectorAll('a.tilter')).forEach(function (el, pos) {
                    idx = pos % 2 === 0 ? idx + 1 : idx;
                    new TiltFx(el, tiltSettings[idx - 1]);
                });
            }

            // Preload all images.
            imagesLoaded(document.querySelector('main'), function () {
                document.body.classList.remove('loading');
                init();
            });

            // REMOVE THIS!
            // For Demo purposes only. Prevent the click event.
            [].slice.call(document.querySelectorAll('a[href="#"]')).forEach(function (el) {
                el.addEventListener('click', function (ev) { ev.preventDefault(); });
            });
        })();
    }
    render(){
        return(
    <body class="team-background">
        <main>
        <section class="content-theteam content--c1">
            <header class="codrops-header">
                <h1 class="codrops-header__title"><br/>President</h1>
            </header>
            <a class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={one} alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title">Venkatesh Prasad</h3>
                        <p class="tilter__description">President <br /> 9786075467</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
        </section> 
        <section class="content-theteam content--c1">
            <header class="codrops-header">
                <h1 class="codrops-header__title">Vice President</h1>
            </header>
            <a class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={two} alt="img02" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title">Sara Aafreen</h3>
                        <p class="tilter__description">Vice President <br /> 8111872503</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
            <a class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={three} alt="img02" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title">Afric Ali Akbar</h3>
                        <p class="tilter__description">Vice President <br /> 7092460818 </p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
        </section>       
        <section class="content-theteam content--c1">
            <header class="codrops-header">
                <h1 class="codrops-header__title">Board of Directors</h1>
            </header>
            <a class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={four} alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title">Arun Deepak</h3>
                        <p class="tilter__description"> Head of Operations <br /> 9940246446</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
            <a class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={five} alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title">Syed Mohammed Abullais</h3>
                        <p class="tilter__description">Head of Events <br /> 7093597441</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
            <a  class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={six} alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title"> Abhishek Rajaram</h3>
                        <p class="tilter__description">Chief Financial officer <br /> 7397229178</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
            <a  class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={seven} alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title">Aadil Sheriff</h3>
                        <p class="tilter__description">Head of Marketing <br /> 9566661249</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
            <a  class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={eight} alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title"> Shaheen Ahmed </h3>
                        <p class="tilter__description">Head of QAC <br /> 8220417249</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
            <a class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={nine} alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title">Aazim Jaheez </h3>
                        <p class="tilter__description">Head of External Relations <br /> 9962796596</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
            <a class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={ten} alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title">Vishnupriya V</h3>
                        <p class="tilter__description">Head of Alumni Relations <br /> 8762315903</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
        </section>
        <section class="content-theteam content--c1">
            <header class="codrops-header">
                <h1 class="codrops-header__title">Flagships </h1>
            </header>

            <a  class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={twentyone} alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title">Ranjani ramesh</h3>
                        <p class="tilter__description">Startup weekend <br /> 8610276587</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
            <a class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={twentytwo} alt="img02" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title">Bharathi Kiran</h3>
                        <p class="tilter__description">Startup weekend <br /> 8056136490</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
            <a  class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={twentythree} alt="img02" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title"> Sabareesan Periasamy</h3>
                        <p class="tilter__description">Startup pitchfest <br /> 9159797678 </p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
            <a  class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={twentyfour} alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title">Vishwak</h3>
                        <p class="tilter__description"> Startup Street <br /> 9884790009</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
            <a  class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={twentyseven} alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title">Prashant</h3>
                        <p class="tilter__description">Entretainment<br /> 9123599505</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
            <a  class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={twentyeight} alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title"> Vineeth john </h3>
                        <p class="tilter__description">Aumun<br /> 7356415751</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
            <a  class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={twentynine} alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title">Harini </h3>
                        <p class="tilter__description">6 Degree Talk <br /> 8838789776</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
            <a  class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={twohundredten} alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title">Amritha</h3>
                        <p class="tilter__description">6 Degree Talk <br /> 7200823626</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
        </section>
        <section class="content-theteam content--c1">
            <header class="codrops-header">

                <h1 class="codrops-header__title">Events</h1>
            </header>

            <a  class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={thirtyone} alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title"> Aparna</h3>
                        <p class="tilter__description">9940024580</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
            <a  class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={thirtytwo} alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title"> Alakarthika</h3>
                        <p class="tilter__description">9094828728</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
            <a  class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={thirtythree} alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title"> Smruthi</h3>
                        <p class="tilter__description">6379414727</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
            <a  class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={thirtyfour} alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title">Nabeela</h3>
                        <p class="tilter__description">9710957086</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>

        </section>
        <section class="content-theteam content--c1">
            <header class="codrops-header">

                <h1 class="codrops-header__title">Human Resources</h1>
            </header>

            <a  class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={fourtyone} alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title">Ragavendran</h3>
                        <p class="tilter__description">9500441416</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
            <a  class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={fourtytwo} alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title">Romario</h3>
                        <p class="tilter__description">9790628289</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
        </section>
        <section class="content-theteam content--c1">
            <header class="codrops-header">
                <h1 class="codrops-header__title">Logistics</h1>
            </header>
            <a  class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={fiftyone} alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title">Nithesh</h3>
                        <p class="tilter__description">9600398878</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>

        </section>
        <section class="content-theteam content--c1">
            <header class="codrops-header">

                <h1 class="codrops-header__title">Hospitality</h1>
            </header>

            <a  class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={sixtyone} alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title"> Shvani</h3>
                        <p class="tilter__description">9940713101</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
            <a  class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={sixtytwo} alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title"> Leela</h3>
                        <p class="tilter__description">8189970910</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
            <a  class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={sixtythree} alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title"> Bharathi Priya </h3>
                        <p class="tilter__description">9629645327</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
        </section>
        <section class="content-theteam content--c1">
            <header class="codrops-header">
                <h1 class="codrops-header__title">Marketing</h1>
            </header>
            <a  class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title">Tarun</h3>
                        <p class="tilter__description"></p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
            <a  class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={seventytwo} alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title">Prem Karnan</h3>
                        <p class="tilter__description">9159645772</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
        </section>
        <section class="content-theteam content--c1">
            <header class="codrops-header">

                <h1 class="codrops-header__title">Workshops</h1>
            </header>
            <a  class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={eightyone} alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title"> Mirunalini </h3>
                        <p class="tilter__description">8870032953</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
            <a  class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={eighthytwo} alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title"> Varshan</h3>
                        <p class="tilter__description">9176696400</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
            <a  class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src="img/83.jpg" alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title"> Pugazhendhi </h3>
                        <p class="tilter__description">9003246116</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>


        </section>
        <section class="content-theteam content--c1">
            <header class="codrops-header">

                <h1 class="codrops-header__title">External Relations </h1>
            </header>

            <a  class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={ninetyone} alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title">Eesha Akula</h3>
                        <p class="tilter__description">9840998538</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
            <a  class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={ninetytwo} alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title">Subhiksha</h3>
                        <p class="tilter__description">9176224940</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
        </section>
        <section class="content-theteam content--c1">
            <header class="codrops-header">

                <h1 class="codrops-header__title">QAC </h1>
            </header>

            <a  class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={hundredone} alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title"> Joe samuel</h3>
                        <p class="tilter__description">9967699622</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
            <a  class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={hundredtwo} alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title"> Tejashwini</h3>
                        <p class="tilter__description">7401814999</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
            <a  class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={hundredthree} alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title"> Priyadarshini</h3>
                        <p class="tilter__description">7358243126</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
            <a  class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={hundredfour} alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title">Mohammed Ikhlas</h3>
                        <p class="tilter__description">9677442569</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>

        </section>
        <section class="content-theteam content--c1">
            <header class="codrops-header">

                <h1 class="codrops-header__title">Design </h1>
            </header>

            <a  class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={hundredeleven} alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title"> Sukrith </h3>
                        <p class="tilter__description">7824030159</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
            {/*<a href="#" class="tilter tilter--1">
                    <figure class="tilter__figure">
                        <img class="tilter__image" src="img/112.jpg" alt="img01" />
                        <div class="tilter__deco tilter__deco--shine">
                            <div></div>
                        </div>
                        <figcaption class="tilter__caption">
                            <h3 class="tilter__title"> Varshan</h3>
                            <p class="tilter__description">9176696400</p>
                        </figcaption>
                        <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                            <path d="M20.5,20.5h260v375h-260V20.5z" />
                        </svg>
                    </figure>
                </a>
                <a href="#" class="tilter tilter--1">
                    <figure class="tilter__figure">
                        <img class="tilter__image" src="img/113.jpg" alt="img01" />
                        <div class="tilter__deco tilter__deco--shine">
                            <div></div>
                        </div>
                        <figcaption class="tilter__caption">
                            <h3 class="tilter__title"> Pugazhendhi </h3>
                            <p class="tilter__description">9003246116</p>
                        </figcaption>
                        <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                            <path d="M20.5,20.5h260v375h-260V20.5z" />
                        </svg>
                    </figure>
        </a>*/}


        </section>

        <section class="content-theteam content--c1">
            <header class="codrops-header">

                <h1 class="codrops-header__title">Tech </h1>
            </header>

            <a  class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={hundredtwentytwo} alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title"> Ambika</h3>
                        <p class="tilter__description">9940559790</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
            <a  class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={hundredtwentyone} alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title"> Naga Sanjay </h3>
                        <p class="tilter__description">9943442590</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
            <a  class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={hundredtwentythree} alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title"> Siva kailash</h3>
                        <p class="tilter__description">8754186770</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
            <a  class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={hundredtwentyfour} alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title">Shobhak </h3>
                        <p class="tilter__description">7448867788</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>

        </section>

        <section class="content-theteam content--c1">
            <header class="codrops-header">

                <h1 class="codrops-header__title"> Contents </h1>
            </header>

            <a  class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={hundredthirtyone} alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title">Pradhakshya</h3>
                        <p class="tilter__description">9677083323</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
            <a  class="tilter tilter--1">
                <figure class="tilter__figure">
                    <img class="tilter__image" src={hundredthirtytwo} alt="img01" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title">Jyotsna</h3>
                        <p class="tilter__description">8220182281</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
        </section>
        <section class="content-theteam content--c1">
        <header class="codrops-header">

            <h1 class="codrops-header__title"> Media </h1>
        </header>

        <a  class="tilter tilter--1">
            <figure class="tilter__figure">
                <img class="tilter__image" src={hundredfourtyone} alt="img01" />
                <div class="tilter__deco tilter__deco--shine">
                    <div></div>
                </div>
                <figcaption class="tilter__caption">
                    <h3 class="tilter__title"> Ijaz ahmed</h3>
                    <p class="tilter__description">8754122080</p>
                </figcaption>
                <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                    <path d="M20.5,20.5h260v375h-260V20.5z" />
                </svg>
            </figure>
        </a>
        <a  class="tilter tilter--1">
            <figure class="tilter__figure">
                <img class="tilter__image" src="img/142.jpg" alt="img01" />
                <div class="tilter__deco tilter__deco--shine">
                    <div></div>
                </div>
                <figcaption class="tilter__caption">
                    <h3 class="tilter__title">Ajay varman</h3>
                    <p class="tilter__description">9597956887</p>
                </figcaption>
                <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                    <path d="M20.5,20.5h260v375h-260V20.5z" />
                </svg>
            </figure>
        </a>
        </section>
    </main>
    </body>
    )
    }
}

export default Team;