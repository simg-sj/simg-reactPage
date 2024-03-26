import React from 'react';
import Home from "./pages/home";
import MyCheckUp from './pages/mycheckup';
import ValueMap from './pages/valuemap';
import './assets/css/common.css';
import NavBar from "./components/navBar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <div className='w-full flex font-[Pretendard] base_font'>
          <BrowserRouter>
              <NavBar />
              <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/mycheckup" element={<MyCheckUp />}></Route>
                  <Route path="/valuemap" element={<ValueMap />}></Route>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
