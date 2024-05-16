import React, { useState, useEffect } from 'react';

function DataInteraction() {
  const [data, setData] = useState(null); // 서버에서 받은 데이터를 저장할 상태 변수

  useEffect(() => {
    // 컴포넌트가 마운트되었을 때 서버에 데이터를 요청하는 함수 호출
    fetchData();
  }, []); // useEffect를 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때만 호출되도록 설정

  // 서버에서 데이터를 가져오는 비동기 함수
  const fetchData = async () => {
    try {
      // 서버로 요청을 보내고 응답을 받음
      const response = await fetch('http://localhost:3001/data');
      // 응답을 JSON 형식으로 파싱하여 데이터 추출
      const data = await response.json();
      // 받은 데이터를 상태 변수에 저장
      setData(data);
    } catch (error) {
      console.error('데이터 가져오기 실패:', error);
    }
  };

  return (
    <div>
      <h1>유저 입력 값 출력 창</h1>
      {data ? ( 
        <div>
          <p>이름: {data.a}</p>
          <p>성별: {data.b}</p>
          <p>연령: {data.c}</p>
          <p>os: {data.d}</p>
          <p>관심분야: {data.e}</p>
          <p>모바일 or 컴퓨터: {data.f}</p>
          <p>휴대폰 종류 :{data.g}</p>
          <p>관심있는컴퓨터 언어: {data.h}</p>
        </div>
      ) : ( 
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DataInteraction;
