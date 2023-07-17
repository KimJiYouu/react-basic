import {useState} from "react";

function StateComponent() {

  //state - 컴포넌트 안에서 변화하는 값(상태변수)
  // const result = useState('초기값');
  // const a = result[0]; //초기값
  // const b = result[1]; //함수

  const [data, setData] = useState('초기값');
  const [num, setNum] = useState(7);

  const [color, setColor]= useState('black');

  //state는 절대 직접 값을 바꾸면 안됨
  //data = '변경값' //error

  //state는 이벤트 or 특정함수 안에서 바꾸도록 처리
  //setData('변경값'); // 이렇게 하면 무한루프에 빠짐
  
  const handleData = () => {
    setData('change!'); //비동기적으로 state값을 변경 -> 화면을 리렌더링하게 됨
    setNum(10);
  }

  //빨간색 변경
  const handleColor = () => setColor('red');

  return(
    <div>
      스테이트값 : {data}<br/>
      스테이트값 : {num}<br/>
      <button onClick={handleData}>스테이트값 변경</button>

      <hr/>
      <h3 style={{color: color}}>{data}</h3>

      <button onClick={handleColor}>붉은색</button>
      <button onClick={() => setColor('blue')}>푸른색</button>
      <button onClick={() => setColor('violet')}>보라색</button>
      

    </div>
  )
}

export default StateComponent