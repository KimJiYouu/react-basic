/* import logo from './logo.svg'; */
/* import './App.css'; */

import { Fragment } from "react"; /* React에서 제공해주는 태그라 import해주어야 함 */

function App() {

const name = 'charlie';
const age = 20;


  return (
   <> {/* 없는 태그 사용 */}
    <Fragment> {/* Fragment태그 사용 */}

    <div className="App">
 {/*      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
      <ul>
        <li>1. JSX의 규칙 주석은 alt + shift + a {/* 주석은 중괄호가 포함 */} </li>
        <li>2. JSX에서는 반드시 하나의 JSX형태를 ()로 리턴해야한다.</li>
        <li>2. div태그를 사용하기 싫다면 Fragment 태그 or 없는 모형<></> 을 사용할 수 있다. </li>
        <li>4. 함수 안에서 만들어진 변수는 중괄호 참조를 사용한다. {name} 입니다 {age}세입니다.</li>
        <li>5. JSX에서 if문을 사용하고 싶다면, if문 대신 3항 연산자를 쓴다.</li>
        <li>6. 화면에 보여주고 싶은게 없는 경우에는 null을 반환시킨다.</li>
        <li>7. undefined를 반환하는 상황을 만들면 안된다.</li>
        <li style={{color : 'red', backgroundColor : 'black', fontSize : 15}}>8. DOM요소 (태그)에 스타일을 직접 넣을 때는 반드시 객체형으로 묶고 카멜표기법을 사용</li>
        <li>9. class 대신 className속성을 사용한다.</li>
        <li>10. HTML5의 문법을 정확하게 지킨다. (홀로 사용되는 태그는 반드시 닫는 태그를 적는다.)</li>
      </ul>

     {name === 'charlie' ? 'charlie입니다' : 'charlie가 아닙니다.'}
     {name === 'charlie' ? <p>charlie입니다</p> : <p>charlie가 아닙니다.</p>}
     {age !== 20 ? <p>20세입니다</p> : null}

     <input />
     <img alt="제목" src="#"/> {/* img태그는 alt속성이 기본!! */}
     <br />


      
    </div>

    </Fragment>
   </>
    
  
  );
}

export default App;
