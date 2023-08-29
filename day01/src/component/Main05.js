import React, { useReducer, useState } from "react";
import styles from './Main04.module.css';
import { legacy_createStore as createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux'


function reducer(state, action) {
    if (state === undefined) {
        return { count:0 }
    }

     
    switch(action.type) {
        case 'PLUS': 
            return { count: state.count + 1,
            text : 'plus'} ;
        case 'MINUS' : 
            return { count: state.count - 1,
            text: 'minus'};
        default :
            return state
    }
}
const store = createStore(reducer);

// const add = () => {
//     store.dispatch({
//         type: 'PLUS'
//     })
//     console.log(store.getState())
// }

console.log(store.getState())

export default function Main05() {

    const [number, setNumber] = useState(1);

    return(
        <div id={styles.container}>
            <h1>Root : {number}</h1>
            <div id={styles.grid}>
                <Provider store={store}>
                    <Left1></Left1>
                    <Right1  />
                </Provider>
            </div>
        </div>
    );
}

function Left1(props) {
    return(
        <div> 
            <h1> Left 1 : {} </h1>
            <Left2 > </Left2>
        </div>
    );
}

function Left2(props){
    return(
        <div> 
            <h1>Left2: {} </h1>
            <Left3 ></Left3>
        </div>
    );
}

function Left3(props) {
    // function f(state) {
    //     return state.number;
    // }
    // 어떤 state값을 사용할 지를 선택, 함수를 인자로 받는다
    // const number = useSelector(f)

    const number = useSelector((state)=>{return state})
    return (
        <div>
            <h1>Left3: {number.count}</h1>
        </div>
    );
}


function Right1(props) {
    return(
        <div>
            <h1>Right1 </h1>           
            <Right2 />
        </div>
    );
}

function Right2(props) {
    return(
        <div>
            <h2>Right2</h2>
            <Right3  />
        </div>
    );
}

function  Right3(props) {
    const dispatch = useDispatch(store);
    const number = useSelector((state)=>state.count)
    const action =  useSelector((state) => state.text)
    return(
        <div>
            <h2>Right3</h2>
            {/* 버튼을 눌렀을때 state 값이 변경된다 */}
            <input type="button" value='-' onClick={() => {
                // 실행할때의 약속어를 넣어주다
              dispatch({type:'MINUS'})
              console.log(number)
              console.log(action)
            }}/>
            <input type="button" value='+' onClick={() => {
                // 실행할때의 약속어를 넣어주다
              dispatch({type:'PLUS'})
              console.log(number)
              console.log(action)
            }}/>

        </div>
    );
}