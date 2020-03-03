//action creator

export const selectsong =(song)=>{ //if you wan to export mutiple function use export key word before the function declaration
    //Return an action
    return{
        type:'SONG_SELECTED',
        payload:song
    };
};
