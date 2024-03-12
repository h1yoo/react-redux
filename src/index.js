import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';  // 리덕스에서 createStore 함수 불러옴
import { Provider } from 'react-redux';  // 리액트 앱에 스토어를 쉽게 연동할 수 있도록 도와주는 컴포넌트
import { composeWithDevTools } from 'redux-devtools-extension';  // 리덕스 개발자 도구
import rootReducer from './modules';  // 루트 리듀서 불러옴 ==> 폴더만 불러오면 자동으로 index.js를 불러옴 (index.js로 설정한 경우 호출 시 생략 가능)

// const store = createStore(rootReducer);  // 스토어 생성
const store = createStore(rootReducer, composeWithDevTools());  // 리덕스 개발자 도구 적용

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
