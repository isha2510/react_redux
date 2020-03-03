import React from 'react';

const Spinner =(props)=>{
    return(
<div className='ui active dimmer'>
    <div className="ui big text loader">
       {props.message}
    </div>
</div>

    );
};

Spinner.defaultProps={//if we haven't provided props for the spinner component then this will show
    message:'Loading...'
};

export default Spinner;