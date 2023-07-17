import { useState } from "react"


function StateComponentQ() {

  
  const [cnt, setCnt] = useState(0);
  
  const plus = () => {
    setCnt(cnt + 1);
  }

  const minus = () => {
    setCnt(cnt - 1);
  }

  const zero = () => {
    setCnt(0);
  }


  return (
    <>
    <h3>실습</h3>
    <h3>카운트: {cnt} </h3>
    <button onClick={plus}>증가</button>
    <button onClick={minus}>감소</button>
    <button onClick={zero}>초기화</button>
    </>
  )
}
export default StateComponentQ