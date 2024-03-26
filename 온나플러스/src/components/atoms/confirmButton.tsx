import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import {userPhone} from "../../pages/reducers/userInfo";

interface Props{
    code : string,
    inputCode : string,
    isCode : boolean,
    cell : string,
    check : boolean,
    setStep : React.Dispatch<React.SetStateAction<string>>
}
const ConfirmButton = (props : { setStep : React.Dispatch<React.SetStateAction<string>> }) => {
    const isMobi = /Mobi/i.test(window.navigator.userAgent);
    return (
        <div className={isMobi ? 'fixed bottom-0 w-full  bg-white flex justify-center h-[80px]  items-center' : ' w-full flex justify-center py-8'}>
            <button className='button_on h-[40px]' onClick={(e: React.MouseEvent<HTMLElement>) => props.setStep('step1')} >닫기</button>
        </div>
    )
}
export default ConfirmButton;
