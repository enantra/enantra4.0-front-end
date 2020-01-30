import React, { Component } from 'react';
import '../css/SignupValidate.css';
import '../css/Signup.css';
import Tween from '../js/vendor/TweenMax.min.js';


class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn : false
        }
    }

    setLoggedIn = () => {

    }
    componentDidMount(){

        this.props.renderEvent(true);

        var context = this.props;
        
        const lineEq = (y2, y1, x2, x1, currentVal) => {
            var m = (y2 - y1) / (x2 - x1), b = y1 - m * x1;
            return m * currentVal + b;
        };
        
        const validateEmail = (email) => {
            var re = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            return re.test(String(email).toLowerCase());
        }
        
        const form = document.querySelector('.form-login');
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

        submitBttn.onclick = () => {

            var validate = 0;
            requiredElems.forEach((el) => {
                if ( !el.value || el.type === 'email' && !validateEmail(el.value) ) {
                    validate = 0;
                }else{
                    validate = 1;
                }
             } );

             if(validate==1){
                loginUser({email: requiredElems[0].value,
                    password: requiredElems[1].value,
                });  
             }else{
                 alert("Fill all Fields to Continue!");
             }
        }

        function loginUser({email, password}){
            var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
            var theUrl = "https://enantra.org/api/login";
            xmlhttp.open("POST", theUrl, true);
            xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

            xmlhttp.onreadystatechange = function() { // Call a function when the state changes.
                if(this.readyState === XMLHttpRequest.DONE && (this.status === 421 || this.status === 420)){
                    //alert(JSON.parse(this.responseText).message);
                    document.getElementById("error").innerHTML = JSON.parse(this.responseText).message
                }
                else if(this.readyState === XMLHttpRequest.DONE && this.status === 500){
                    var responseJSON = JSON.parse(this.responseText);
                    alert(responseJSON.message);
                    console.log(this.responseText);
                }
                else if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                    // Request finished. Do processing here.
                    console.log(this.responseText);
                    //console.log(JSON.parse(this.responseText).response);
                    sessionStorage.setItem("auth", JSON.parse(this.responseText).response);
                    console.log(sessionStorage.getItem("auth"), "auth");

                    window.open("landing", "_self");
                }
            }

            xmlhttp.send(JSON.stringify({"user":{
                "email": email,
                "password": password}}));
        }

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
               <form class="form-login" action="" method="">
                       <div class="form__item form__item--full">
                           <label class="form__label" for="email">Email Address</label>
                           <input class="form__input" type="email" name="email" id="email" required />
                           <div class="form__error"></div>
                       </div>
                       <div class="form__item form__item--full">
                           <label class="form__label" for="location">Password</label>
                           <input class="form__input" type="password" name="password" id="password" required />
                           <div class="form__error"></div>
                       </div>
                       <p id="error"></p>
                       <div class="form__item form__item--full form__item--actions">
                       <button class="form__button" type="button">Login</button>
                       </div>
                   </form>
               </div>
           </div>    
        )
    }
}

export default Login;