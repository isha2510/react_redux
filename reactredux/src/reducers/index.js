import {combineReducers} from 'redux';//example of named export


const songReducer =()=>{
    return[
        {title:'kabh sham dhale',duration:'2:00'},
        {title:'hamma',duration:'3:45'},
        {title:'love me like you do',duration:'2:30'}
    ];
};

const selectedSongRducer=(selectedSong=null,action)=>{
    if(action.type==='SONG_SELECTED')
    {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    song:songReducer,
    selectedSong:selectedSongRducer
});
