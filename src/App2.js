import { Fragment } from "react"
import MyComponent from "./component/MyComponent"
import MyComponent2 from "./component/MyComponent2"
import MyComponent3 from "./component/MyComponent3"

function App() {

  return (
    <Fragment>

      <div>나의 새로운 컴포넌트</div>
  
      <MyComponent name={'charlie'} age={20} addr={'London'} email={'상위@naver.com'}/>
      <MyComponent name={'lola'} age={30} addr={'London'}/>


      {/* 클래스형 컴포넌트 */}
      <MyComponent2 name={'lola'} age={40}/>


      {/* 함수형 컴포넌트 MyComponent3를 생성
          props는 title, content, writer를 전달
          writer는 기본값은 admin으로 선언
     */}
     <MyComponent3 title={'제목'} content={'내용'} />
    </Fragment>
  )
}

export default App