import { useState } from "react"

function IterationComponent2() {

  const [list, setList] = useState([{id: 1, topic: 'hello'},
                                    {id: 2, topic: 'bye'}
                                  ]);

  //2. input데이터 state
  const [inputData, setInputData] = useState('');                                  

  //5. 삭제이벤트 - 삭제는 id가 필요
  const handleRemove = (id) => {
    //console.log(id);

    //return 에 true가 걸린 요소만 새로운 배열을 만듦
    const result = list.filter((item, index) => {
      console.log(item);
      console.log(index);
      return item.id !== id;
    });

    console.log(result);
    setList(result);
  }

  const newList = list.map(item => <li key={item.id} onDoubleClick={() => {handleRemove(item.id)}}>{item.topic}</li>)   
  
  //3. input데이터 핸들링
  const handleChange = (e) => {
    setInputData(e.target.value);
  }
  
  //4. 클릭이벤트 생성
  const handleClick = () => {
    console.log(inputData);
    //id는 마지막 아이디보다 큰 숫자
    //console.log(list[list.length -1].id);
    const obj = [{id: list[list.length - 1].id + 1, topic: inputData}];
    //기존 배열에 합침
    const newData = list.concat(obj);
    //const newData = [...list, ...obj];
    setList(newData);
    setInputData('');
  }

 


  return (
    <div>
      <h3>할일 목록 만들기</h3>
      <input type="text" onChange={handleChange} value={inputData}/> 
      <button type="button" onClick={handleClick}>추가하기</button>

      <ul>
        {newList}
      </ul>

    </div>
  )
}
export default IterationComponent2