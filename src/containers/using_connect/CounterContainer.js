// 이 파일은 직접 작성한 함수이며, 하위 폴더에 있는 동일한 파일은 redux-actions 라이브러리를 사용한 함수임

// 컨테이너 컴포넌트 만들기
// (리덕스 스토어 연동)
// 리덕스 스토에어 접근하여 원하는 상태를 받아오거나, 액션을 디스패치 할 수 있게 해주는 컴포넌트

import React from 'react';
import Counter from '../../components/Counter';
import { increase, decrease } from '../../modules/using_modules/counter';  // 액션 생성 함수 불러옴
import { connect } from 'react-redux';  // 리덕스 스토어에 연결하는 함수 connect 불러옴

const CounterContainer = ({number, increase, decrease}) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} /> // Counter 컴포넌트에 number, onIncrease, onDecrease를 넘겨줌
  );
}

// export default CounterContainer;  // CounterContainer 컴포넌트를 내보냄
// ==> 밑에 connect를 export default 하기 때문에 주석처리 (==> export default는 동일한 파일에서 하나만 가능)


/****************************************************
 connect 함수를 사용할 때는 mapStateToProps, mapDispatchToProps를 사용하여 컴포넌트에 props를 넣어주어야 함
*/
// mapStateToProps: 리덕스 스토어의 상태를 조회하여 컴포넌트의 props로 넣어주는 함수
const mapStateToProps = state => ({ // state를 파라미터로 받아오며, 이를 통해 리덕스 스토어 안의 상태를 조회
  number: state.counter.number
});

// mapDispatchToProps: 액션 생성 함수를 컴포넌트의 props로 넣어주는 함수
const mapDispatchToProps = dispatch => ({ // dispatch를 파라미터로 받아오며, 이를 통해 액션을 디스패치
  increase: () => {
    // console.log('increase');
    dispatch(increase());
  },
  decrease: () => {
    // console.log('decrease');
    dispatch(decrease());
  }
});

// connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)
// connect 함수를 호출하고 나면 또 다른 함수를 반환
// 반환된 함수에 컴포넌트를 파라미터로 넣어주면 리덕스와 연동된 컴포넌트가 만들어짐
export default connect(
  mapStateToProps,    // mapStateToProps가 첫 번째 파라미터로 들어감
  mapDispatchToProps  // mapDispatchToProps가 두 번째 파라미터로 들어감
)(CounterContainer);  // connect 함수에 반환된 함수에 CounterContainer를 넣어주면 리덕스와 연동된 컴포넌트가 만들어짐

/*
// 위 코드들을 간단하게 작성하면 아래와 같다.
export default connect(
  state => ({
    number: state.counter.number
  }),
  dispatch => ({
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease())
  })
)(CounterContainer);
// connect 함수에 반환된 함수에 CounterContainer를 넣어주면 리덕스와 연동된 컴포넌트가 만들어짐
*/