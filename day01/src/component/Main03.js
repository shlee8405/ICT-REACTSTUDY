import React, { useReducer, useState } from "react";


export default function Main03() {
    const [count, setCount] = useState(0)
    
    function down() {
        setCount(count-1)
    }

    function reset() {
        setCount(0)
    }

    function up() {
        setCount(count+1)
    }



    // useReducer

    function reducer(state, action) {
        if(action.type === "up") {
            return {
                cnt: state.cnt + 1
            }
        }
        if(action.type === "down") {
            return {
                cnt: state.cnt -1
            }
        }
        if(action.type ==="reset") {
            return {
                cnt: 0
            }
        }
    }

    function reducer2(state, action) {
        let val = 1;
        if (action.val > 0) {
            console.log(action.val)
            return {
                val : action.val
            }
        }
        if(action.val)
        if(action.type === "up"){
            return {
                cnt: state.cnt + action.val
            }
        }

    }



    // useReducer basic syntax
    const [number, setNumber] = useState(1);

    function changeNumber(e) {
        setNumber(Number(e.target.value));
    }

    const [state, dispatch] = useReducer(reducer, { cnt : 0})

    const [state2, dispatch2] = useReducer(reducer2, { cnt : 0})

    return(
        <div style={{
            marginLeft:"45vw"
        }}>
 
            <div style={{
            }}>
                <h2>useState</h2>
                <h2 style={{margin:"20px"}}>{count}</h2>
            </div>
            <div>
                <p>useState 예시</p> 
                <input type="button" value="-" onClick={down} />
                <input type="button" value="초기화" onClick={reset} />
                <input type="button" value="+" onClick={up} />
            </div>
            <br></br><br></br>
            <div style={{
            }}>
                <h2>useReduce</h2>
                <h2 style={{margin:"20px"}}>{state.cnt}</h2>
            </div>
            <div>
                 
                <p>useReducer 예시</p>
                <input type="button" value="-" onClick={() => {
                    dispatch({type: "down"});
                }} />
                <input type="button" value="초기화" onClick={() => {
                    dispatch({type:"reset"})
                }} />
                <input type="button" value="+" onClick={() => {
                    dispatch({type:"up"});
                }} />
            </div>


            <div style={{
            }}>
                <h2>useReduce2</h2>
                <h2 style={{margin:"20px"}}>{state2.cnt}</h2>
            </div>
            <div>
                 <p>useReducer2 예시</p>
                 <input type="button" value="-" onClick={() => {
                     dispatch2({type: "down"});
                 }} />
                 <input type="button" value="초기화" onClick={() => {
                     dispatch2({type:"reset"})
                 }} />
                 <input type="button" value="+" onClick={() => {
                     dispatch2({type:"up"});
                 }} />
                 <input type="text" placeholder="Increments? base is 1" onChange={(e) => {
                    console.log(e.target.value)
                    dispatch2({val: e.target.value})
                 }}></input>
             </div>
        </div>
    );
}