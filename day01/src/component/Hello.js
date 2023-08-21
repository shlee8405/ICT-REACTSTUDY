// 자바스크립트에서 변수 설정 : var(변수), let(변수), const(상수)
// var
// let : 일반적인 변수. 한번 선언되면, 다음에 선언할때 오류남
// const: constant. can't change once stated.
import World from "./World";

const Hello =  () => {
    return(
        <div>
            <h2 >Hello</h2>
            <World />
        </div>
    ); 
}

    

export default Hello;