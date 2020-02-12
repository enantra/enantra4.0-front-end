import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch,Redirect } from "react-router-dom";
import '../css/Menu.css';
import '../css/NormalizeMenu.css';
import Avatar from './Avatar';

var elmHamburger;
var gNavItems;
var elmOverlay;
var gButtonItem;


var overlay;

class Menu extends Component {
    
    componentDidMount(){

      const ease = {
        exponentialIn: (t) => {
          return t == 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0));
        },
        exponentialOut: (t) => {
          return t == 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t);
        },
        exponentialInOut: (t) => {
          return t == 0.0 || t == 1.0
            ? t
            : t < 0.5
              ? +0.5 * Math.pow(2.0, (20.0 * t) - 10.0)
              : -0.5 * Math.pow(2.0, 10.0 - (t * 20.0)) + 1.0;
        },
        sineOut: (t) => {
          const HALF_PI = 1.5707963267948966;
          return Math.sin(t * HALF_PI);
        },
        circularInOut: (t) => {
          return t < 0.5
              ? 0.5 * (1.0 - Math.sqrt(1.0 - 4.0 * t * t))
              : 0.5 * (Math.sqrt((3.0 - 2.0 * t) * (2.0 * t - 1.0)) + 1.0);
        },
        cubicIn: (t) => {
          return t * t * t;
        },
        cubicOut: (t) => {
          const f = t - 1.0;
          return f * f * f + 1.0;
        },
        cubicInOut: (t) => {
          return t < 0.5
            ? 4.0 * t * t * t
            : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
        },
        quadraticOut: (t) => {
          return -t * (t - 2.0);
        },
        quarticOut: (t) => {
          return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
        },
      }       
      
      class ShapeOverlays {
        constructor(elm) {
          this.elm = elm;
          this.path = elm.querySelectorAll('path');
          this.numPoints = 18;
          this.duration = 600;
          this.delayPointsArray = [];
          this.delayPointsMax = 300;
          this.delayPerPath = 100;
          this.timeStart = Date.now();
          this.isOpened = false;
          this.isAnimating = false;
        }
        toggle() {
          this.isAnimating = true;
          const range = 4 * Math.random() + 6;
          for (var i = 0; i < this.numPoints; i++) {
            const radian = i / (this.numPoints - 1) * Math.PI;
            this.delayPointsArray[i] = (Math.sin(-radian) + Math.sin(-radian * range) + 2) / 4 * this.delayPointsMax;
          }
          if (this.isOpened === false) {
              this.open();
          } else {
              this.close();
          }
        }
        open() {
          this.isOpened = true;
          this.elm.classList.add('is-opened');
          this.timeStart = Date.now();
          this.renderLoop();
        }
        close() {
          this.isOpened = false;
          this.elm.classList.remove('is-opened');
          this.timeStart = Date.now();
          this.renderLoop();
        }
        updatePath(time) {
          const points = [];
          for (var i = 0; i < this.numPoints + 1; i++) {
            points[i] = ease.cubicInOut(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1)) * 100
          }
      
          let str = '';
          str += (this.isOpened) ? `M 0 0 V ${points[0]} ` : `M 0 ${points[0]} `;
          for (var i = 0; i < this.numPoints - 1; i++) {
            const p = (i + 1) / (this.numPoints - 1) * 100;
            const cp = p - (1 / (this.numPoints - 1) * 100) / 2;
            str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${points[i + 1]} `;
          }
          str += (this.isOpened) ? `V 0 H 0` : `V 100 H 0`;
          return str;
        }
        render() {
          if (this.isOpened) {
            for (var i = 0; i < this.path.length; i++) {
              this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * i)));
            }
          } else {
            for (var i = 0; i < this.path.length; i++) {
              this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * (this.path.length - i - 1))));
            }
          }
        }
        renderLoop() {
          this.render();
          if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
            requestAnimationFrame(() => {
              this.renderLoop();
            });
          }
          else {
            this.isAnimating = false;
          }
        }
      }

      elmHamburger = document.querySelector('.hamburger');
      gNavItems = document.querySelectorAll('.global-menu__item');
      elmOverlay = document.querySelector('.shape-overlays');

      overlay = new ShapeOverlays(elmOverlay);      
    
      elmHamburger.addEventListener('click', () => {
        if (overlay.isAnimating) {
          return false;
        }
        overlay.toggle();
        if (overlay.isOpened === true) {
          elmHamburger.classList.add('is-opened-navi');
          for (var i = 0; i < gNavItems.length; i++) {
            gNavItems[i].classList.add('is-opened');
          }
        }else{
          elmHamburger.classList.remove('is-opened-navi');
          for(var i = 0; i < gNavItems.length; i++){
          gNavItems[i].classList.remove('is-opened');
        }
        }
      });

      if(sessionStorage.getItem("auth") != undefined){
        document.getElementById("loginItem").style.display = "none";
        document.getElementById("signupItem").style.display = "none";

        document.getElementById("logoutItem").style.display = "block";
        document.getElementById("iconButton").style.display = "block";
      }
      
      var logout = document.getElementById("logoutItem");
      
      logout.onclick = () => {
        logoutUser();
      }

      function logoutUser(){
        var request = require('request');
        var options = {
            'method': 'POST',
            'url': 'https://enantra.org/api/user/logout',
            'headers': {
                'Content-Type': 'application/x-www-form-urlencoded',
                'auth': sessionStorage.getItem("auth")
            }
        };
        request(options, function (error) { 
            if (error){
                console.log(error);
            }else{
              document.getElementById("loginItem").style.display = "block";
              document.getElementById("signupItem").style.display = "block";
      
              document.getElementById("logoutItem").style.display = "none";
              document.getElementById("iconButton").style.display = "none";
              sessionStorage.removeItem("auth");
            }
        });
      }

      document.getElementById("directlink").onclick = () => {
        window.location.href = "https://www.thecollegefever.com/events/enantra-entrepreneueship-mantra"
      }

    }

    closeMenu = () => {
        overlay.toggle();
        elmHamburger.classList.remove('is-opened-navi');
        for(var i = 0; i < gNavItems.length; i++){
          gNavItems[i].classList.remove('is-opened');
        }
    }

    render(){
          const buttonStyle = {
            padding: "10px",
            backgroundColor: "#cb0301",
            border: "none",
            outline: "none",
            width: "wrap",
            color: "white",
            borderRadius: "30px",
            fontSize: "calc(2vw + 1vh + .5vmin)",
            textAlign: "center"
          };
          const positionButton = {
            display: "block",
            position: "relative",
            zIndex: "100"
          }
            return (
            <div className="demo-1">
              
            <div class="main-menu">
            <Avatar/>
				    <div className="hamburger js-hover">
					    <div className="hamburger__line hamburger__line--01">
						    <div className="hamburger__line-in hamburger__line-in--01"></div>
					    </div>
					    <div className="hamburger__line hamburger__line--02">
						    <div className="hamburger__line-in hamburger__line-in--02"></div>
					    </div>
					    <div className="hamburger__line hamburger__line--03">
						    <div className="hamburger__line-in hamburger__line-in--03"></div>
					    </div>
					    <div className="hamburger__line hamburger__line--cross01">
						    <div className="hamburger__line-in hamburger__line-in--cross01"></div>
					    </div>
					    <div className="hamburger__line hamburger__line--cross02">
						    <div className="hamburger__line-in hamburger__line-in--cross02"></div>
					    </div>
				    </div>
              <Router> 
                <div class="global-menu">
                  <div class="menu__items">
					        <div class="global-menu__wrap">
						              <Link to='/' onClick={() => {this.closeMenu(); this.props.handleMenuClick('Home');}} class="menu-anchor global-menu__item global-menu__item--demo-1">Home</Link>
                          <Link to='/about' onClick={() => {this.closeMenu(); this.props.handleMenuClick('About');}} class="menu-anchor global-menu__item global-menu__item--demo-1">About</Link>
						              <Link to='/events' onClick={() => {this.closeMenu(); this.props.handleMenuClick('Events')}} class="menu-anchor global-menu__item global-menu__item--demo-1">Events</Link>
						              <Link to='/flagships' onClick={() => {this.closeMenu(); this.props.handleMenuClick('Flagships')}} class="menu-anchor global-menu__item global-menu__item--demo-1">Flagships</Link>
						              <Link to='/workshops' onClick={() => {this.closeMenu(); this.props.handleMenuClick('Workshops')}} class="menu-anchor global-menu__item global-menu__item--demo-1">Workshops</Link>
                          <Link to='/attractions' onClick={() => {this.closeMenu(); this.props.handleMenuClick('Attractions')}} class="menu-anchor global-menu__item global-menu__item--demo-1">Attractions</Link>
                  </div>
                  <div class="global-menu__wrap">
						              <Link to='/login' onClick={() => {this.closeMenu(); this.props.handleMenuClick('Login')}}class="menu-anchor global-menu__item global-menu__item--demo-1" id="loginItem">Login</Link>
						              <Link to='/signup' onClick={() => {this.closeMenu(); this.props.handleMenuClick('Signup')}}class="menu-anchor global-menu__item global-menu__item--demo-1" id="signupItem">Sign Up</Link>
                          <Link to='/logout' onClick={() => {this.closeMenu(); }} className="menu-anchor global-menu__item global-menu__item--demo-1" id="logoutItem" style={{display: "none"}}>Logout</Link>
						              <Link to='/accommodation' onClick={() => {this.closeMenu(); this.props.handleMenuClick('Accommodation')}} class="menu-anchor global-menu__item global-menu__item--demo-1">Accommodation</Link>
						              <Link to='/team' onClick={() => {this.closeMenu(); this.props.handleMenuClick('Team')}} class="menu-anchor global-menu__item global-menu__item--demo-1">The Team</Link>
                          <Link to='/sponsors' onClick={() => {this.closeMenu(); this.props.handleMenuClick('Sponsors')}} class="menu-anchor global-menu__item global-menu__item--demo-1">Sponsors</Link>
                          <Link to='/contactus' onClick={() => {this.closeMenu(); this.props.handleMenuClick('ContactUs')}} class="menu-anchor global-menu__item global-menu__item--demo-1">Contact Us</Link>
			            </div>
                  </div>
                  <br/>
                  <div style={positionButton}>
                  <button id="directlink" style={buttonStyle} class="global-menu__item" to="">Quick link - Payment</button>
                  </div>
				        </div>
              </Router>
			            <svg className="shape-overlays" viewBox="0 0 100 100" preserveAspectRatio="none">
					              <path className="shape-overlays__path"></path>
					              <path className="shape-overlays__path"></path>
                        <path className="shape-overlays__path"></path>
			            </svg>
              </div>
              </div>
            )
    }
}

export default Menu;