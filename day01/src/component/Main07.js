import React from 'react';
import styles from './Main04.module.css'
import { Provider, useSelector, useDispatch } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import {plusSlice, add, sub} from './plusSlice';
import store from './store';


export default function Main06() {
    return(
        <div id={styles.container}>
           <h1>Root</h1>
           <div id={styles.grid}>
                <Provider store={store}>
                    <Left1 />
                    <Right1 />
                </Provider>
           </div>
        </div>
    );
}

function Left1(props) {
    return(
        <div>
            <h1>Left1</h1>
            <Left2 />
        </div>
    );
}

function Left2(props) {
    return(
        <div>
            <h1>Left2</h1>
            <Left3 />
        </div>
    );
}
function Left3(props) {
    const cnt = useSelector(state => state.add.value);
    return(
        <div>
            <h1>Left3 : {cnt}</h1>
        </div>
    );
}

function Right1(props) {
    return(
        <div>
            <h1>Right1</h1>
            <Right2 />
        </div>
    );
}
function Right2(props) {
    return(
        <div>
            <h2>Right2</h2>
            <Right3 />
        </div>
    );
}

function Right3(props) {
    const dispatch = useDispatch();
    return(
        <div>
            <h2>Right3</h2>
            <input type='button' value='+'  onClick={()=>{
                dispatch(plusSlice.actions.add(2));
            }} />

            <input type='button' value='-'  onClick={()=>{
               dispatch(sub(2));
            }} />
        </div>
    );
}