import './App.css';
import { useState } from 'react';
import DataInteraction from './DataInteraction';

const handleSubmit = (formData) => {
  fetch('http://localhost:3000/api/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => {
      if (response.ok) {
        console.log('성공');
      } else {
        console.error('전송실패');
      }
    })
    .catch(error => { 
      console.error('에러', error);
    });
};

function Li() {
  const [formData, setFormData] = useState({
    a: '',
    b: '',
    c: '',
    d: '',
    e: '',
    f: '',
    g: '',
    h: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('저장소:', formData);
    handleSubmit(formData);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <nav>
        <li>
          <label>당신의 이름은 무엇입니까?</label>
          <input type="text" name="a" value={formData.a} onChange={handleChange} />
        </li>
        <li>
          <label>성별은 무엇입니까?</label>
          <input type="text" name="b" value={formData.b} onChange={handleChange} placeholder="남, 여" />
        </li>
        <li>
          <label>연령층은 어떻게 됩니까?</label>
          <input type="text" name="c" value={formData.c} onChange={handleChange} placeholder="10대,20대,30대,40대,50대,기타" />
        </li>
        <li>
          <label>주로 이용하는 운영체제는 어떤 것 입니까?</label>
          <input type="text" name="d" value={formData.d} onChange={handleChange} placeholder="1.윈도우 2.리눅스 3.매킨토시 4.기타" />
        </li>
        <li>
          <label>관심 있는 컴퓨터 분야는 어느 쪽 입니까?</label>
          <input type="text" name="e" value={formData.e} onChange={handleChange} placeholder="1.그래픽 2.프로그래밍 3.자격증 4.게임" />
        </li>
        <li>
          <label>하루에 컴퓨터와 모바일 중 어느 것을 더 많이 이용하나요?</label>
          <input type="text" name="f" value={formData.f} onChange={handleChange} placeholder="1.컴퓨터 2.모바일" />
        </li>
        <li>
          <label>휴대폰의 종류는 어떤 것 입니까?</label>
          <input type="text" name="g" value={formData.g} onChange={handleChange} placeholder="1.갤럭시 2.아이폰 3.기타 4.없음" />
        </li>
        <li>
          <label>관심있는 컴퓨터 언어는?</label>
          <input type="text" name="h" value={formData.h} onChange={handleChange} placeholder="1.자바 2.파이썬 3.모던웹 4.기타" />
        </li>
        <button type="submit">Submit</button>
      </nav>
    </form>
  );
}

function App() {
  return (
    <div>
    <Li />
    <DataInteraction />
    </div>
  );
}

export default App;
