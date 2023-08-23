// import './App.css';

function Header(props) {
  return <header>
      <h1> <a href="/"> {props.title} </a> </h1>
  </header>
}

function Nav(props) {
  const arr = [
  ];
  
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    arr.push(<li key={t.id}><a href="/"> {t.title}</a><br/> {t.body}</li>)
    
  }
  
  return <nav>
      <ol>
        {arr}
      </ol>
  </nav>
}

function Article(props) {
  return <article>
      <h2> {props.title} </h2>    
      {props.body}
      
  </article>
}



function App() {
  const topics = [
    {id:1, title:'HTML', body:'html is cool'},
    {id:2, title:'CSS', body:'CSS is COOL'},
    {id:3, title:'JS', body:'JAVASCRIPT IS COOOOL'}
  ];

  return (
    <div className="App">
      <Header title="REACT" />
      <Nav topics={topics}/>
      <Article title="Welcome" body="Hello,Web" />
      <Article title="Welcome2 " body="Hello, Spidey" />
    </div>
  );
}

export default App;
