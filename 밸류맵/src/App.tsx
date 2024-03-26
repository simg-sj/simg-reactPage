import React, {useEffect} from 'react';
import './assets/css/common.css';
import Home from "./pages/home";
import ClimPage from "./pages/climPage";
import NotFound from "./component/notFound";
import {useDispatch} from "react-redux";
import axios from "axios";
import loadingStep from "./hooks";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
const dispatch = useDispatch();
useEffect(() => {
    axios.interceptors.request.use(function (config) {
        dispatch(loadingStep.actions.GLOBAL_LOADING());
        return config;
    }, function(error){
        dispatch(loadingStep.actions.GLOBAL_LOADED());
        return Promise.reject(error);
    })
    axios.interceptors.response.use((config) => {
        dispatch(loadingStep.actions.GLOBAL_LOADED());
        return config;
    },(error) => {
        dispatch(loadingStep.actions.GLOBAL_LOADED());
        return Promise.reject(error)
    })
}, );
return (
    <div className="font-pre flex justify-center">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/claim" element={<ClimPage />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
);
}

export default App;
