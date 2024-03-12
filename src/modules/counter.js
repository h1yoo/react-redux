// 이 파일에서는 라이브러리에서 제공되는 것들로 counter 함수 생성
import { createAction, handleActions } from 'redux-actions';

// 액션 타입 정의
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수 정의
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 초기 상태 정의
const initialState = {
  number: 0
};

// 리듀서 함수 정의
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 })
  },
  initialState  // 위에서 정의한 초기 상태를 넣어줌
);

export default counter;