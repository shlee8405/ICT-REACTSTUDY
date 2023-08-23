import Hello from './component/Hello';
import Welcome from './component/Welcome';

function App() {
  // 변수
  const name ="Hong";
  let age = 30;
  
  //객체
  const naver = {
    name : "네이버",
    url : "https://www.naver.com",
    target : "_blank"
  }

  return (
    <div className="App">
      {/* 컴포넌트 
          '재활용'이 가능함. 한번 임포트 하면 여러번 쓸 수 있음
      */}
      <Hello />
      <Welcome />
      <Hello />

      {/*   {변수, 숫자, 문자열} 사용가능 
            {boolean} 사용 불가
      */ }

      {/* 스타일 적용 : 
          (1) 인라인 방식 
              1.  객체처럼, '{}'을 사용
              2.  카멜표기법. css => background-color. React => backgroundColor
          (2) 각 컴포넌트에 전용 CSS 만들기        
              
      */}

      <h1 style={{  /* 인라인 방식 스타일 적용 예시*/
        color: "violet",
        backgroundColor:"aliceblue",
      }}>

        <h1>이름은 : {name} ; 나이는 : {age}</h1>

      </h1>

      {/* 객체 {객체이름.속성}  */}
      <h2><a href={naver.url} target={naver.target} > {naver.name}</a></h2>
    </div>
  );
}

export default App;
