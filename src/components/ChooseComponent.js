import React,{ Component } from 'react';
import ChooseEvent from './ChooseEvent';
import Flagships from './Flagships';
import Landing from './Landing';
import Events from './Events';
import Signup from './Signup';
import Login from './Login';
import Workshops from './Workshops';
import About from './About';
import Accommodation from './Accommodation';
import Sponsors from './Sponsors';
import Attractions from './Attractions';
import Contact from './Contact';
import Team from './Team';

const pages = ['Home','Flagships','Events','Signup','Login','Workshops','About','Accommodation','Sponsors','Attractions','ContactUs','Team'];

class ChooseComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            showEvent : true,
            eventChosen : ''
        }
    }

    handleEventClick = (event) => {
        this.setState({
            showEvent : false,
            eventChosen : event
        })
    }

    resetMenu = () => {
        this.setState({
            showEvent : true
        });
    }

    render() {
        const component = this.props.selectComponent;
        return(
            <div>
            {(() => {
                console.log(component);
                switch(component) {
                  case pages[0] : return <Landing renderEvent={this.props.renderEvent} />
                  case pages[1] : return <Flagships renderEvent={this.props.renderEvent} />
                  case pages[2] : return (!(this.state.showEvent)? <ChooseEvent renderEvent={this.props.renderEvent} resetMenu={this.resetMenu} selectedEvent={this.state.eventChosen} /> : <Events renderEvent={this.props.renderEvent} handleEventClick={this.handleEventClick} />)
                  case pages[3] : return <Signup renderEvent={this.props.renderEvent} />
                  case pages[4] : return <Login renderEvent={this.props.renderEvent} />
                  case pages[5] : return <Workshops renderEvent={this.props.renderEvent} />
                  case pages[6] : return <About renderEvent={this.props.renderEvent} />
                  case pages[7] : return <Accommodation renderEvent={this.props.renderEvent} />
                  case pages[8] : return <Sponsors renderEvent={this.props.renderEvent} />
                  case pages[9] : return <Attractions renderEvent={this.props.renderEvent} />
                  case pages[10]: return <Contact renderEvent={this.props.renderEvent} />
                  case pages[11]: return <Team renderEvent={this.props.renderEvent} />
                  default: return null;
                }
            })()}
            </div>
        )
    }
}

export default ChooseComponent;