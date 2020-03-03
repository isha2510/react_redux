import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {selectsong} from '../actions';

class SongList extends Component{
    
    songList(){
      
        return this.props.songs.map((song)=>{
            return(
                <div className='item'   key={song.title}>
                    <div className='right floated content'>
                        <button className='ui button primary' onClick={()=>this.props.selectsong(song)}>  select  </button>
                    </div>
                    <div className='content'>{song.title}</div>
                </div>
            )
        }
        )
    }
    render(){
       console.log(this.props)
        return(
            <div className='ui devided list'>{this.songList()}</div>
        );
    }
}

const mapStateToProps = (state)=>{//this function can have any name.
    console.log(state);

    return {songs:state.song};

}


export default connect(mapStateToProps,{selectsong}) (SongList);