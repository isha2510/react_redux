import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Unsplash from '../Api/Unsplash';
import ImageList from './ImageList';

class App extends Component{
//insted of using .then we can use async await as well to access the reposne.
state={images:[]}; 
    onSearchSubmit= async (term)=>{
       const response= await Unsplash.get('/search/photos',{
            params:{query:term},
           
        })

        this.setState({images:response.data.results});
        console.log(response.data.results);
    }
    render(){
    return(
        <div className="ui container">
            <SearchBar onSubmit={this.onSearchSubmit}/>
            <ImageList images={this.state.images} />
            </div>
    );
    }
}

export default App;
