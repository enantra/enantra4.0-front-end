import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { BrowserRouter as Router, Route, Link, Switch,Redirect } from "react-router-dom";
import '../css/MenuBox.css';
import TweenBox from '../js/vendor/TweenMax.min.js';

class MenuBox extends Component {

    loadScript(source){
        var tag = document.createElement('script');
        tag.src = source;

        return tag;
    }

    componentDidMount(){

            let body = document.getElementsByTagName('div')[0];
            body.appendChild(this.loadScript("../js/vendor/TweenMax.min.js"));
            // Class Menu.
            class Menu {
                constructor(el) {
                    this.DOM = {el: el};
                    // Open and close ctls.
                    this.DOM.openCtrl = this.DOM.el.querySelector('.action--menu');
                    this.DOM.closeCtrl = this.DOM.el.querySelector('.action--close');
        
                    // The menu items.
                    this.DOM.items = Array.from(this.DOM.el.querySelectorAll('.menu__item'));
                    // The total number of items.
                    this.itemsTotal = this.DOM.items.length;
        
                    // Custom elements that will be animated.
                    this.DOM.mainLinks = this.DOM.el.querySelectorAll('.mainmenu > a.mainmenu__item');
                    this.DOM.sidemenuLinks = this.DOM.el.querySelectorAll('.sidemenu span.sidemenu__item-inner');
                    this.DOM.menulink = this.DOM.el.querySelector('.menu__item-link');
        
                    this.open();
                }
                open() {
                    this.toggle('open');
                }
                toggle(action) {
                    if ( this.isAnimating ) return;
                    // (dis)allow the main image tilt effect.
                    this.allowTilt = action === 'open' ? false : true;
                    this.isAnimating = true;
                    // Toggling the open state class.
                    this.DOM.el.classList[action === 'open' ? 'add' : 'remove']('menu--open');
                    // After all is animated..
                    const animationEnd = (pos) => {
                        if ( pos === this.itemsTotal-1 ) {
                            this.isAnimating = false;
                        }
                    };
                    // Going through each menu´s item.
                    this.DOM.items.forEach((el, pos) => {
                        // The inner wrapper.
                        const innerEl = el.querySelector('.menu__item-inner');
                        // config and inner config will have the starting transform values (when opening) and the end ones (when closing) for both the item and its inner element.
                        const config = {};
                        const configInner = {};
                        // Direction defined in the HTML data-direction.
                        // bt (bottom to top) || tb (top to bottom) || lr (left to right) || rl (right to left)
                        const direction = el.dataset.direction;
                        // Using 101% instead of 100% to avoid rendering problems.
                        // In order to create the "reveal" effect, the item slides moves in one direction and its inner element in the opposite direction.
                        if ( direction === 'bt' ) {
                            config.y = '101%';
                            configInner.y = '-101%';
                            configInner.x = '0%';
                        }
                        else if ( direction === 'tb' ) {
                            config.y = '-101%';
                            configInner.y = '101%';
                            configInner.x = '0%';
                        }
                        else if ( direction === 'lr' ) {
                            config.x = '-101%';
                            configInner.x = '101%';
                        }
                        else if ( direction === 'rl' ) {
                            config.x = '101%';
                            configInner.x = '-101%';
                        }
                        else {
                            config.x = '101%';
                            config.y = '101%';
                            configInner.x = '-101%';
                            configInner.y = '-101%';
                        }
                        
                        if ( action === 'open' ) {
                            // Setting the initial values.
                            TweenBox.TweenMax.set(el, config);
                            TweenBox.TweenMax.set(innerEl, configInner);
        
                            // Animate.
                            TweenBox.TweenMax.to([el,innerEl], .9, {
                                ease: TweenBox.Quint.easeOut,
                                x: '0%',
                                y: '0%',
                                onComplete: () => animationEnd(pos)
                            });
                        }
        
                    });
        
                    // Show/Hide open and close ctrls.
        
                    // Main links animation.
                    TweenBox.TweenMax.staggerTo(this.DOM.mainLinks, action === 'open' ? 0.9 : 0.2, {
                        ease: action === 'open' ? TweenBox.Quint.easeOut : TweenBox.Quart.easeInOut,
                        startAt: action === 'open' ? {y: '50%', opacity: 0} : null,
                        y: action === 'open' ? '0%' : '50%',
                        opacity: action === 'open' ? 1 : 0
                    }, action === 'open' ? 0.1 : -0.1);
        
                    // Sidemenu links animation.
                    TweenBox.TweenMax.staggerTo(this.DOM.sidemenuLinks, action === 'open' ? 0.5 : 0.2, {
                        ease: action === 'open' ? TweenBox.Quint.easeInOut : TweenBox.Quart.easeInOut,
                        startAt: action === 'open' ? {y: '100%'} : null,
                        y: action === 'open' ? '0%' : '100%'
                    }, action === 'open' ? 0.05 : -0.05);
        
                    // The "Learn how to participate" menu link.
                    TweenBox.TweenMax.to(this.DOM.menulink, action === 'open' ? 0.9 : 0.6, {
                        ease: action === 'open' ? TweenBox.Quint.easeOut : TweenBox.Quart.easeInOut,
                        startAt: action === 'open' ? {x: '10%'} : null,
                        x: action === 'open' ? '0%' : '10%'
                    });
                }
            }
            // Initialize the Menu.
            const menu = new Menu(document.querySelector('nav.menu'));
    }

