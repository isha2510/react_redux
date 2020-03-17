import React, { Component } from 'react';

class SearchBar extends Component{

  
  constructor(props){
    super(props)
    
    //this.onFormSubmit=this.onFormSubmit.bind(this);//this is one of the methods to bind the function
  }
  state={term:''};
//   onFormSubmit=(event)=>{you can make this function an arrow function and it will work you will not required to bind the method in the constructor.
//     event.preventDefault();
//     console.log(this.state.term);this will produce error as we have not bind 'this'
//   }

onFormSubmit(event){
    event.preventDefault();
    console.log(this.state.term);//this will produce error as we have not bind 'this'
    this.props.onSubmit(this.state.term);
  }

    render(){
        return(
            <div className="ui segment">
                {/* we are using onSubmit here to prevent the original form submit event */}
            <form onSubmit={(e)=>this.onFormSubmit(e)} className="ui form"> 
            <div className="field">
                <label>Input Search</label>
                  <input type="text" value={this.state.term} onChange={(e)=>this.setState({term:e.target.value})}/>
                  </div>
                  </form>
            </div>
        );
    }
}

export default SearchBar;