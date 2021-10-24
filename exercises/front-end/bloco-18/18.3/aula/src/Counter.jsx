import React, {useState, useEffect} from 'react';

function Counter() {
  const [number, setnumber] = useState('');
  const [isHit, setHit] = useState(false);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    if(reload) {
      setnumber(generateNumber)
      setTimeout(() => setReload(false), 10000);
    }
    return () => {
      clearTimeout();
      setReload(true);
    };
  },[reload])

  useEffect(() => {
    number % 3 === 0 || number % 5 === 0 ? setHit(true) : setHit(false);
    setTimeout(() => setHit(false), 4000 );

    return clearTimeout();
  },[number])

  const generateNumber = () => {
    const randomNumber = Math.round(Math.random() * 100);
    return 0 < randomNumber < 101 ? randomNumber : generateNumber();
  }

  return(
    <div>
      <div>{ number }</div>
      <div>{ isHit ? 'ACERTOU!' : '' }</div>
    </div>
  );
}

export default Counter;
