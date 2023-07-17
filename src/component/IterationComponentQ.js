import { useState } from "react";

function IterationComponentQ() {

  const arr = [
    {src : '/img/img1.png', title : '아이폰10', price: 1000},
    {src : '/img/img2.png', title : '아이폰11', price: 2000},
    {src : '/img/img3.png', title : '아이폰12', price: 3000},
    {src : '/img/img4.png', title : '아이폰13', price: 4000},
]

const [choice, setChoice] = useState('/img/img1.png');
 

const handleChoice = (index) => {
  
  setChoice(arr[index].src);

}



const pList = arr.map((val, index) => <div style={{float: 'left'}} key={index}><img src={val.src} onClick={() => {handleChoice(index)}}></img><p>상품: {val.title}</p><p>가격: {val.price}</p></div>)

  return (
    <div>
      <h3>이미지 데이터 반복해보기</h3>
      <img src={choice} style={{width: '300px', marginLeft: '200px'}}></img>
      <hr />
      <div style={{overflow: 'hidden', textAlign: 'center' }}>
      {pList}
      </div>
      
    </div>
  )
}
export default IterationComponentQ