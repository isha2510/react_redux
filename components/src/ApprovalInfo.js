import React from 'react';
import ReactDOM from 'react-dom';

const ApprovalInfo=(props)=>{
    return(
        <div className="comment">
            <a href="/" className="avatar">
                 <img alt="avatar" src= {props.avatar}/>
            </a>
                    <div className="content">
                        <a href="/" className="author">
                             {props.author}
                             </a>
                          </div>
           
            
        </div>

    );
}

export default ApprovalInfo;