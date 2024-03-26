import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import RegisterPages from "./pages/registerPages";
import './asset/styles/tailStyles.css';
import Modal from 'react-modal';
import NotFound from "./components/notFound";
import {useDispatch} from "react-redux";
import {setMobi} from "./redux";
function App() {
    const dispatch = useDispatch();
    const isMobi = /Mobi/i.test(window.navigator.userAgent);
    useEffect(() => {
        dispatch(setMobi({isMobi: isMobi}));
    }, []);
  return (
      <StyledEngineProvider injectFirst>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<RegisterPages />}></Route>
              <Route path="/:step" element={<RegisterPages />}></Route>
              <Route path="*" element={<NotFound />}></Route>
          </Routes>
      </BrowserRouter>
      </StyledEngineProvider>
  );
}

Modal.setAppElement('#root')
export default App;
