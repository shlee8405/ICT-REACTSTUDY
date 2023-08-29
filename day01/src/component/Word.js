import React from "react";
import { useState } from "react";






export default function Word(props) {
    // 보였다가 안보였다가 하기 위해서
    // isShow 상태값을 만들어주고 , props로 word를 받아와
    // isShow 가 true 일때만 보이게 하기
    const [kor, setKor] = useState('')

    const [isShow, setIsShow] = useState(false)

    function toggleShow() {
        setIsShow(!isShow)
    }
    const showBtn = () => {
        setKor(props.children);
    }
    const hideBtn = () => {
        setKor('');
    }
    

 
    return(
        <>
        <td>
            {kor}

        </td>
        <td>
            <button id="show" style={{
                marginRight:'20px'
            }} onClick={showBtn}>
                보기
            </button>
            <button id="hide" style={{
                backgroundColor:'red'
            }} onClick={hideBtn}>
                숨기기
            </button>
        </td>
        <td>
            {isShow && props.children}
        </td>
        <td>
            <button onClick={toggleShow}>뜻 {isShow ? '숨기기' : '보기'}</button>
        </td>
        </>

    );
}

