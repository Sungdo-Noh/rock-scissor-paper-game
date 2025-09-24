import { useState, useEffect } from 'react';

function RockPaperScissors(props) {
  const choices = ['✊', '✌️', '✋'];
  const [myChoice, setMyChoice] = useState(null);
  const [comChoice, setComChoice] = useState(null);
  const [result, setResult] = useState('');

  // 버튼을 클릭했을 때 실행되는 함수
  const handleMyChoice = (userChoiceIndex) => {
    // 1. 나의 선택을 state에 업데이트합니다.
    setMyChoice(userChoiceIndex);

    // 2. 컴퓨터의 선택을 랜덤으로 결정하고 state에 업데이트합니다.
    const computerChoiceIndex = Math.floor(Math.random() * 3);
    setComChoice(computerChoiceIndex);
  };

  // myChoice나 comChoice 상태가 변경되었을 때만 결과를 판정합니다.
  useEffect(() => {
    // 게임이 시작되기 전에는 아무것도 하지 않습니다.
    if (myChoice === null || comChoice === null) return;

    // 무승부
    if (myChoice === comChoice) {
      setResult('무승부');
    } 
    // 나의 승리
    else if (
      (myChoice === 0 && comChoice === 1) || // 주먹 > 가위
      (myChoice === 1 && comChoice === 2) || // 가위 > 보
      (myChoice === 2 && comChoice === 0)    // 보 > 주먹
    ) {
      setResult('인간의 승리');
    } 
    // 나의 패배
    else {
      setResult('패배');
    }
  }, [myChoice, comChoice]);

  return (
    <div>
      <h2>가위바위보 게임</h2>
      <p>나: {myChoice !== null ? choices[myChoice] : ''}</p>
      <p>컴퓨터: {comChoice !== null ? choices[comChoice] : ''}</p>
      <p>결과: {result}</p>
      {choices.map((item, index) => (
        // 버튼 클릭 시 handleMyChoice 함수에 현재 버튼의 index를 넘겨줍니다.
        <button onClick={() => handleMyChoice(index)}>
          {item}
        </button>
      ))}
    </div>
  );
}

export default RockPaperScissors;