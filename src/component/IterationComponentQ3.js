import {  useState } from "react";


const IterationComponentQ3 = () => {
    //1 - select는 컴포넌트반복으로 option태그를 생성합니다.
    const select = ['선택', 'HTML', 'Javascript', 'CSS', 'Java', 'Oracle', 'Mysql'];
    const selectList = select.map((val, idx) => <option value={val} key={idx}>{val}</option>)

    //2 - 아래 데이터는 state로 관리하고 화면에 li태그로 반복해주세요 .
    const data = [
        {id: 1, type: 'Java', teacher: '이순신'},
        {id: 2, type: 'Java', teacher: '홍길자'},
        {id: 3, type: 'Javascript', teacher: '홍길동'},
        {id: 4, type: 'Oracle', teacher: '이순신'},
        {id: 5, type: 'Mysql', teacher: '이순신'},
        {id: 6, type: 'CSS', teacher: '박찬호'},
        {id: 7, type: 'HTML', teacher: 'coding404'},
    ];
    const [dataList, setData] = useState(data); //목록값
    const [search, setSearch] = useState(''); //input값


    const newDataList = dataList.map(val => <li key={val.id}>{val.type}-{val.teacher}</li>)
    
    //3 - 셀렉트박스가 체인지되면 이벤트객체를 활용해서 선택된 값만 필터링해주세요.
    const handleChage = (e) => {
      if(e.target.value === '선택') {
        setData(data);
      } else {
        let result = data.filter(val => e.target.value === val.type)
        setData(result);
      }
    }

	//4 - 검색기능(input 태그 값이 변경되면 핸들링)
    const handleClick = () => {
      let result = data.filter(val => val.type.toLowerCase().includes(search) || val.type.toUpperCase().includes(search) || val.teacher.includes(search))
      setData(result);
    }

    return (
        <div>
			<hr/>
            <h3>실습</h3>
            Search: <input type="text" onChange={e => setSearch(e.target.value)} value={search}/>
            <button onClick={handleClick}>검색</button>

            <br/>
            
			과목찾기:
            <select onChange={handleChage}>
                {selectList}
            </select>
            <ul>
               {newDataList}
            </ul>
        </div>
    )
}

export default IterationComponentQ3;