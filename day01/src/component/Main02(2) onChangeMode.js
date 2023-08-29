import React from "react";
import { useState } from "react";

function Head(props) {
    return(
        <header>
            {/* e = event */}
            <h1><a href="/" onClick={(e)=>{
                // 페이지 리로드를 하지 않게 하자
                e.preventDefault();
                // Head 컴포넌트에 onChangeMode 를 실행 한다
                props.onChangeMode();
            }}>{props.title}</a></h1>
        </header>
    );
}

function Nav(props) {
    return(
        <>
            <nav>
                <ol>
                    {props.topics.map((x)=>{
                            return(<li key={x.id}> {x.id}
                                <a id={x.id} topics={x}href={`/read/+${x.id}`} onClick={(e)=>{
                                    e.preventDefault();
                                    props.onChangeMode(x.title, x.body, x.id);
                                    console.log(x.title, x.body, x.id)
                                }}>{x.title}</a>
                                </li>)
                        }
                    )}
                </ol>
            </nav>
        </>
    );
}

function Article(props) {
    return(
        <article >
            <h2>{props.title}</h2>
            {props.body}
        </article>
    );
}

function Create(props) {
    return(
        <article>
            <h2>Create</h2>
            <form action="" onSubmit={(e)=>{
                e.preventDefault();
                const title = e.target.title.value;
                const body = e.target.body.value;
                props.onCreate(title,body);
            }}>
                <p><input type="text" name="title" placeholder="title"></input></p>
                <p><input type="text" name="body" placeholder="body"></input></p>
                <p><input type="submit" value="Create" /></p>
            </form>

        </article>
    );
}

function Update(props) {
    const [utitle, setUtitle] = useState(props.title)
    const [ubody, setUbody] = useState(props.body)


    return (<article>
        <h2>Update</h2>
        <form  action="" onSubmit={(e)=>{
            e.preventDefault();
            const title = e.target.title.value;
            const body = e.target.body.value;
            props.onUpdate(title,body);
        }}>
            <p><input type="text" name="title" placeholder={utitle} /></p>
            <p><input type="text" name="title" placeholder={ubody}  /></p>
            <input type="hidden" value={props.idx}></input>
            <p><input type="submit" value="Update" /></p>
        </form>
    </article>);
}

export default function Main02() {
    
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [updateIsOpen, setUpdateIsOpen] = useState(false);
    const [updateId, setUpdateId] = useState('');

    const [topics , setTopics] = useState([
        {id:1, title:"HTML", body:"Hypertext Markup Language"},
        {id:2, title: "CSS", body: "Cascading Style Sheets"},
        {id:3, title:"JS", body: "JavaScript"}
    ]);
    const [id, setId] = useState(4);
    const [nextId, setNextId] = useState(id);

    function toggle() {
        setIsOpen((isOpen) => !isOpen);
    }

    function updateToggle() {
        setUpdateIsOpen((updateIsOpen)=>!updateIsOpen)
    }


    if(title === '') {
        setTitle('Welcome')
    }
    if(title=== '') {
        setBody('Hello, WEB')
    }
  

    const content = <Create style={{
    }} onCreate={(_title, _body)=>{
        const newTop = {id:nextId, title:_title, body:_body};

        //useState 에서 초기값이 배열이면 무조건 배열복사
        const newTops = [...topics]


        newTops.push(newTop);
        setTopics(newTops);
        setId(nextId);
        setNextId(nextId+1)
    }}></Create>;

    
    let contextControl = null;
    
    contextControl = <li> <a href={'/update/'+id}> Update</a></li>
    
    const updateContent = <Update title={title} body={body} id={updateId} onUpdate={(titlex,bodyx,idx) => {
        
    }}> </Update>

    return(
        <div>
            {/* 컴포넌트, props */}
            <Head title="React Exam02" onChangeMode={()=>{
                // alert("Head");
                setTitle('Welcome')
                setBody('Hello, WEB')
            }}></Head>
            <Nav topics={topics} onChangeMode={(x,y,z)=>{
                // alert(id)
                setTitle(x)
                setBody(y)
                setUpdateId(z)

            }}></Nav>
            <Article title={title} body={body}></Article>

            <a href="" style={{
                marginTop:"200px",
            }} onClick={(e)=> {
                toggle();
                e.preventDefault();
            }}  > CREATE </a>
            <a href="" style={{
                marginTop:"200px",
            }} onClick={(e)=> {
                updateToggle();
                e.preventDefault();
            }}  > UPDATE </a>
            {isOpen && content}
            {updateIsOpen && updateContent}
        </div>
    );
}