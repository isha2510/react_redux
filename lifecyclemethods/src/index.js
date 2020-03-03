import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
class App extends Component{

    
    state={lat:null,
        errorMessage:''};
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat:position.coords.latitude});
            },
            err=>{
                this.setState({errorMessage:err.message});
            }
        );
    }

    renderContent(){
        if(this.state.lat && !this.state.errorMessage)
        {
        return(
        <div><SeasonDisplay lat={this.state.lat}/></div>
        );
        }
        if(!this.state.lat && this.state.errorMessage)
        {
        return(
        <div> ErrorMessage:{this.state.errorMessage} </div>
        );
        }
        return <Spinner message="Please accept thelocation request"/>;
       
       
    }
    render(){
       return(
       <div>{this.renderContent()}</div>
       );
           
    }
}

ReactDOM.render(<App/> , document.getElementById("root"));
