import { useReducer } from "react";

//component 바깥에서 선언되는 reducer함수는 재활용이 가능하다

//1. Reducer 함수(state값, 리듀서 실행함수로 전달하는 상태값)
const myReducer = (state, action) => {
  
  console.log(state);
  console.log(action);

  //action에 따라서 상태를 변경하고 return state반환
  if(action.x === 'increase') {
    state = {value: state.value + 1};
  } else if(action.x === 'decrease') {
    state = {value: state.value - 1};
  } else {
    state = {value: 0};
  }

  return state;
}


function HookReducer() {
  
  //2. const [현재state, 리듀서실행함수] = Reducer훅(리듀서함수, state초기값)
  const [state, func] = useReducer(myReducer, {value: 0})
  
  const handleClick = () => {
    //reducer함수를 실행
    func({x: 'increase'}); /* reducer의 상태를 나타내기 위한 값 */
  } 
  
  
  return (
    <>
    <h3>실습</h3>
    <h3>카운트: {state.value}</h3>
    <button onClick={handleClick}>증가</button>
    <button onClick={() => func({x: 'decrease'})}>감소</button>
    <button onClick={() => func({x: 'reset'})}>초기화</button>
    </>
  )
}
export default HookReducer