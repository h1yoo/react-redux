import React from 'react';

const Counter = ({ number, onIncrease, onDecrease }) => { // number라고 하는 숫자값, 증가함수, 감소함수 받아옴
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  )
}

export default Counter;