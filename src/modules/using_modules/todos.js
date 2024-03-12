// 액션 타입 정의
const CHANGE_INPUT = 'todos/CHANGE_INPUT';  // 인풋 값을 변경 시 사용
const INSERT = 'todos/INSERT';              // 새로운 todo를 등록 시 사용
const TOGGLE = 'todos/TOGGLE';              // todo를 체크/체크해제 시 사용
const REMOVE = 'todos/REMOVE';              // todo를 제거 시 사용

// 액션 생성 함수
export const changeInput = input => ({
  type: CHANGE_INPUT,
  input
});

let id = 3;  // insert가 호출될 때마다 1씩 더해짐
export const insert = text => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false
  }
});

export const toggle = id => ({
  type: TOGGLE,
  id
});

export const remove = id => ({
  type: REMOVE,
  id
});

// 초기 상태
const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 기초 배우기',
      done: false
    },
    {
      id: 2,
      text: '리액트와 리덕스 사용하기',
      done: true
    }
  ]
};

// 리듀서 함수 정의
const todos = (state = initialState, action) => {
  switch (action.type) {  // 액션 타입에 따라 다른 작업을 처리함
    case CHANGE_INPUT:
      return {
        ...state, // 기존 객체를 복사하여 기존 객체를 수정하지 않고 새로운 객체를 생성 (불변성 유지)
        input: action.input // input 값을 action.input으로 설정
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo)
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map(todo =>  // map 함수를 사용하여
          todo.id === action.id ? { ...todo, done: !todo.done } : todo  // 특정 id를 가진 객체의 done 값을 반전시킴
        )
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    default:
      return state;
  }
};

export default todos;  // 리듀서 함수를 내보냄