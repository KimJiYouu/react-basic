import { useState } from "react"


function EventComponentQ() {

  const [food, setFood] = useState('메뉴를 선택하세요');

  const choiceFood = (e) => {
    
      setFood(e.target.value)
    
  }

  return (
    <div>
      <h3>셀렉트 태그 핸들링(실습)</h3>
      <p>셀렉트 태그가 체인지될 때 선택한 결과를 아래에 출력</p>
      <select onChange={choiceFood} style={{width: 200, textAlign: 'center', backgroundColor: 'pink', height: 30, borderRadius: 20, border: '3px solid purple', fontWeight: 1500}}>
        <option value="메뉴를 선택하세요">선택</option>
        <option value="햄버거">햄버거</option>
        <option value="피자">피자</option>
        <option value="치킨">치킨</option>
      </select>

      <h4>선택한 결과</h4>
      {food}
    </div>
  )
}
export default EventComponentQ