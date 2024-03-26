import ApplyButton from "../atoms/applyButton";
import MainTopGroup from "../organisms/mainTopGroup";
/*import {StepProps} from "../../pages/MyPage/register";*/
import React, {useEffect} from "react";
import MainText from "../molecules/mainText";
import RegisterButton from "../atoms/registerButton";
import {useSelector} from "react-redux";
import {RootState} from "../../pages/reducers";
import InputForm from "../molecules/inputForm";
const Main = (props : { step : string, setStep : React.Dispatch<React.SetStateAction<string>> }) => {
    const isMobi = /Mobi/i.test(window.navigator.userAgent);
    return(
        <div className='w-full  justify-center items-center flex flex-col '>
            <MainTopGroup setStep={props.setStep}/>
            <div className={isMobi ? 'pt-[80px]' : 'web_step1'}>
                <MainText />
                <InputForm setStep={props.setStep}/>
            </div>
        </div>
    )
}
export default Main;