    render(){
        var useTagActionMenu = '<use xlink:href="#icon-menu"></use>';
        var useTagActionClose = '<use xlink:href="#icon-close"></use>';
       
       return( 
        <Router>                     
        <div className="menuboxbody">
            <nav className="menu">
                <div className="menu__item menu__item--1" data-direction="bt">
                    <div className="menu__item-inner">
                        <div className="mainmenu">
                            <Link to='/' onClick={() => this.props.handleMenuClick('Home')} className="mainmenu__item amenubox">Home</Link>
                            <Link to='/flagships' onClick={() => this.props.handleMenuClick('Flagships')} className="mainmenu__item amenubox">Flagships</Link>
                            <a href='/workshops' className="mainmenu__item amenubox">Workshops</a>
                            <Link to='/events' onClick={() => this.props.handleMenuClick('Events')} className="mainmenu__item amenubox">Events</Link>
                        </div>  
                        <p className="label label--topleft label--vert-mirror">the important stuff</p>
                        <p className="label label--bottomright label--vert">enantra</p>
                    </div>
                </div>
                <div className="menu__item menu__item--2" data-direction="lr">
                    <div className="menu__item-inner">
                        <div className="menu__item-map"></div>
                        <a href="#" className="menu__item-hoverlink amenubox">The location</a>
                    </div>
                </div>
                <div className="menu__item menu__item--3" data-direction="bt">
                    <div className="menu__item-inner">
                        <div className="sidemenu">
                            <a href="#" className="sidemenu__item"><span className="sidemenu__item-inner amenubox">ABOUT US</span></a>
                            <a href="#" className="sidemenu__item"><span className="sidemenu__item-inner amenubox">ACCOMODATION</span></a>
                            <a href="#" className="sidemenu__item"><span className="sidemenu__item-inner amenubox">THE TEAM</span></a>
                            <a href="#" className="sidemenu__item"><span className="sidemenu__item-inner amenubox">SPONSORS</span></a>
                            <a href="#" className="sidemenu__item"><span className="sidemenu__item-inner amenubox">CONTACT US</span></a>
                            <a href="#" className="sidemenu__item"><span className="sidemenu__item-inner amenubox">...</span></a>
                        </div>
                    </div>
                </div>
                <div className="menu__item menu__item--4" data-direction="rl">
                    <div className="menu__item-inner">
                        <p className="label label--topleft label--line">join us now</p>
                        <a href="#" className="menu__item-link amenubox">Learn how to <br/> participate</a>
                    </div>
                </div>
                <div className="menu__item menu__item--5" data-direction="tb">
                    <div className="menu__item-inner">
                        <p className="quote">Hail to thee, our infantry, still brave, beyond the grave</p>
                    </div>
                </div>
                <button className="action action--menu">
                    <svg className="icon-menubox icon--menu" dangerouslySetInnerHTML={{__html : useTagActionMenu}}>
                    </svg>
                </button>
                <button>
                    <svg className="icon-menubox icon--close" dangerouslySetInnerHTML={{__html : useTagActionClose}}>
                    </svg>
                </button>    
            </nav>
        </div>
        </Router>
        )
    }
}

export default MenuBox;