// 루트 리듀서
// createStore 함수를 사용하여 스토어를 만들 때는 리듀서를 하나만 사용해야 하므로, 기존에 만들었던 리듀서들을 하나로 합쳐주어야 함
// 기존에 만들어둔 리듀서를 합치려면 리덕스에서 제공하는 유틸 함수 중 combineReducers라는 함수를 사용하면 됨

import { combineReducers } from 'redux';
import counter from './using_modules/counter';
import todos from './using_modules/todos';

const rootReducer = combineReducers({
  counter,
  todos
});

export default rootReducer;