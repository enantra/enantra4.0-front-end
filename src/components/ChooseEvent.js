import React,{ Component } from 'react';
import Btrivia from './Btrivia';
import BusinessManagement from './BusinessManagement';
import Coding from './Coding';
import Extravaganza from './Extravaganza';
import EFAC from './EFAC';
import Online from './Online';

const categories = ['Btrivia','BM','Coding','Fun','EFAC','Online'];

class ChooseEvent extends Component {
    render() {
        const event = this.props.selectedEvent;

        return(
            <div>
            {(() => {
                switch(event) {
                  case categories[0] : return <Btrivia renderEvent={this.props.renderEvent} resetMenu={this.props.resetMenu} /> 
                  case categories[1] : return <BusinessManagement renderEvent={this.props.renderEvent} resetMenu={this.props.resetMenu} /> 
                  case categories[2] : return <Coding renderEvent={this.props.renderEvent} resetMenu={this.props.resetMenu} />
                  case categories[3] : return <Extravaganza renderEvent={this.props.renderEvent} resetMenu={this.props.resetMenu} />
                  case categories[4] : return <EFAC renderEvent={this.props.renderEvent} resetMenu={this.props.resetMenu} />
                  case categories[5] : return <Online renderEvent={this.props.renderEvent} resetMenu={this.props.resetMenu} />
                  default: return null;
                }
            })()}
            </div>
        )
    }
}

export default ChooseEvent;