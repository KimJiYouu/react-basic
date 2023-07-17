import { useRef, useState, useEffect } from "react"


function HookQ() {

  useEffect(() => {
    idRef.current.focus();
  },[] /* 대괄호의 의미는 첫번째 마운트될 떄만 실행한다는 뜻 */) 

  //state
  const [form, setForm] = useState({ id: '', pw: '' });

  //useRef
  const idRef = useRef(null);
  const pwRef = useRef(null);

  const handleChange = (e) => {
    const copy = { ...form, [e.target.name]: e.target.value };
    setForm(copy);
  }

  const handleClick = () => {
    if (idRef.current.value !== '' && pwRef.current.value !== '') {
      alert(`아이디: ${idRef.current.value}, 비밀번호: ${pwRef.current.value}`);
    } else if (idRef.current.value === '') {
      alert('아이디를 입력하세요');
      idRef.current.focus();
    } else {
      alert('비밀번호를 입력하세요');
      pwRef.current.focus();
    }
    setForm({ id: '', pw: '' });
  }




  return (
    <div>
      <h3>실습</h3>
      <p>로그인 클릭시 공백이라면 공백인 태그에 포커스를 추가하세요.<br />
        로그인 클릭시 공백이 아니라면 경고창으로 입력된 id,pw를 출력해주세요.<br /></p>

      <input type="text" name="id" placeholder="아이디" onChange={handleChange} value={form.id} ref={idRef} /><br />
      <input type="password" name="pw" placeholder="비밀번호" onChange={handleChange} value={form.pw} ref={pwRef} /><br />
      <button onClick={handleClick}>로그인</button>
    </div>
  )
}
export default HookQ