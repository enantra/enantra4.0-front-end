import React, { Component } from 'react';
import '../css/Workshops.css';
import Tween from '../js/vendor/TweenMax.min.js';
import charming from '../js/vendor/charming.min.js';
import imagesLoaded from '../js/vendor/imagesloaded.pkgd.min.js';
import Masonry from '../js//vendor/masonry.pkgd.min.js';
import firstworkshop from '../img/btrivia.jpg';
import secondworkshop from '../img/bm.jpg';
import thirdworkshop from '../img/coding.jpg';
import fourthworkshop from '../img/efac.jpg';

class Workshops extends Component{
    componentDidMount(){

        {
            // Calculates the offsetTop or offsetLeft of an element relative to the viewport 
            // (not counting with any transforms the element might have)
            const getOffset = (elem, axis) => {
                let offset = 0;
                const type = axis === 'top' ? 'offsetTop' : 'offsetLeft';
                do {
                    if ( !isNaN( elem[type] ) )
                    {
                        offset += elem[type];
                    }
                } while( elem = elem.offsetParent );
                return offset;
            }
            // Calculates the distance between two points.
            const distance = (p1,p2) => Math.hypot(p2.x-p1.x, p2.y-p1.y);

            const body = document.querySelector('.workshops');
            // Generates a random number.
            const randNumber = (min,max) => Math.floor(Math.random() * (max - min + 1)) + min;
            // Gets the mouse position. From http://www.quirksmode.org/js/events_properties.html#position
            const getMousePos = (e) => {
                let posx = 0;
                let posy = 0;
                if (!e) e = window.event;
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
            // Returns the rotation angle of an element.
            const getAngle = (el) => {
                const st = window.getComputedStyle(el, null);
                const tr = st.getPropertyValue('transform');
                let values = tr.split('(')[1];
                values = values.split(')')[0];
                values = values.split(',');
                return Math.round(Math.asin(values[1]) * (180/Math.PI));
            };
            // Scroll control functions. Taken from https://stackoverflow.com/a/4770179.
            const keys = {37: 1, 38: 1, 39: 1, 40: 1};
            const preventDefault = (e) => {
                e = e || window.event;
                if (e.preventDefault)
                    e.preventDefault();
                e.returnValue = false;  
            }
            const preventDefaultForScrollKeys = (e) => {
                if (keys[e.keyCode]) {
                    preventDefault(e);
                    return false;
                }
            }
            const disableScroll = () => {
                if (window.addEventListener) // older FF
                    window.addEventListener('DOMMouseScroll', preventDefault, false);
                window.onwheel = preventDefault; // modern standard
                window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
                window.ontouchmove  = preventDefault; // mobile
                document.onkeydown  = preventDefaultForScrollKeys;
            }
            const enableScroll = () => {
                if (window.removeEventListener)
                    window.removeEventListener('DOMMouseScroll', preventDefault, false);
                window.onmousewheel = document.onmousewheel = null; 
                window.onwheel = null; 
                window.ontouchmove = null;  
                document.onkeydown = null;  
            }
            
            // The GridItem class.
            class GridItem {
                constructor(el) {
                    this.DOM = {el: el};
                    // The rectangle element around the image.
                    this.DOM.bg = this.DOM.el.querySelector('.grid__item-bg-workshops');
                    // The following DOM elements are elements that will move/tilt when hovering the item.
                    this.DOM.tilt = {};
                    // The image.
                    this.DOM.imgWrap = this.DOM.el.querySelector('.grid__item-wrap-workshops');
                    this.DOM.tilt.img = this.DOM.imgWrap.querySelector('img');
                    // The title (vertical text).
                    this.DOM.tilt.title = this.DOM.el.querySelector('.grid__item-title-workshops');
                    // The number (horizontal letter/number code).
                    this.DOM.tilt.number = this.DOM.el.querySelector('.grid__item-number-workshops');
                    // Split the number into spans using charming.js
                    charming(this.DOM.tilt.number);
                    // And access the spans/letters.
                    this.DOM.numberLetters = this.DOM.tilt.number.querySelectorAll('span');
                    // Configuration for when moving/tilting the elements on hover.
                    this.tiltconfig = {   
                        title: {translation : {x: [-8,8], y: [4,-4]}},
                        number: {translation : {x: [-5,5], y: [-10,10]}},
                        img: {translation : {x: [-15,15], y: [-10,10]}}
                    };
                    // Get the rotation angle value of the image element.
                    // This will be used to rotate the DOM.bg to the same value when expanding/opening the item.
                    this.angle = getAngle(this.DOM.tilt.img);
                    // Init/Bind events.
                    this.initEvents();
                }
                initEvents() {
                    /**
                     * Mouseenter: 
                     * - Scale up the DOM.bg element.
                     * - Animate the number letters.
                     * 
                     * Mousemove: 
                     * - tilt - move both the number, image and title elements. 
                     * 
                     * 
                     * Mouseleave: 
                     * - Scale down the DOM.bg element.
                     * - Animate the number letters.
                     */
                    this.toggleAnimationOnHover = (type) => {
                        // Scale up the bg element.
                        Tween.TweenMax.to(this.DOM.bg, 1, {
                            ease: Tween.Expo.easeOut,
                            scale: type === 'mouseenter' ? 1.15 : 1
                        });
                        // Animate the number letters.
                        this.DOM.numberLetters.forEach((letter,pos) => {
                            Tween.TweenMax.to(letter, .2, {
                                ease: Tween.Quad.easeIn,
                                delay: pos*.1,
                                y: type === 'mouseenter' ? '-50%' : '50%',
                                opacity: 0,
                                onComplete: () => {
                                    Tween.TweenMax.to(letter, type === 'mouseenter' ? 0.6 : 1, {
                                        ease: type === 'mouseenter' ? Tween.Expo.easeOut : Tween.Elastic.easeOut.config(1,0.4),
                                        startAt: {y: type === 'mouseenter' ? '70%' : '-70%', opacity: 0},
                                        y: '0%',
                                        opacity: 1
                                    });
                                }
                            });
                        });
                    };
                    this.mouseenterFn = (ev) => {
                        if ( !allowTilt ) return;
                        this.toggleAnimationOnHover(ev.type);
                    };
                    this.mousemoveFn = (ev) => requestAnimationFrame(() => {
                        if ( !allowTilt ) return;
                        this.tilt(ev);
                    });
                    this.mouseleaveFn = (ev) => {
                        if ( !allowTilt ) return;
                        this.resetTilt();
                        this.toggleAnimationOnHover(ev.type);
                    };
                    this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
                    this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
                    this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
                }
                tilt(ev) {
                    // Get mouse position.
                    const mousepos = getMousePos(ev);
                    // Document scrolls.
                    const docScrolls = {left : body.scrollLeft + docEl.scrollLeft, top : body.scrollTop + docEl.scrollTop};
                    const bounds = this.DOM.el.getBoundingClientRect();
                    // Mouse position relative to the main element (this.DOM.el).
                    const relmousepos = {
                        x : mousepos.x - bounds.left - docScrolls.left, 
                        y : mousepos.y - bounds.top - docScrolls.top 
                    };
                    // Movement settings for the tilt elements.
                    for (let key in this.DOM.tilt) {
                        let t = this.tiltconfig[key].translation;
                        // Animate each of the elements..
                        Tween.TweenMax.to(this.DOM.tilt[key], 2, {
                            ease: Tween.Expo.easeOut,
                            x: (t.x[1]-t.x[0])/bounds.width*relmousepos.x + t.x[0],
                            y: (t.y[1]-t.y[0])/bounds.height*relmousepos.y + t.y[0]
                        });
                    }
                }
                resetTilt() {
                    for (let key in this.DOM.tilt ) {
                        Tween.TweenMax.to(this.DOM.tilt[key], 2, {
                            ease: Tween.Elastic.easeOut.config(1,0.4),
                            x: 0,
                            y: 0
                        });
                    }
                }
                /**
                 * Hides the item:
                 * - Scales down and fades out the image and bg elements.
                 * - Moves down and fades out the title and number elements.
                 */
                hide(withAnimation = true) { this.toggle(withAnimation,false); }
                /**
                 * Resets.
                 */
                show(withAnimation = true) { this.toggle(withAnimation); }
                toggle(withAnimation, show = true) {
                    Tween.TweenMax.to(this.DOM.tilt.img, withAnimation ? 0.8 : 0, {
                        ease: Tween.Expo.easeInOut,
                        delay: !withAnimation ? 0 : show ? 0.15 : 0,
                        scale: show ? 1 : 0,
                        opacity: show ? 1 : 0,
                    });
                    Tween.TweenMax.to(this.DOM.bg, withAnimation ? 0.8 : 0, {
                        ease: Tween.Expo.easeInOut,
                        delay: !withAnimation ? 0 : show ? 0 : 0.15,
                        scale: show ? 1 : 0,
                        opacity: show ? 1 : 0
                    });
                    this.toggleTexts(show ? 0.45 : 0, withAnimation, show);
                }
                // hides the texts (translate down and fade out).
                hideTexts(delay = 0, withAnimation = true) { this.toggleTexts(delay, withAnimation, false); }
                // shows the texts (reset transforms and fade in).
                showTexts(delay = 0, withAnimation = true) { this.toggleTexts(delay, withAnimation); }
                toggleTexts(delay, withAnimation, show = true) {
                    Tween.TweenMax.to([this.DOM.tilt.title, this.DOM.tilt.number], !withAnimation ? 0 : show ? 1 : 0.5, {
                        ease: show ? Tween.Expo.easeOut : Tween.Quart.easeIn,
                        delay: !withAnimation ? 0 : delay,
                        y: show ? 0 : 20,
                        opacity: show ? 1 : 0
                    });
                }
            }
        
            // The Content class. Represents one content item per grid item.
            class Content {
                constructor(el) {
                    this.DOM = {el: el};
                    // The content elements: image, title, subtitle and text.
                    this.DOM.img = this.DOM.el.querySelector('.content__item-img-workshops');
                    this.DOM.title = this.DOM.el.querySelector('.content__item-title-workshops');
                    this.DOM.subtitle = this.DOM.el.querySelector('.content__item-subtitle-workshops');
                    this.DOM.text = this.DOM.el.querySelector('.content__item-text-workshops');
                    // Split the title into spans using charming.js
                    charming(this.DOM.title);
                    // And access the spans/letters.
                    this.DOM.titleLetters = this.DOM.title.querySelectorAll('span');
                    this.titleLettersTotal = this.DOM.titleLetters.length;
                }
                /**
                 * Show/Hide the content elements (title letters, the subtitle and the text).
                 */
                show(delay = 0, withAnimation = true) { this.toggle(delay, withAnimation); }
                hide(delay = 0, withAnimation = true) { this.toggle(delay, withAnimation, false); }
                toggle(delay, withAnimation, show = true) {
                    setTimeout(() => {
                        
                        this.DOM.titleLetters.forEach((letter,pos) => {
                            Tween.TweenMax.to(letter, !withAnimation ? 0 : show ? .6 : .3, {
                                ease: show ? Tween.Back.easeOut : Tween.Quart.easeIn,
                                delay: !withAnimation ? 0 : show ? pos*.05 : (this.titleLettersTotal-pos-1)*.04,
                                startAt: show ? {y: '50%', opacity: 0} : null,
                                y: show ? '0%' : '50%',
                                opacity: show ? 1 : 0
                            });
                        });
                        this.DOM.subtitle.style.opacity = show ? 1 : 0;
                        this.DOM.text.style.opacity = show ? 1 : 0;
        
                    }, withAnimation ? delay*1000 : 0 );
                }
            }
        
            // The Grid class.
            class Grid {
                constructor(el) {
                    this.DOM = {el: el};
                    // The grid wrap.
                    this.DOM.gridWrap = this.DOM.el.parentNode;
                    // The grid items.
                    this.items = [];
                    Array.from(this.DOM.el.querySelectorAll('.grid__item-workshops')).forEach(itemEl => this.items.push(new GridItem(itemEl)));
                    // The total number of items.
                    this.itemsTotal = this.items.length;
                    // The content items.
                    this.contents = [];
                    Array.from(document.querySelectorAll('.content-workshops > .content__item-workshops')).forEach(contentEl => this.contents.push(new Content(contentEl)));
                    // Back control and scroll indicator (elements shown when the item´s content is open).
                    this.DOM.closeCtrl = document.querySelector('.content__close-workshops');
                    this.DOM.scrollIndicator = document.querySelector('.content__indicator-workshops');
                    // The open grid item.
                    this.current = -1;
                    // Init/Bind events.
                    this.initEvents();
                }
                initEvents() {
                    // Clicking a grid item hides all the other grid items (ordered by proximity to the clicked one) 
                    // and expands/opens the clicked one.
                    for (let item of this.items) {
                        item.DOM.el.addEventListener('click', (ev) => {
                            ev.preventDefault();
                            this.openItem(item);
                        });
                    }
                    // Close item.
                    this.DOM.closeCtrl.addEventListener('click', () => this.closeItem());
                    // (Incomplete! For now: if theres an open item, then show back the grid.
                    this.resizeFn = () => {
                        if (this.current === -1 || winsize.width === window.innerWidth) return;
                        this.closeItem(false);
                    };
                    window.addEventListener('resize', this.resizeFn);
                }
                getSizePosition(el, scrolls = true) {
                    const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
                    const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
                    return {
                        width: el.offsetWidth,
                        height: el.offsetHeight,
                        left: scrolls ? getOffset(el, 'left')-scrollLeft : getOffset(el, 'left'),
                        top: scrolls ? getOffset(el, 'top')-scrollTop : getOffset(el, 'top')
                    };
                }
                openItem(item) {
                    if ( this.isAnimating ) return;
                    this.isAnimating = true;
                    // Get the current scroll position.
                    this.scrollPos = window.scrollY;
                    // Disable page scrolling.
                    disableScroll();
                    // Disable tilt.
                    allowTilt = false;
                    // Set the current value (index of the clicked item).
                    this.current = this.items.indexOf(item);
                    // Hide all the grid items except the one we want to open.
                    this.hideAllItems(item);
                    // Also hide the item texts.
                    item.hideTexts();
                    // Set the item´s z-index to a high value so it overlaps any other grid item.
                    item.DOM.el.style.zIndex = 1000;
                    // Get the "grid__item-bg" width and height and set it explicitly, 
                    // also set its top and left respective to the page.
                    const itemDim = this.getSizePosition(item.DOM.el);
                    item.DOM.bg.style.width = `${itemDim.width}px`;
                    item.DOM.bg.style.height = `${itemDim.height}px`;
                    item.DOM.bg.style.left = `${itemDim.left}px`;
                    item.DOM.bg.style.top = `${itemDim.top}px`;
                    // Set it to position fixed.
                    item.DOM.bg.style.position = 'fixed';
                    // Calculate the viewport diagonal. We will need to take this in consideration when scaling up the item´s bg element.
                    const d = Math.hypot(winsize.width, winsize.height);
                    // Scale up the item´s bg element.
                    Tween.TweenMax.to(item.DOM.bg, 1.2, {
                        ease: Tween.Expo.easeInOut,
                        delay: 0.4,
                        x: winsize.width/2 - (itemDim.left+itemDim.width/2),
                        y: winsize.height/2 - (itemDim.top+itemDim.height/2),
                        scaleX: d/itemDim.width,
                        scaleY: d/itemDim.height,
                        rotation: -1*item.angle*2
                    });
                    // Get the content element respective to this grid item.
                    const contentEl = this.contents[this.current];
                    // Set it to current.
                    contentEl.DOM.el.classList.add('content__item--current-workshops');
                    // Calculate the item´s image and content´s image sizes and positions. 
                    // We need this so we can scale up and translate the item´s image to the same size and position of the content´s image.
                    const imgDim = this.getSizePosition(item.DOM.imgWrap);
                    const contentImgDim = this.getSizePosition(contentEl.DOM.img, false);
                    // Show the back control and scroll indicator and all the item´s content elements (1 second delay).
                    this.showContentElems(contentEl, 1);
                    // Animate the item´s image.
                    Tween.TweenMax.to(item.DOM.tilt.img, 1.2, {
                        ease: Tween.Expo.easeInOut,
                        delay: 0.55,
                        scaleX: contentImgDim.width/imgDim.width,
                        scaleY: contentImgDim.height/imgDim.height,
                        x: (contentImgDim.left+contentImgDim.width/2)-(imgDim.left+imgDim.width/2),
                        y: (contentImgDim.top+contentImgDim.height/2)-(imgDim.top+imgDim.height/2),
                        rotation: 0,
                        onComplete: () => {
                            // Hide the item´s image and show the content´s image. Should both be overlapping.
                            item.DOM.tilt.img.style.opacity = 0;
                            contentEl.DOM.img.style.visibility = 'visible';
                            // Set the main content wrapper to absolute so it´s position at the top.
                            contentEl.DOM.el.parentNode.style.position = 'absolute';
                            // Hiding the grid scroll.
                            this.DOM.gridWrap.classList.add('grid-wrap--hidden-workshops');
                            // Scroll up the page.
                            window.scrollTo(0, 0);
                            // Enable page scrolling.
                            enableScroll();
                            this.isAnimating = false;
                        }
                    });
                }
                closeItem(withAnimation = true) {
                    if ( this.isAnimating ) return;
                    this.isAnimating = true;
                    // Get the content element respective to this grid item.
                    const contentEl = this.contents[this.current];
                    // Scroll to the previous scroll position before opening the item.
                    window.scrollTo(0, this.scrollPos);
                    contentEl.DOM.el.parentNode.style.position = 'fixed';
                    // Disable page scrolling.
                    disableScroll();
                    // Showing the grid scroll.
                    this.DOM.gridWrap.classList.remove('grid-wrap--hidden-workshops');
                    // The item that is open.
                    const item = this.items[this.current];
                    // Hide the back control and scroll indicator and all the item´s content elements.
                    this.hideContentElems(contentEl, 0, withAnimation);
                    // Set the grid´s image back to visible and hide the content´s one.
                    item.DOM.tilt.img.style.opacity = 1;
                    contentEl.DOM.img.style.visibility = 'hidden';
                    // Animate the grid´s image back to the grid position.
                    Tween.TweenMax.to(item.DOM.tilt.img, withAnimation ? 1.2 : 0, {
                        ease: Tween.Expo.easeInOut,
                        scaleX: 1,
                        scaleY: 1,
                        x: 0,
                        y: 0,
                        rotation: item.angle*2
                    });
                    // And also the bg element.
                    Tween.TweenMax.to(item.DOM.bg, withAnimation ? 1.2 : 0, {
                        ease: Tween.Expo.easeInOut,
                        delay: 0.15,
                        x: 0,
                        y: 0,
                        scaleX: 1,
                        scaleY: 1,
                        rotation: 0,
                        onComplete: () => {
                            contentEl.DOM.el.classList.remove('content__item--current-workshops');
                            item.DOM.bg.style.position = 'absolute';
                            item.DOM.bg.style.left = '0px';
                            item.DOM.bg.style.top = '0px';
                            this.current = -1;
                            allowTilt = true;
                            item.DOM.el.style.zIndex = 0;
                            enableScroll();
                            this.isAnimating = false;
                        }
                    });
                    // Show all the grid items except the one we want to close.
                    this.showAllItems(item, withAnimation);
                    // Also show the item texts. (1s delay)
                    item.showTexts(1, withAnimation);
                }
                /**
                 * Toggle the content elements.
                 */
                showContentElems(contentEl, delay = 0, withAnimation = true) { this.toggleContentElems(contentEl, delay, withAnimation); }
                hideContentElems(contentEl, delay = 0, withAnimation = true) { this.toggleContentElems(contentEl, delay, withAnimation, false); }
                toggleContentElems(contentEl, delay, withAnimation, show = true) {
                    // toggle the back control and scroll indicator.
                    Tween.TweenMax.to([this.DOM.closeCtrl, this.DOM.scrollIndicator], withAnimation ? 0.8 : 0, {
                        ease: show ? Tween.Expo.easeOut : Tween.Expo.easeIn,
                        delay: withAnimation ? delay : 0,
                        startAt: show ? {y: 60} : null,
                        y: show ? 0 : 60,
                        opacity: show ? 1 : 0
                    });
                    if ( show ) {
                        contentEl.show(delay, withAnimation);
                    }
                    else {
                        contentEl.hide(delay, withAnimation);
                    }
                }
                // Based on https://stackoverflow.com/q/25481717
                sortByDist(refPoint, itemsArray) {
                    let distancePairs = [];
                    let output = [];
            
                    for(let i in itemsArray) {
                        const rect = itemsArray[i].DOM.el.getBoundingClientRect();
                        distancePairs.push([distance(refPoint,{x:rect.left+rect.width/2, y:rect.top+rect.height/2}), i]);
                    }
            
                    distancePairs.sort((a,b) => a[0]-b[0]);
            
                    for(let p in distancePairs) {
                        const pair = distancePairs[p];
                        output.push(itemsArray[pair[1]]);
                    }
            
                    return output;
                }
                /**
                 * Shows/Hides all the grid items except the "exclude" item.
                 * The items will be sorted based on the distance to the exclude item.
                 */
                showAllItems(exclude, withAnimation = true) { this.toggleAllItems(exclude, withAnimation); }
                hideAllItems(exclude, withAnimation = true) { this.toggleAllItems(exclude, withAnimation, false); }
                toggleAllItems(exclude, withAnimation, show = true) {
                    if ( !withAnimation ) {
                        this.items.filter(item => item != exclude).forEach((item, pos) => item[show ? 'show' : 'hide'](withAnimation));
                    }
                    else {
                        const refrect = exclude.DOM.el.getBoundingClientRect(); 
                        const refPoint = {
                            x: refrect.left+refrect.width/2, 
                            y: refrect.top+refrect.height/2
                        };
                        this.sortByDist(refPoint, this.items.filter(item => item != exclude))
                            .forEach((item, pos) => setTimeout(() => item[show ? 'show' : 'hide'](), show ? 300+pos*70 : pos*70));
                    }
                }
            }
        
            // Controls whether the item will have the "tilt" movement on hover (mousemove) or not.
            let allowTilt = true;
            
            // Caching some stuff..
            const docEl = document.documentElement;
            
            // Window sizes.
            let winsize;
            const calcWinsize = () => winsize = {width: window.innerWidth, height: window.innerHeight};
            calcWinsize();
            window.addEventListener('resize', calcWinsize);
        
            // Initialize the Grid.
            const grid = new Grid(document.querySelector('.grid-workshops'));
        
            // Preload images.
            imagesLoaded(document.querySelectorAll('.grid__item-img-workshops'), () => {
                var msnry = new Masonry( grid.DOM.el, {
                    // options
                    itemSelector: '.grid__item-workshops',
                    columnWidth: 260,
                    gutter: 100,
                    fitWidth: true
                });
            });
        }

    }

    render(){

        var expandContent = '<use xlink:href="#icon-caret"></use>';
        
        return(
            <div class="workshops">
			<div class="grid-wrap-workshops">
				<div class="grid-workshops">
					<a href="#" class="workshops-anchor grid__item-workshops">
						<div class="grid__item-bg-workshops"></div>
						<div class="grid__item-wrap-workshops">
							<img class="grid__item-img-workshops" src={firstworkshop} alt="Some image" />
						</div>
						<h3 class="grid__item-title-workshops">Workshops</h3>
						<h4 class="grid__item-number-workshops">Machine Learning</h4>
					</a>
					<a href="#" class="workshops-anchor grid__item-workshops">
						<div class="grid__item-bg-workshops"></div>
						<div class="grid__item-wrap-workshops">
							<img class="grid__item-img-workshops" src={secondworkshop} alt="Some image" />
						</div>
						<h3 class="grid__item-title-workshops">Workshops</h3>
						<h4 class="grid__item-number-workshops">Digital Marketing</h4>
					</a>
					<a href="#" class="workshops-anchor grid__item-workshops">
						<div class="grid__item-bg-workshops"></div>
						<div class="grid__item-wrap-workshops">
							<img class="grid__item-img-workshops" src={thirdworkshop} alt="Some image" />
						</div>
						<h3 class="grid__item-title-workshops">Workshops</h3>
						<h4 class="grid__item-number-workshops">Art of Argumentation</h4>
					</a>
                    <a href="#" class="workshops-anchor grid__item-workshops">
						<div class="grid__item-bg-workshops"></div>
						<div class="grid__item-wrap-workshops">
							<img class="grid__item-img-workshops" src={fourthworkshop} alt="Some image" />
						</div>
						<h3 class="grid__item-title-workshops">Workshops</h3>
						<h4 class="grid__item-number-workshops">Entrepreneurship 101</h4>
					</a>
                    <a href="#" class="workshops-anchor grid__item-workshops">
						<div class="grid__item-bg-workshops"></div>
						<div class="grid__item-wrap-workshops">
							<img class="grid__item-img-workshops" src={firstworkshop} alt="Some image" />
						</div>
						<h3 class="grid__item-title-workshops">Workshops</h3>
						<h4 class="grid__item-number-workshops">Art of money making online</h4>
					</a>
                    <a href="#" class="workshops-anchor grid__item-workshops">
						<div class="grid__item-bg-workshops"></div>
						<div class="grid__item-wrap-workshops">
							<img class="grid__item-img-workshops" src={secondworkshop} alt="Some image" />
						</div>
						<h3 class="grid__item-title-workshops">Workshops</h3>
						<h4 class="grid__item-number-workshops">Bootcamp for Entrepreneurs</h4>
					</a>
                    <a href="#" class="workshops-anchor grid__item-workshops">
						<div class="grid__item-bg-workshops"></div>
						<div class="grid__item-wrap-workshops">
							<img class="grid__item-img-workshops" src={thirdworkshop} alt="Some image" />
						</div>
						<h3 class="grid__item-title-workshops">Workshops</h3>
						<h4 class="grid__item-number-workshops">Internet of Things (IoT)</h4>
					</a>
				</div>
			</div>
			<div class="content-workshops">
				<div class="content__item-workshops">
					<div class="content__item-intro-workshops">
						<img class="content__item-img-workshops" src={firstworkshop} alt="Some image" />
						<h3 class="content__item-title-workshops">Innovians Technologies</h3>
					</div>
					<h3 class="content__item-subtitle-workshops">Workshop on Machine Learning - A One Day Workshop on Machine Learning for Beginners</h3>
					<div class="content__item-text-workshops">
						<p class="workshop-description">
                        Machine learning is a type of artificial intelligence (AI) that provides computers with the ability to learn without being explicitly programmed. Machine learning focuses on the development of computer programs that can change when exposed to new data.<br/><br/>
                        <p class="workshop-titles">Topics to be Covered in Workshop (20% Theory & 80% Hands-On Lab Session)</p>
                        <br/>
                        <ul>
                            <li>Introduction to Machine learning, Introduction to algorithm Design, algorithmic problem solving.</li>
                            <li>Introduction to Python programming and Anaconda navigator.</li>
                            <li>Python Crash course:
                            <ol>
                                <li>Data Types.</li>
                                <li>Compression operators.</li>
                                <li>If, elif and else statement.</li>
                                <li>For, While Loops.</li>
                                <li>Range()</li>
                                <li>List Comprehension.</li>
                                <li>Functions, Lambda Expressions.</li>
                                <li>Map and Filter.</li>
                            </ol>
                            </li>
                            <li>Numpy module for data analysis and Machine Learning.</li>
                            <li>Data Visualization:
                                <ol>
                                    <li>2D plotting with Matplotlib</li>
                                    <li>Advanced data visualization with Seaborn</li>
                                </ol>
                            </li>
                            <li>Exploring Data with Pandas module for Machine learning.</li>
                            <li>Introduction to essentials of Machine learning Algorithm.</li>
                            <li>Project:
                                <ol>
                                    <li>Supervised learning</li>
                                    <li>Unsupervised leaning.</li>
                                </ol>
                            </li>
                        </ul>
                        </p>
                        <p class="workshop-fees">FEES - 500 INR per student - 150 in a batch</p>
					</div>
				</div>
				<div class="content__item-workshops">
					<div class="content__item-intro-workshops">
						<img class="content__item-img-workshops" src={secondworkshop} alt="Some image" />
						<h2 class="content__item-title-workshops">Innovians Technologies</h2>
					</div>
					<h3 class="content__item-subtitle-workshops">Workshop on Digital Marketing - One Day Workshop on Digital Marketing, SEO, SMO, SMM & Online Branding</h3>
					<div class="content__item-text-workshops">
                    <p class="workshop-description">
						<p class="workshop-titles">About Workshop</p><br/>
						<p>Digital marketing (also known as data-driven marketing) is an umbrella term for the marketing of products or services using digital technologies, mainly on the Internet, but also including mobile phones, display advertising, and any other digital medium. A social networking service is an online service, platform, or site that focuses on facilitating the building of social networks or social relations among people who, for example, share interests, activities, backgrounds, or real-life connections.</p><br/>
                        <p class="workshop-titles">What You Will Learn</p><br/>
                        <p>
                            <ul>
                                <li>Digital Marketing & how it is implemented in the corporate world in a systematic, professional and disciplined manner.</li>
                                <li>Secrets and tested proven process in delivering ROI based Sales conversion, Lead enquiry campaigns based on our actual case studies.</li>
                                <li>Importance of Social media contests, Online trends and their impact on your BRAND.</li>
                                <li>Integrating multiple aspects of Social Media and Digital Marketing.</li>
                                <li>ROI process - Guided - How to Convert prospects into leads to customers.</li>
                                <li>Specific queries from your end will be discussed as part of this session too.</li>
                                <li>Impact and power of integrating aspects like Google Adwords, Facebook Ads, LinkedIn Ads, Twitter Advertising, Email marketing, Social post, Blogging and SEO in the real world of Consumer and Brands.</li>
                            </ul>
                        </p>
                        <p class="workshop-titles">Topics to be Covered in Workshop</p><br/>
                        <p>
                            <p class="workshop-subtitles">Session-I: Web Based Technologies</p>
                            <p>
                                <ul>
                                    <li>Understanding different Web Technologies.</li>
                                    <li>Understanding Web Layout.</li>
                                    <li>Basic about HTML Programming.</li>
                                    <li>Creating First Web Page</li>
                                    <li>Type of Script Language</li>
                                    <li>Difference between Server Side & Client Side Scripting</li>
                                    <li>What is Web Server (Hosting) & Domain Name</li>
                                    <li>How to Register Domain Name & buy hosting space.</li>
                                    <li>How to Create Profession Professional Email-Ids like raj@abc.com</li>
                                    <li>Basic about Database (MySQL)</li>
                                </ul>
                            </p>
                        </p><br/>
                        <p>  
                            <p class="workshop-subtitles">Session II-SEO & Analytics Session</p>
                            <p>
                                <ul>
                                    <li>WHOIS Lookup and Domain Name Forecasting</li>
                                    <li>SEO Techniques</li>
                                    <li>SEO Perception
                                        <ol>
                                            <li>User Perspective SEO</li>
                                            <li>Machine Perspective SEO</li>
                                        </ol>
                                    </li>
                                    <li> SEO Preferred URL Architecture</li>
                                    <li>Metadata & SEO Preferred Coding</li>
                                    <li>Website Analytics</li>
                                    <li>Insights & Control of Websites</li>
                                    <li>Website Analysis & Considerations</li>
                                    <li>Tools for Search Engine Optimisation</li>
                                    <li>Alerts</li>
                                </ul>
                            </p>
                        </p>
                        <p>
                            <p class="workshop-subtitles">Session III- Google Apps</p>
                            <p>
                                <ul>
                                    <li>Introduction about Google Apps</li>
                                    <li>How to take benefits of other Google Apps.</li>
                                    <li>Google Analytics</li>
                                    <li>Google Webmaster Tools</li>
                                    <li>Google Adwords</li>
                                </ul>
                            </p>
                        </p>
                        <p>
                            <p class="workshop-subtitles">Session IV- Social Networking Technologies Session</p>
                            <p>
                                <ul>
                                    <li>Facebook Specific Session</li>
                                    <li>Facebook Adwords</li>
                                    <li>LinkedIn Session</li>
                                    <li>Other Emerging Social Networking Technologies</li>
                                </ul>
                            </p>
                        </p>
                        <p>
                            <p class="workshop-subtitles">Session V- Digital Marketing Campaign</p>
                            <p>
                                <ul>
                                    <li>How to design Digital Marketing Campaign</li>
                                    <li>Analyzing Target Audience & Target Platform for Marketing</li>
                                    <li>Social Media Marketing & Search Engine Marketing</li>
                                    <li>How to run contest on Social Media like Facebook ?</li>
                                </ul>
                            </p>
                        </p>
                    </p>
                    <p class="workshop-fees">FEES - 500 INR per student - 150 in a batch</p>
					</div>
				</div>
				<div class="content__item-workshops">
					<div class="content__item-intro-workshops">
						<img class="content__item-img-workshops" src={thirdworkshop} alt="Some image" />
						<h2 class="content__item-title-workshops">Transform into a Thinker</h2>
					</div>
					<h3 class="content__item-subtitle-workshops">Workshop on Critical Thinking and First Principles</h3>
					<div class="content__item-text-workshops">
						<p class="workshop-titles">About Workshop</p><br/>
						<p>
                        The Critical Thinking and First Principles Workshop is designed to transform participants into Thinkers. They understand the key of problem solving, decision making and building a business.
                        Taking our participants bock to 400 BC Greece to meet one of the most influential thinkers of all time, Socrates. Using him we understand the fundamental of Critical thinking and First Principles - asking questions. After understanding the cornerstone of critical thinking, participants are introduced to Arguments • their nature, structure and types • and their use in problem solving. The session ends with participants wrapping their head around the method that has lead to almost every modern invention - The Socratic Method. 
                        This part provides the participants with the understanding of what critical thinking actually is. Going through learning how to question, understating the structure and nature of arguments. The session ends with us bringing the 2 ideas together • Questions and Arguments - to understand the basis of all human innovation • The Socratic Method 
                        </p><br/>
						<p class="workshop-titles">Program Structure</p><br/>
                        <p>
                            <p class="workshop-subtitles">1 : Introduction to Thinking</p>
                            <p>
                                <ul>
                                    <li>Socrates and the thought revolution</li>
                                    <li>Cornerstone of Critical Thinking - Questions</li>
                                </ul>
                            </p>
                            <p class="workshop-subtitles">2 : Arguments</p>
                            <p>
                                <ul>
                                    <li>What is an Argument - Nature, form and structure</li>
                                    <li>Types of Arguments</li>
                                </ul>
                            </p>
                            <p class="workshop-subtitles">3 : The Socratic Method</p>
                            <p>Trolley problems and using critical thinking to make better decisions</p>
                        </p><br/>
                        <p class="workshop-fees">FEES - 500 INR per student - 60 in a batch</p>
					</div>
				</div>
                <div class="content__item-workshops">
					<div class="content__item-intro-workshops">
						<img class="content__item-img-workshops" src={fourthworkshop} alt="Some image" />
						<h2 class="content__item-title-workshops">Entrepreneurship 101</h2>
					</div>
					<h3 class="content__item-subtitle-workshops">Workshop on Entrepreneurship</h3>
					<div class="content__item-text-workshops">
						<p class="workshop-titles">About Workshop</p><br/>
						<p>A 6 hour workshop to out participants on the journey of building a company. Participants would be taken through the fundamentals of building a company - from Product Development, Market Fit to taking it to Scale. Participants get their hands dirty with actually conceptualising a product, vetting it with customer feedback and then going through the steps of taking it to scale.</p><br/>
						<p class="workshop-titles">Program Structure</p><br/>
                        <p>
                            <ol>
                                <li>Who is an Entrepreneur
                                    <ul>
                                        <li>Personality</li>
                                        <li>Traits</li>
                                        <li>Skills</li>
                                        <li>Entrepreneur vs Businessman</li>
                                    </ul>
                                </li>
                                <li>The Lean Start up Model
                                    <ul>
                                        <li>Vision</li>
                                        <li>Steer - Pivot </li>
                                        <li>Accelerate </li>
                                    </ul>
                                </li>
                                <li>Product Development and Market fit 
                                    <ul>
                                        <li>How to think of a product or service</li>
                                        <li>Understanding customers and markets</li>
                                        <li>Reworking to gain PMF</li>
                                    </ul>
                                </li>
                                <li> Business Planning
                                    <ul>
                                        <li>Idea to Product to Business</li>
                                        <li>Metrics and Numbers</li>
                                        <li>Projections and P&L</li>
                                    </ul>
                                </li>
                                <li>Organisation and Culture 
                                    <ul>
                                        <li>Structure and types</li>
                                        <li>What kind of team to build</li>
                                        <li>Culture creation</li>
                                        <li>Brand Identity</li>
                                    </ul>
                                </li>
                                <li>Marketing and Brand Building
                                    <ul>
                                        <li>Who to sell to</li>
                                        <li>What to sell</li>
                                        <li>How to sell</li>
                                        <li>The feeling of an organisation</li>
                                    </ul>
                                </li>
                                <li>Scale
                                    <ul>
                                        <li>What it means to scale</li>
                                        <li>Vision decisions</li>
                                        <li>Operations and challenges</li>
                                    </ul>
                                </li>
                                <li>Funding and the process
                                    <ul>
                                        <li>Types</li>
                                        <li>Which one to choose</li>
                                        <li>Investors to choose</li>
                                        <li>End game </li>
                                    </ul>
                                </li>
                            </ol>
                        </p>
                        <p class="workshop-fees">FEES - 500 INR per student - 60 in a batch</p>
					</div>
				</div>
                <div class="content__item-workshops">
					<div class="content__item-intro-workshops">
						<img class="content__item-img-workshops" src={firstworkshop} alt="Some image" />
						<h2 class="content__item-title-workshops">Art of money making online</h2>
					</div>
					<h3 class="content__item-subtitle-workshops"></h3>
					<div class="content__item-text-workshops">
						<p class="workshop-titles">About Workshop</p><br/>
						<p>
                        This workshop is an exclusive workshop from participants who wants to explore the field of Webreneurship and explore unlimited opportunities. In this era of Internet every business is up and running on Digital Platforms. There are tons of opportunities on the Internet which helps Webreneurs to make an outstanding career. In this workshop participants will be completely trained on the aspects, channels and ways of how Webreneurship happens.<br/>
                        This Workshop helps participants to establish a career in Webreneurship in different channels. Participants do not need to have any technical knowledge. This workshop is designed for basic beginner in this field and we will show you the path of exploration. This workshop is hands-on and practical with real time cases and examples from thousands of other Webreneurs. 
                        </p><br/>
						<p class="workshop-titles">Workshop Benefits</p><br/>
                        <p>
                            <ol>
                                <li>Participant will be internet entrepreneur</li>
                                <li>Participants will be able to earn from your hobbies</li>
                                <li>Participants will be learning the key ways of earning online</li>
                                <li>Participant will have your own blog and will be blogger</li>
                                <li>Participant will start earning from YouTube</li>
                                <li>Participants will be able to sell products on your blog</li>
                                <li>Participant will be a skilled professional in freelancing with number of skills</li>
                                <li> Learn amazing tools of earning online</li>
                            </ol>
                        </p>
                        <p class="workshop-titles">Pre-requisites</p><br/>
                        <p>Anyone interested to become an Webprenuer can attend this workshop. Participant should know the basic usage of computers and internet.</p>
                        <p class="workshop-titles">Topics to be covered</p><br/>
                        <p>
                            <p class="workshop-subtitles">Introduction</p>
                            <p>
                                <ul>
                                    <li>Introduction to Webreneurship</li>
                                    <li>How Webreneurship works</li>
                                    <li>How to start as Webreneur </li>
                                    <li>Webreneurship Channels and Secrets</li>
                                    <li>Webreneurship Road Map Creation</li>
                                    <li>Introduction to successful ways of earning</li>
                                    <li>How making money works on Internet</li>
                                    <li>Real time examples of successful people</li>
                                </ul>
                            </p>
                            <p class="workshop-subtitles">Basics</p>
                            <p>
                                <ul>
                                    <li>Do people really make money blogging</li>
                                    <li>How a blogger makes 1 lakh per month</li>
                                    <li>Blogging tools and platforms</li>
                                    <li>Interesting case studies & secrets</li>
                                    <li>Setup your blog & related information</li>
                                    <li>How to setup a website</li>
                                    <li>How blog and blogging works</li>
                                    <li>How to do blogging and techniques</li>
                                    <li>Basics of SEO & Killer SEO techniques</li>
                                    <li>Driving traffic to your blog</li>
                                    <li>How to increase Social Media Presence</li>
                                    <li> Setup your Youtube Channel</li>
                                    <li>How to handle Youtube Channel</li>
                                    <li>How Youtube channel works and making money</li>
                                    <li>How to earn from Facebook without any investment</li>
                                    <li>Important tools for blogging and Youtube channel</li>
                                    <li>Introduction to most effective freelance platforms</li>
                                    <li>How to earn from Freelancing platforms</li>
                                </ul>
                            </p>
                            <p class="workshop-subtitles">Advanced</p>
                            <p>
                                <ul>
                                    <li>Setup Google ad-sense</li>
                                    <li>Introduction to Affiliate Marketing</li>
                                    <li>Selling products on your blog</li>
                                    <li>Making money from Amazon and Ebooks</li>
                                    <li>Basic Introduction to Digital Marketing</li>
                                    <li>Difference between Affiliate & Adsense</li>
                                    <li>Secrets behind zero investment ecommerce business</li>
                                </ul>
                            </p>
                            <p class="workshop-subtitles">After Workshop</p>
                            <p>
                                <ul>
                                    <li>Q&A Session</li>
                                    <li>Guidance on further steps</li>
                                </ul>
                            </p>
                            <p class="workshop-titles">Takeaways</p><br/>
                            <p>Official Certification from Digitalshala with partnerships</p>
                        </p><br/>
                        <p class="workshop-fees">FEES - 500 INR per student - 60 in a batch</p>
					</div>
				</div>
                <div class="content__item-workshops">
					<div class="content__item-intro-workshops">
						<img class="content__item-img-workshops" src={secondworkshop} alt="Some image" />
						<h2 class="content__item-title-workshops">Bootcamp for Entrepreneurs</h2>
					</div>
					<h3 class="content__item-subtitle-workshops"></h3>
					<div class="content__item-text-workshops">
						<p class="workshop-titles">About Workshop</p><br/>
						<p>
                        A one of a kind masterclass which makes the participants to get trained on complete Road Map on being an Entrepreneur. This Workshop Covers everything which an Entrepreneur needs to be successful. By end of the workshop the participant will have a clear Road Map on where to start and how to plan the entire Entrepreneurial journey.
                        </p><br/>
						<p class="workshop-titles">Workshop Benefits</p><br/>
                        <p>
                            <ul>
                                <li>Understanding Startup work Environment</li>
                                <li>Know and Intact Entrepreneurial mindset</li>
                                <li>Techniques and worksheets on the Ideation - Planning - Execution - Control & Monitoring - Closing Up With Profits - Customer Engagement - Handling Continuous Sales & Marketing Workflow</li>
                                <li>To bring a certain level of clarity in thoughts, concepts & ideas</li>
                                <li>To structure & give shape to the business model</li>
                                <li>To place an effective benchmark & draw tracking mechanisms of progress vs. business plan.</li>
                                <li>To provide methods & models for Proof of Concept</li>
                            </ul>
                        </p><br/>
                        <p class="workshop-titles">Topics to be covered</p><br/>
                        <p>
                            <p class="workshop-subtitles">Introduction</p>
                            <p>
                                <ul>
                                    <li>Startup life-cycle</li>
                                    <li>Mindset needed for an Entrepreneur to be Successful</li>
                                    <li>Importance of Lean & Agile Development in a startup</li>
                                    <li>How Startups Differ from MNCs</li>
                                    <li>Startup Success Mindset Test + Evaluation</li>
                                </ul>
                            </p>
                            <p class="workshop-subtitles">Ideation & Productisation</p>
                            <p>
                                <ul>
                                    <li>Get Ready be an Entrepreneur </li>
                                    <li>Good Idea! How to find one for your Business</li>
                                    <li>Good Time to Launch your Business as Part/Full-time</li>
                                    <li>What to Build and What to Buy? Starting a Business vs. Buying one</li>
                                </ul>
                            </p>
                            <p class="workshop-subtitles">Planning</p>
                            <p>
                                <ul>
                                    <li>Choose your Market, Know your TAM</li>
                                    <li>Doing Market Research + Surveys</li>
                                    <li>Knowing your USP</li>
                                    <li>Naming your business</li>
                                    <li>Make your Business Legal: Choosing Business Structure</li>
                                    <li>Plan of Strategical Success: Creating a Business Model to win</li>
                                    <li>Hiring right Professionals: Key People for the organisational structural foundation.</li>
                                </ul>
                            </p>
                            <p class="workshop-subtitles">Funding</p>
                            <p>
                                <ul>
                                    <li>Family First! friends, relatives, family, yourself and initial fundraising from known sources</li>
                                    <li>Bootstrapping your business, advantages of it.</li>
                                    <li>Nothing ventured is nothing gained! Finding the right investors and how to attract them.</li>
                                    <li>Looking for Loans: The In's and Out's of Debt Financing and to get loans from Government.</li>
                                </ul>
                            </p>
                            <p class="workshop-subtitles">Preparation with Available Resources</p>
                            <p>
                                <ul>
                                    <li>Negotiating successfully</li>
                                    <li>Creating best MVP Possible by MUR</li>
                                    <li>Choosing Location for your business. Is it really Necessary! or any hacks!</li>
                                    <li>Key takes on Professional Image</li>
                                    <li>A lowdown on personal inventory</li>
                                    <li>Setting up a mailing system and automating key processes.</li>
                                    <li>Special offers for your customers, giving credit and other leverages.</li>
                                    <li>Hiring Employees. Key to Business sustainability.</li>
                                    <li>Using Technology to boost your productivity</li>
                                    <li>Building a company website</li>
                                    <li>Using Technology to Stay Connected with team+ Customers.</li>
                                </ul>
                            </p>
                            <p class="workshop-subtitles">Branding, Marketing & Customer Service</p>
                            <p>
                                <ul>
                                    <li>Building your brand.</li>
                                    <li>Techniques to Advertise and Marketing Your Business</li>
                                    <li>Psychology of Marketing, 5 secrets.</li>
                                    <li>Promoting Business</li>
                                    <li>Effective Selling Techniques</li>
                                    <li>Offering Superior Customer Service.</li>
                                </ul>
                            </p>
                            <p class="workshop-subtitles">Engaging your Customers</p>
                            <p>
                                <ul>
                                    <li>Online Advertising and Marketing</li>
                                    <li>Social Media Marketing and Digital Growth</li>
                                    <li>Social Media Networking</li>
                                </ul>
                            </p>
                            <p class="workshop-titles">Takeaways</p><br/>
                            <p>Official Certification from Digitalshala with partnerships</p>
                        </p><br/>
                        <p class="workshop-fees">FEES - 500 INR per student - 60 in a batch</p>
					</div>
				</div>
                <div class="content__item-workshops">
					<div class="content__item-intro-workshops">
						<img class="content__item-img-workshops" src={thirdworkshop} alt="Some image" />
						<h2 class="content__item-title-workshops">Internet of Things IoT</h2>
					</div>
					<h3 class="content__item-subtitle-workshops"></h3>
					<div class="content__item-text-workshops">
                    <p class="workshop-titles">About Workshop</p><br/>
                    <p>IoT systems allow users to achieve deeper automation, analysis, and integration within a system. They improve the reach of these areas and their accuracy. IoT utilizes existing and emerging technology for sensing, networking and robotics. IoT exploits recent advances in software, falling hardware prices and modern attitudes towards technology.</p>
					</div>
				</div>
				<button class="content__close-workshops">Close</button>
				<svg class="content__indicator-workshops icon-workshops icon--caret-workshops" dangerouslySetInnerHTML={{__html : expandContent}}></svg>
                </div>
		</div>
        )
    }
}

export default Workshops;