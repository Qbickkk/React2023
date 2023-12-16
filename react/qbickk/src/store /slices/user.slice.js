import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users:[
        {id:1,name:'Vasya'},
        {id:2,name:'Maks'},
        {id:3,name:'Ira'}
    ]
};

const userSlice = createSlice({
    name: 'userSlice',
    initialState
});

const userReducer = userSlice.reducer;

export default userReducer;
