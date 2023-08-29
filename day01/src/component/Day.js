import json from '../db/data.json';
import * as React from "react";
import {useParams} from "react-router-dom";
import Word from './Word';


export default function day() {
    const input = useParams().day;

    console.log("day" + input);
    const newArr = json.words.filter(x=>x.day == input)


    return(
        <div>
            <h2>Day {input}</h2>
            <table>
                <tbody>
                    {/* map은 배열의 요소를 하나씩 꺼내서 처리 할때 사용,
                    k는 배열에서 추출 하나의 요소를 의미한다.  */}
                    {newArr.map(x=>(
                        <tr key={x.id}>
                            <td>
                                {x.eng}
                            </td>
                                <Word word={x}>
                                    {x.kor}
                                </Word>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}