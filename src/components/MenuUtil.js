import React, { Component,PureComponent } from 'react';
import ReactDOM from 'react-dom';
import '../css/Menu.css';
import '../css/NormalizeMenu.css';
import ChooseComponent from './ChooseComponent';
import Menu from './Menu';

class MenuUtil extends Component {
    

    constructor(props){
      super(props);
      this.state = {
        componentChosen : 'Home'
      };
      this.handleMenuClick = this.handleMenuClick.bind(this);
    }
    
    handleMenuClick = (path) => {
      this.setState({
          componentChosen : path
      });
  }


    render(){
        return(
          <div>
          <ChooseComponent selectComponent={this.state.componentChosen} />
          <Menu handleMenuClick={this.handleMenuClick}/>
          </div>  
        )
    }
}
ReactDOM.render(<MenuUtil />, document.getElementById('root'));

export default MenuUtil;