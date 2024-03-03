import React, { useState } from 'react';
import './BillSplitter.css';

const BillSplitter = () => {
  const [total, setTotal] = useState('');
  const [friends, setFriends] = useState('');
  const [tip, setTip] = useState('');
  const [splitResult, setSplitResult] = useState('');
  const handleTotal = (event) => {
    setTotal(event.target.value);
  };
  const handleFriends = (event) => {
    setFriends(event.target.value);
  };
  const handleTip = (event) => {
    setTip(event.target.value);
  };

  const calculateSplit = (event) => {
    event.preventDefault();
    const totalWithTip = parseFloat(total) * (1 + parseFloat(tip));
    const splitAmount = totalWithTip / parseInt(friends, 10);
    setSplitResult(splitAmount.toFixed(2));
  };

  return (
    <form onSubmit={calculateSplit}>
        
      <label>
        Summa
        <input type='number' value={total} onChange={handleTotal}/>
      </label>
      <br />
      <label>
        Antal vänner
        <input type="number" value={friends} onChange={handleFriends} />
      </label>
      <br />
      <label>
        Dricks (10% = 0.10)
        <input type="number" step="0.01" value={tip} onChange={handleTip} />
      </label>
      <br />
      <button type="submit">Räkna</button>
      <p>Varje person ska betala: {splitResult} kr</p>

    </form>
  );
}

export default BillSplitter;
