import React from 'react';
import Home from "./pages/home";
import './assets/css/common.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Modal from "react-modal";

function App() {
  return (
      <div className='w-full flex font-[Pretendard] base_font'>
        <BrowserRouter>
          <Routes>
            <Route path="/tool" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}
Modal.setAppElement('#root')
export default App;
