import React, { Component } from 'react';
import MenuUtil from './components/MenuUtil';
import Avatar from './components/Avatar';

const code = `document.documentElement.className = "js";
var supportsCssVars = function() { var e, t = document.createElement("style"); return t.innerHTML = "root: { --tmp-var: bold; }", document.head.appendChild(t), e = !!(window.CSS && window.CSS.supports && window.CSS.supports("font-weight", "var(--tmp-var)")), t.parentNode.removeChild(t), e };
supportsCssVars() || alert("Please view this demo in a modern browser that supports CSS Variables.");`;


class App extends Component {

  loadScript(source,code){
		var tag = document.createElement('script');
		tag.async = false;
	
		if(source){
			tag.src = source;
		}
    	if(code){
      		tag.appendChild(document.createTextNode(code));
    	}
		return tag;
  }
  
  componentDidMount(){
    let body = document.getElementsByTagName('div')[0];
    
    body.appendChild(this.loadScript("",code));
    body.appendChild(this.loadScript("../js/vendor/imagesloaded.pkgd.min.js",""));
    body.appendChild(this.loadScript("../js/vendor/masonry.pkgd.min.js",""));
    body.appendChild(this.loadScript("../js/vendor/dynamics.min.js",""));
    body.appendChild(this.loadScript("../js/vendor/main.min.js",""));
    body.appendChild(this.loadScript("https://unpkg.com/animejs@3.0.1/lib/anime.min.js",""));
    body.appendChild(this.loadScript("https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js",""));

  }

  render() {
    return(
       <MenuUtil/>
    )
  }
}   

export default App;
