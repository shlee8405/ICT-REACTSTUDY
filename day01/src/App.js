import Hello from './component/Hello';
import Welcome from './component/Welcome';
import './component/Welcome.css';

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
      <Hello />
      <Welcome />
      <h1>이름은 : {name} ; 나이는 : {age}</h1>
      <h2><a href={naver.url} target={naver.target} > {naver.name}</a></h2>
    </div>
  );
}

export default App;
