import { useState, useEffect } from 'react';

function RockPaperScissors(props) {
  const choices = ['✊', '✌️', '✋'];
  const [myChoice, setMyChoice] = useState(null);
  const [comChoice, setComChoice] = useState(null);
  const [result, setResult] = useState(null);

  const handleMyChoice = e => {
    console.log(e.target.innerText);

    if (e.target.innerText === '✊') setMyChoice(0);
    else if (e.target.innerText === '✌️') setMyChoice(1);
    else if (e.target.innerText === '✋') setMyChoice(2);
  };

  const randInt = Math.floor(Math.random() * 3);

  useEffect(() => {
    setComChoice(randInt);
    
    if (myChoice === null || comChoice === null) return;
    if (myChoice === comChoice) setResult('무승부');
    else if ((myChoice === 0 && comChoice === 1) || (myChoice === 1 && comChoice === 2) || (myChoice === 2 && comChoice === 0)) setResult('인간의 승리');
    else setResult('패배');
  }, [myChoice, comChoice]);

  return (
    <div>
      <h2>가위바위보 게임</h2>
      <p>나: {choices[myChoice]}</p>
      <p>컴퓨터: {choices[comChoice]}</p>
      <p>결과: {result}</p>
      {choices.map(item => {
        return <button onClick={handleMyChoice}>{item}</button>;
      })}
    </div>
  );
}

export default RockPaperScissors;
