import React from 'react';

class RegisterationTab extends React.Component {
  
  constructor(){
    super();
  }

  componentDidMount(){

    getRegisteredEvents();

    function getRegisteredEvents(){
			var request = require('request');
            var options = {
                'method': 'GET',
                'url': 'https://enantra.org/api/user/getregevents',
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'auth': sessionStorage.getItem("auth")
                }
            };
            request(options, function (error, res) { 
                if (error){
                    console.log(error);
                }else{
					var jsonDa = JSON.parse(res.body);
					var jsonD = jsonDa.response;
					console.log(jsonD);
					
					for (var i = 0; i < jsonD.length; i++) {
						var counter = jsonD[i];
						addRegEvent(counter.eventname);
					}
                }
            });
		  }

		  function addRegEvent(name){

			var div = document.createElement("div");
      div.innerHTML = name;
      div.style.display = "inline-block";
      div.style.backgroundColor = "#55276d";
      div.style.padding = "20px";
      div.style.minWidth = "150px";
      div.style.textAlign = "center";
      div.style.margin = "10px";
      div.style.boxShadow = "0 2px 3px 0 rgba(0, 0, 0)";
      div.style.borderRadius = "14px"

			document.getElementById("regEvents").appendChild(div);
		  }
  }

  render(){

    return (
      <div style={{margin: "10px"}}>
        <h3>Registered Events</h3>
        <div id = "regEvents">
            </div>
      </div>
    );
  }
}

export default RegisterationTab;

/*export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const regEventStyle = {
    "display": "inline-block",
    "backgroundColor": "blue",
    "padding": "10px",
    "minWidth": "150px", 
    "textAlign": "center",
    "margin": "10px"
  }

  return (
    <div className={classes.root}>
      <h3 style={{marginLeft: "10px"}}>Registered Events</h3>
      <div id = "regEvents">
            <div style={regEventStyle}>
              Event Name
            </div>

            <div style={regEventStyle}>
              Event Name
            </div>
          </div>
    </div>
  );
}*/