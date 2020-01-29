import React from 'react';

class Payment extends React.Component {

    constructor(props) {
        super(props);
        var name = "Register";
        if(this.props.name != undefined)
        name = this.props.name;
        this.state = { eventid: this.props.eventid, name: name};
    }

    componentDidMount() {
        var obj = this.state;

        document.getElementById("buttonPay").id = "buttonPay"+this.state.eventid;
        document.getElementById("buttonPay"+this.state.eventid).onclick = () => {
            if(sessionStorage.getItem("auth") != undefined)
            sendPayRequest(this.state.eventid);
            else{
                alert("Login to Continue");
                window.open("login", "_self");
            }
        }

        function sendPayRequest(id){
            var request = require('request');
            var options = {
                'method': 'POST',
                'url': 'https://localhost:4000/api/user/'+obj.eventid+'/register',
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'auth': sessionStorage.getItem("auth")
                }
            };
            request(options, function (error, response) { 
                if (error){
                    console.log(error);
                }else{
                    console.log(response.body);
                    if(JSON.parse(response.body).response != undefined){
                        var id = (new Date()).getTime();

                    window.location.replace(JSON.parse(response.body).response + '?printerFriendly=true', id,
                    "toolbar=1,scrollbars=1,location=0,statusbar=0,menubar=1,resizable=1,width=800,height=600,left = 240,top = 212",true);
                    }
                }
            });
        }

      }
    
    render() {
        const mystyle = {
            padding: "10px",
            backgroundColor: "#cb0301",
            border: "none",
            outline: "none",
            width: "160px",
            color: "white",
            borderRadius: "20px",
            marginBottom: "10vw"
          };

    return <center>
    <button style={mystyle} id="buttonPay" > {this.state.name} </button>
    </center>;
    }
}

class Redirect extends React.Component{

    constructor(props) {
        super(props);
        var name = "Register";
        if(this.props.name != undefined)
        name = this.props.name;
        this.state = { name: name, link: this.props.link};
    }

    componentDidMount(){

        var obj = this.state;

        document.getElementById("buttonRedir").id = "buttonRedir"+this.state.link;
        document.getElementById("buttonRedir"+this.state.link).onclick = () => {
            window.open(obj.link);
        }

    }
    
    render() {
        const mystyle = {
            padding: "10px",
            backgroundColor: "#cb0301",
            border: "none",
            outline: "none",
            width: "160px",
            color: "white",
            borderRadius: "20px",
            marginBottom: "10px",
            marginTop: "10px"
          };

    return <center>
    <button style={mystyle} id="buttonRedir" > {this.state.name} </button>
    </center>;
    }

}

export default Payment;
//export default Redirect;

export {
    Payment,
    Redirect
}