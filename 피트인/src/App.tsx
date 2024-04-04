import React from 'react';
import './assets/css/common.css';
import Home from './pages/home';
import Modal from 'react-modal';
function App() {
  return (
    <div className="App font-[Pretendard] base_font">
        <Home/>
    </div>
  );
}
Modal.setAppElement('#root')
export default App;
