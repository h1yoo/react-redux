import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
// immer를 사용하면 불변성을 유지하는 작업을 매우 간단하게 처리할 수 있음 (spread 연산자(...)와 내장 배열 함수 사용)

// 액션 타입 정의
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경함
const INSERT = 'todos/INSERT'; // 새로운 todo 를 등록함
const TOGGLE = 'todos/TOGGLE'; // todo 를 체크/체크해제 함
const REMOVE = 'todos/REMOVE'; // todo 를 제거함

// 액션 생성 함수 정의
export const changeInput = createAction(CHANGE_INPUT, input => input);

let id = 3; // insert 가 호출될 때마다 1씩 더해짐
export const insert = createAction(INSERT, text => ({
  id: id++,
  text,
  done: false
}));

export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

// 초기 상태 정의
const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 기초 배우기',
      done: true
    },
    {
      id: 2,
      text: '리액트와 리덕스 사용하기',
      done: false
    }
  ]
};

// 리듀서 함수 정의 (==> ./modules/todos.js 파일에 작성된 리듀서 함수 정의 부분처럼 코드 작성해도 되고, 이렇게 해도 됨. 작성자 마음)
const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) =>
      produce(state, draft => {
        draft.input = input;
      }),
    [INSERT]: (state, { payload: todo }) =>
      produce(state, draft => {
        draft.push(todo);
      }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, draft => {
        const todo = draft.find(todo => todo.id === id);
        todo.done = !todo.done;
      }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, draft => {
        const index = draft.findIndex(todo => todo.id === id);
        draft.splice(index, 1);
      })
  },
  initialState
);

export default todos;