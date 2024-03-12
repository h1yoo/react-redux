// 이 파일은 직접 작성한 함수이며, 하위 폴더에 있는 동일한 파일은 redux-actions 라이브러리를 사용한 함수임
import React from "react";
import { connect } from "react-redux";  // 리덕스 스토어에 연결하는 함수 connect 불러옴
import { changeInput, insert, toggle, remove } from "../../modules/using_modules/todos"; // 액션 생성 함수 불러옴
import Todos from "../../components/Todos";  // Todos 컴포넌트 불러옴

// Todos 컴포넌트에 state를 props로 넘겨주기 위해
const TodosContainer = ({ input, todos, changeInput, insert, toggle, remove }) => {
  return (
    // Todos 컴포넌트에게 전달해 줄 props 상태(state)와 액션 생성 함수들을 넘겨줌
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
}

// connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)
export default connect(
  // mapStateToProps,    // mapStateToProps가 첫 번째 파라미터로 들어감
  state => ({   // --> state 객체 전체를 가져와서 input 및 todos 프로퍼티에 직접 접근
    input: state.todos.input,
    todos: state.todos.todos
  // ({todos}) => ({  // --> state 객체에서 todos 프로퍼티만을 비구조화 할당하여 사용
  //  input: todos.input,
  //  todos: todos.todos
  // (이거랑 위 코드랑 둘 다 가능)
  /* 기능적으로는 두 코드 모두 동일합니다.
     일반적으로 Redux에서는 mapStateToProps에서 필요한 부분만 비구조화 할당하여 사용하는 것이
     더 깔끔하고 간결한 코드를 작성할 수 있습니다.
     두 코드 모두 Redux 상태에서 특정 부분만을 가져오고
     해당 부분을 컴포넌트의 props로 매핑하는 역할을 합니다. */
  }),
  // mapDispatchToProps  // mapDispatchToProps가 두 번째 파라미터로 들어감
  dispatch => ({
    changeInput: input => {
      dispatch(changeInput(input));
    },
    insert: text => {
      dispatch(insert(text));
    },
    toggle: id => {
      dispatch(toggle(id));
    },
    remove: id => {
      dispatch(remove(id));
    }
  })
)(TodosContainer);  // connect 함수에 반환된 함수에 TodosContainer를 넣어주면 리덕스와 연동된 컴포넌트가 만들어짐
// ==> export default는 동일한 파일에서 하나만 가능
/*
// 아래 코드를 connect에 넣어서 한 번에 작성
// mapStateToProps: 리덕스 스토어의 상태를 조회하여 컴포넌트의 props로 넣어주는 함수
const mapStateToProps = state => ({
  input: state.todos.input,
  todos: state.todos.todos
});

// mapDispatchToProps: 액션 생성 함수를 컴포넌트의 props로 넣어주는 함수
const mapDispatchToProps = dispatch => ({
  changeInput: input => {
    dispatch(changeInput(input));
  },
  insert: text => {
    dispatch(insert(text));
  },
  toggle: id => {
    dispatch(toggle(id));
  },
  remove: id => {
    dispatch(remove(id));
  }
});
*/