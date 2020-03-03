import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component{

    constructor(props){
        super(props);
        //This is the only time we do direct assignment to this.state
        this.state={
            lat:null,
            errorMessage:''
        };
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat:position.coords.latitude});
            },
            err=>{
                this.setState({errorMessage:err.message});
            }
        );
    }
    render(){
        if(this.state.lat && !this.state.errorMessage)
        {
        return(
        <div>Lattitude : {this.state.lat}</div>
        );
        }
        if(!this.state.lat && this.state.errorMessage)
        {
        return(
        <div> ErrorMessage:{this.state.errorMessage} </div>
        );
        }
        return <div>Loadin!</div>;
       
       
           
    }
}

ReactDOM.render(<App/> , document.getElementById("root"));
