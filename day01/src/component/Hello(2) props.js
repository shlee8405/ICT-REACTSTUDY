// 자바스크립트에서 변수 설정 : var(변수), let(변수), const(상수)
// var
// let : 일반적인 변수. 한번 선언되면, 다음에 선언할때 오류남
// const: constant. can't change once stated.

import World from "./World";
import {useState} from 'react';

const Hello =  (props) => {
    // props 는 강제로 변경할 수 없다.

    
    const[name, setName] = useState("Hong");
    const[age, setAge] = useState(props.age);

    const msg = age > 19 ? '성년' : '미성년';

    function changeName() {
        const newName = name === 'Hong' ? 'Kim' : 'Hong';
        setName(newName);
    }
    function changeAge() {
        setAge(age+1);
    }
    function lessAge() {
        setAge(age-1)
    }


    return(
        <div style={{
            backgroundColor:"rgba(10,10,10,0.3)",
            width:"30vw",
            marginLeft:"35vw",
            borderRadius:"24px",
        }}>
            <h1>{name} 는 {msg} 입니다</h1>
            <button onClick={changeName}>ChangeName</button>
            <button onClick={changeAge}>ChangeAge</button>
            <button onClick={lessAge}>ChangeAge-1 </button>
            <h3 style={{
                marginTop:"5px",
                color: 'turquoise',
                fontSize: '50px',
            }}> Age : {age}</h3>

        </div>
    ); 
}

    

export default Hello;