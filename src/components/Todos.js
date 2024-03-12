import React from "react";

// 일정을 표시하기 위한 아이템 개별 컨포넌트 ==> Todos에서 사용
const TodoItem = ({todo, onToggle, onRemove}) => {  // todo, onToggle, onRemove를 받아옴
  return (
    <div>
      <input type="checkbox" onChange={() => onToggle(todo.id)} // 체크박스 클릭 시 클릭한 대상 id 전달
             readOnly={true} checked={todo.done} 
      />
      <span style={{textDecoration: todo.done ? 'line-through' : 'none'}}>{todo.text}</span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  )
} // TodoItem 파일을 따로 만들어서 TodoItem 컴포넌트만 작성해서 사용해도 됨

// 화면에 표시할 내용을 작성하는 컴포넌트
const Todos = ({
  input,  // 인풋에 입력되는 텍스트
  todos,  // 할 일 목록이 들어있는 객체
  onChangeInput,  // 인풋에 텍스트를 입력할 때 실행되는 함수
  onInsert,  // 할 일을 추가할 때 실행되는 함수
  onToggle,  // 체크박스를 키고 끌 때 실행되는 함수
  onRemove  // 할 일을 삭제할 때 실행되는 함수
}) => {
  const onSubmit = e => {
    e.preventDefault(); // 새로고침 방지
    onInsert(input);    // 할 일 추가
    onChangeInput('');  // 등록 후 인풋 초기화
  }

  // const onChange = e => onChangeInput(e.target.value); // 인풋에 입력되는 값을 받아옴 ==> 밑에처럼 작성해도 되나?
  // 위와 같이 onChange 함수를 생성하면 재사용이 가능해져서 onChange 함수를 다른 곳에서도 사용할 수 있어짐
  // 위와 같이 함수 생성해서 해당 컴포넌트에 넣는 것을 권장
  return (
    <div>
      <form onSubmit={onSubmit}>
        {/* 아래처럼 함수를 생성하지 않고 바로 작성하면
            해당 인라인 함수(onChangeInput)를 해당 컴포넌트 내에서만 사용할 수 있음 */}
        <input value={input} onChange={e => onChangeInput(e.target.value)}/>
        <button type="submit">등록</button>
      </form>
      <div>
        {todos.map(todo => (
          <TodoItem 
            todo={todo} key={todo.id}
            onToggle={onToggle}
            onRemove={onRemove} />
        ))}
      </div>
    </div>
  )
}

export default Todos;  // Todos 컴포넌트를 내보냄