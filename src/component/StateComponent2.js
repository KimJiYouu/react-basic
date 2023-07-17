import React from "react";

class StateComponent2 extends React.Component{

  //클래스형 컴포넌트가 생성될 떄 생성자로 프롭스 전달
  constructor(props) {
    super(props); //부모 생성자와 연결
    //state 생성
    this.state = {
      name: 'charlie',
      age :  props.age
    } 
  }

  handleState = () => {
    this.setState({name: 'lola', age: 30});
  }

  render() {
    //const {age} = this.props;
    return (

      <div>
        <div>클래스형 컴포넌트</div>
          {/* 프롭스값: {age} */}
          프롭스값: {this.state.age}<br/>
          프롭스값: {this.state.name}<br/>

          <button onClick={this.handleState}>스테이트 체인지</button>


      </div>
    )
  }

  
}

export default StateComponent2