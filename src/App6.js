import {Fragment, useState} from 'react'
import HookEffect from "./hook/HookEffect"
import HookRef from './hook/HookRef';
import HookQ from './hook/HookQ';
import HookReducer from './hook/HookReducer';
import IterationComponentQ3 from './component/IterationComponentQ3';

function App() {

  //보이기 숨기기 - unmount값 확인
  const [visible, setVisible] = useState(true);
  const handleVIsible = () => {
    setVisible(!visible);
  }
  console.log(visible);
  return (
   <Fragment>
    <button onClick={handleVIsible}>{visible ? '숨기기' : '보이기'}</button>
    {visible ? <HookEffect /> : null}

    <hr />
    <HookRef />
    
    <hr />
    <HookQ />

    <hr />
    <HookReducer />

    <hr />
    <IterationComponentQ3 />

   </Fragment>


  )
}
export default App