import json from "../db/data.json";
import * as React from "react";
import { Link } from 'react-router-dom';

export default function DayList() {
    // JSON 같은 반복 처리 할때는 주로 map을 사용함
    // react-router => Link



//     <div>
//     <ol>
//         <li>
//             <a href="">{json.days[0].day}</a>
//         </li>
//         <li>
//             <a href="">{json.days[1].day}</a>
//         </li>
//         <li>
//             <a href="">{json.days[2].day}</a>
//         </li>
//     </ol>
    
// </div>
    // const arr = []
    
    // for (let i = 0; i < json.days.length; i++) {
    //     arr.push( <li key={json.days[i].id}> <a href=""> {json.days[i].day}</a></li>)
    // }


    return(
        <ul className="list_day">
            {/* {arr} */}

            {json.days.map(x=> (
                <Link to={`/day/${x.id}`} key={x.id}>
                <li key={x.id}> Day {x.day}</li>
                </Link>
            ))}
            <Link to={`/main01`} style={{
                backgroundColor:"darkblue",
                marginLeft:'10px'
            }}> <li>Clear</li></Link>
        </ul>
    );
}