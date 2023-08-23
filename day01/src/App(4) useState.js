import Hello from "./component/Hello";
import {useState} from 'react';

const heavyWork = () => {
  console.log('heavyWork');
}


function App() {
  const[names, setNames] = useState(['홍길동', '임꺽정']);
  const[input,setInput] = useState('');

  const handleInputChange = (e) => {
    heavyWork();
    setInput(e.target.value);
  }

  const handleAppendName = () => {
    let newNames = [];
    newNames.push(names);
    const newNames2 = [...newNames, input]

    setNames((prevState)=> {
      return([...prevState, input])
    })
  }

  return (
    <div className="App">
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleAppendName}> upload</button>
      {/* 배열이다 */}
      {/* 한번에 나옴 {names} */}
      
      {/* 배열일 경우 하나씩 호출하는 방법 */}
    {names.map((name,idx) => {
      return <p>{name}</p>
    })}
    </div>
  );
}

export default App;
