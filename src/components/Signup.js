import React, { Component } from 'react';
import '../css/Signup.css';
import '../css/SignupValidate.css';
import Tween from '../js/vendor/TweenMax.min.js';


class Signup extends Component {

    componentDidMount(){

        this.props.renderEvent(true);
        
        const lineEq = (y2, y1, x2, x1, currentVal) => {
            var m = (y2 - y1) / (x2 - x1), b = y1 - m * x1;
            return m * currentVal + b;
        };
        const validateEmail = (email) => {
            var re = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            return re.test(String(email).toLowerCase());
        }
        
        const form = document.querySelector('.form');
        const submitBttn = form.querySelector('.form__button');
        const requiredElems = Array.from(form.querySelectorAll('input[required]'));
        
        const distanceThreshold = {min: 0, max: 75};
        const opacityInterval = {from: 0, to: 1};
        
        class Nearby {
            constructor(el, options) {
                this.DOM = {el: el};
                this.options = options;
                this.init();
            }
            init() { 
                this.mousemoveFn = (ev) => requestAnimationFrame(() => {
                    const mousepos = getMousePos(ev);
                    const docScrolls = {left : body.scrollLeft + document.documentElement.scrollLeft, top : body.scrollTop + document.documentElement.scrollTop};
                    const elRect = this.DOM.el.getBoundingClientRect();
                    const elCoords = {
                        x1: elRect.left + docScrolls.left, x2: elRect.width + elRect.left + docScrolls.left,
                        y1: elRect.top + docScrolls.top, y2: elRect.height + elRect.top + docScrolls.top
                    };
                    const closestPoint = {x: mousepos.x, y: mousepos.y};
                    
                    if ( mousepos.x < elCoords.x1 ) {
                        closestPoint.x = elCoords.x1;
                    }
                    else if ( mousepos.x > elCoords.x2 ) {
                        closestPoint.x = elCoords.x2;
                    }
                    if ( mousepos.y < elCoords.y1 ) {
                        closestPoint.y = elCoords.y1;
                    }
                    else if ( mousepos.y > elCoords.y2 ) {
                        closestPoint.y = elCoords.y2;
                    }
                    if ( this.options.onProgress ) {
                        this.options.onProgress(distancePoints(mousepos.x, mousepos.y, closestPoint.x, closestPoint.y))
                    }
                });
    
                window.addEventListener('mousemove', this.mousemoveFn);
            }
        }

        setTimeout(() => document.body.classList.add('render'), 60);
        const navdemos = Array.from(document.querySelectorAll('nav.demos > .demo'));
        const total = navdemos.length;
        const current = navdemos.findIndex(el => el.classList.contains('demo--current'));
        const navigate = (linkEl) => {
            document.body.classList.remove('render');
            document.body.addEventListener('transitionend', () => window.location = linkEl.href);
        };
        navdemos.forEach(link => link.addEventListener('click', (ev) => {
            ev.preventDefault();
            navigate(ev.target);
        }));
        
        new Nearby(submitBttn, {
            onProgress: (distance) => {
                const o = lineEq(opacityInterval.from, opacityInterval.to, distanceThreshold.max, distanceThreshold.min, distance);
        
                requiredElems.forEach((el) => {
                    if ( !el.value || el.type === 'email' && !validateEmail(el.value) ) {
                        Tween.inputErrorEl = el.nextElementSibling;
                        Tween.TweenMax.to(Tween.inputErrorEl, .3, {
                            opacity: Math.max(o,opacityInterval.from)
                        });
                    }
                });
            }
        });
            const body = document.querySelector('.signup');
            const distancePoints = (x1, y1, x2, y2) => Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
    
            const getMousePos = (e) => {
                var posx = 0, posy = 0;
                if (!e) var e = window.event;
                if (e.pageX || e.pageY) 	{
                    posx = e.pageX;
                    posy = e.pageY;
                }
                else if (e.clientX || e.clientY) 	{
                    posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
                    posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
                }
                return { x : posx, y : posy }
            };

            window.Nearby = Nearby; 
    }

    render(){
     return(
       <div class="signup signupbackground">    
         <div class="content-signup">    
            <form class="form" action="" method="">
					<div class="form__item">
						<label class="form__label" for="firstname">Name</label>
						<input class="form__input" type="text" name="name" id="name" required />
						<div class="form__error"></div>
					</div>
					<div class="form__item">
						<label class="form__label" for="lastname">Gender</label>
						<input class="form__input" type="text" name="gender" id="gender" required />
						<div class="form__error"></div>
					</div>
					<div class="form__item">
						<label class="form__label" for="email">Email Address</label>
						<input class="form__input" type="email" name="email" id="email" required />
						<div class="form__error"></div>
					</div>
					<div class="form__item">
						<label class="form__label" for="phone">Mobile</label>
						<input class="form__input" type="tel" name="mobile" id="mobile" required />
						<div class="form__error"></div>
					</div>
					<div class="form__item">
						<label class="form__label" for="college">College</label>
						<input class="form__input" type="text" name="college" id="college" required />
						<div class="form__error"></div>
					</div>
					<div class="form__item">
						<label class="form__label" for="category">Department</label>
						<input class="form__input" type="text" name="department" id="department" required />
						<div class="form__error"></div>
					</div>
					<div class="form__item">
						<label class="form__label" for="location">Password</label>
						<input class="form__input" type="password" name="password" id="password" required />
						<div class="form__error"></div>
					</div>
					<div class="form__item">
						<label class="form__label" for="location">Confirm Password</label>
						<input class="form__input" type="password" name="confirmpassword" id="confirmpassword" required />
						<div class="form__error"></div>
					</div>
					<div class="form__item form__item--full form__item--actions">
						<input class="form__button" type="submit" name="register" value="Register" />
					</div>
	        	</form>
		    </div>
        </div>    
       )    
    }
}

export default Signup;