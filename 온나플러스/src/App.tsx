import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./pages/MyPage/register";
import Certification from "./components/Template/certification";
/*import RegisterForm from "./components/Template/registerPage";*/
import axios from "axios";
import Modal from "react-modal";
import {useDispatch} from "react-redux";
import {GLOBAL_LOADING, GLOBAL_LOADED} from '../src/pages/reducers/userInfo';
function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        axios.interceptors.request.use(function (config) {
            dispatch({
                type : GLOBAL_LOADING
            })
            return config;
        }, function(error){
            dispatch({
                type : GLOBAL_LOADED
            })
            return Promise.reject(error);
        })
        axios.interceptors.response.use((config) => {
            dispatch({
                type : GLOBAL_LOADED
            })
            return config;
        },(error) => {
            dispatch({
                type : GLOBAL_LOADED
            })
            return Promise.reject(error)
        })
    }, []);
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
Modal.setAppElement('#root')
export default App;
