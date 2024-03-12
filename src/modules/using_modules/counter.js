// 이 파일에서 counter는 직접 만든 리듀서 함수임
// 초기 상태 및 리듀서 함수 정의
// 모듈: Ducs 패턴을 사용해 액션 타입, 액션 생성 함수, 리듀서 함수를 작성

// 액션 타입 정의 (액션 타입은 대문자로 정의하고, 문자열 내용은 '모듈 이름/액션 이름' 형태로 작성)
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수 정의 (액션 생성 함수는 export로 내보내기)
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 초기 상태 정의 (리듀서의 초기 상태는 객체 형태로 작성)
const initialState = {
  number: 0
};

// 리듀서 함수 정의 (리듀서 함수는 export default로 내보내기)
// export default function counter(state = initialState, action) {  // 이렇게 작성할 수도 있음
const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1
      };
    case DECREASE:
      return {
        number: state.number - 1
      };
    default:
      return state;
  }
}

export default counter;
