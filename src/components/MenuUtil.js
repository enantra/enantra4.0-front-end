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
        componentChosen : 'Home',
        ifEvent : false,
        hideMenu : ''
      };
      this.handleMenuClick = this.handleMenuClick.bind(this);
      this.renderEvent = this.renderEvent.bind(this);
    }
    
    handleMenuClick = (path) => {
      this.setState({
          componentChosen : path
      });
    }

  renderEvent = (event) => {
    this.setState({
      ifEvent : event
    })
  }


    render(){
        return(
          <div>
          <ChooseComponent renderEvent={this.renderEvent} selectComponent={this.state.componentChosen} />
          {(() => {
          return ((this.state.ifEvent)? <Menu handleMenuClick={this.handleMenuClick}/> : null)
          })()}
          </div>  
        )
    }
}
ReactDOM.render(<MenuUtil />, document.getElementById('root'));

export default MenuUtil;