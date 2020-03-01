import React from 'react';
import RactDOM from 'react-dom' ;

function getText(){

    return "click me";
}
const App = () =>{

    return (
    <div>
        <label class="label" for="name">
            Enter name:
        </label>
        <input type="text"></input>
    <button style ={{backgroundColor:'blue', color:'white'}}>{getText()}</button>
    </div>
    );
    
};
    RactDOM.render(<App/>,document.getElementById('root'));
