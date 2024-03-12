import './App.css';
import React from 'react';
// import Counter from './components/Counter';
import CounterContainer from './containers/using_connect/CounterContainer';
// import Todos from './components/Todos';
import TodosContainer from './containers/using_connect/TodosContainer';

function App() {
  return (
    <div>
      {/* Counter.js에 Counter 함수에 number값 0 넘겨줌 */}
      {/* <Counter number={0}/> */}
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
}

export default App;
