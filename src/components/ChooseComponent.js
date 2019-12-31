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
                  case pages[0] : return <Landing />
                  case pages[1] : return <Flagships />
                  case pages[2] : return (!(this.state.showEvent)? <ChooseEvent resetMenu={this.resetMenu} selectedEvent={this.state.eventChosen} /> : <Events handleEventClick={this.handleEventClick} />)
                  case pages[3] : return <Signup />
                  case pages[4] : return <Login />
                  case pages[5] : return <Workshops />
                  case pages[6] : return <About />
                  case pages[7] : return <Accommodation />
                  case pages[8] : return <Sponsors />
                  case pages[9] : return <Attractions />
                  case pages[10]: return <Contact/>
                  case pages[11]: return <Team />
                  default: return null;
                }
            })()}
            </div>
        )
    }
}

export default ChooseComponent;