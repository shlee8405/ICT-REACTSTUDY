import {createSlice} from '@reduxjs/toolkit';


export const plusSlice = createSlice({
    name : 'plusSlice',
    initialState : {value:50},
    reducers:{
        add :(state, action)=>{
            state.value = state.value + action.payload;
        },
        sub :(state, action)=>{
            state.value = state.value - action.payload;
        },
    }
});

export const {add, sub} = plusSlice.actions; 

export default plusSlice.reducer;
