import PropTypes from 'prop-types';

function MyComponent(/* x */ {name, age, addr, email}) {
//하위 컴포넌트의 첫째 매개변수에는 props가 전달된다.
  //console.log(x); //x는 객체
  //const {name, age, addr} = x; /* 구조분해할당 */

  return (
    <div>
      함수형 컴포넌트<br/>
      props: {name}<br/>
      props: {age}<br/>
      props: {addr}<br/>

      props이메일: {email}
    </div>
  )
}

//Props값이 넘어오지 않을 때 기본값의 선언
//컴포넌트명.defaultProps = {}
MyComponent.defaultProps = {
  email : 'aaa@naver.com',
  age : 0,
  
}

//prps값의 타입검증 (정적타입 지정)
//컴포넌트명.propsTypes = {}
MyComponent.propTypes = {
  name : PropTypes.string,
  age : PropTypes.number,
  addr : PropTypes.string.isRequired, //문자열이면서 반드시 전달되어야 함
}


export default MyComponent