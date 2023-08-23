function App() {
    function showName() {
      console.log('Hong')
    }
    function showGender(gender) {
      console.log(gender)
    }
    
    let name = 'Kim'
    function showName2() {
      name = 'Kang'
      console.log(name)
      return name;
    }
  
    function showText(e) {
      console.log(e.target.value)
    }
  
    return (
      <div className="App">
        
        <h1>Hello</h1>
        
        <button onClick={showName}> Show Name </button>   {/* 이 방식 잘 안쓴다함*/} 
        
        
        <button onClick={function () {                    {/* 이 방식을 더 많이 쓴다 함*/} 
          console.log('35')
        }}> Show Age </button>
  
        <button onClick={() => {                    {/* 람다식(Lambda / Arrow Function) 함수*/} 
          console.log('거구장')
        }}> Show Addr </button>
      
        <button onClick={() => {                    {/* 람다식(Lambda / Arrow Function) 함수*/} 
          showGender("남자");
        }}> Show Gender </button>
  
        {/* 리턴이 있는 함수 호출 */}
        <button onClick={showName2}> Show Name 2</button>
  
        <div> name = {name}</div>
  
  
        <input type="text" onChange={showText} />
        <input type="text" onChange={(e)=>{
          // e => 이벤트, target=> 이벤트가 발생항 요소
          console.log(e.target.value);
        }} />
  
      </div>
    );
  }
  
  export default App;
  