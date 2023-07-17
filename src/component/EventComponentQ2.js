import { useState } from "react"

function EventComponentQ2() {

  const [obj, setObj] = useState({content: '', content2: ''});


  const handleChange = (e) => {
    setObj({content : e.target.value, content2: obj.content2});

  }
  const handleClick = (e) => {
    
    setObj({content : '', content2 : obj['content']});
  }


  return (
    <div>
      <h3>인풋데이터 핸들링(실습)</h3>
      <p>클릭시 데이터는 공백으로 결과는 인풋이 입력한 값으로 처리</p>
      <input type="text" onChange={handleChange} value={ obj.content }/>
      <button onClick={handleClick}>추가하기</button>


      <h3>결과</h3>
      {obj.content2}
     
    </div>
  )
}
export default EventComponentQ2