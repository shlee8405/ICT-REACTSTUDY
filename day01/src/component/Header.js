import * as React from "react";

export default function Header() {
    
    return(
        <div className="header">
            
            <h1> 토익 영단어 (왕초보) </h1>
            
            <div className="menu">
                <p className="link" >단어추가</p>                
                <p className="link" >Day 추가</p>
            </div>
        </div>
    );

}



//  <div className="App">
//        <Header></Header>
//        <Routes>
//          {/* 첫 페이지를 의미한다 */}
//          <Route path="/" element={<DayList />} >
//          </Route>
//
//          <Route path="/day/:day" element={<><DayList></DayList><Day /></>} />
//          </Routes>
//      </div> 