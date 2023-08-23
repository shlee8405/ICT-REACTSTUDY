import json from '../db/data.json';


export default function day() {
    const input= 3;
    const newArr = json.words.filter(x=>x.day==input)


    return(
        <div>
            <table>
                <tbody>
                    {/* map은 배열의 요소를 하나씩 꺼내서 처리 할때 사용,
                    k는 배열에서 추출 하나의 요소를 의미한다.  */}
                    {newArr.map(x=>(
                        <tr key={x.id}>
                            <td>
                                {x.eng}
                            </td>
                            <td>
                                {x.kor}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}