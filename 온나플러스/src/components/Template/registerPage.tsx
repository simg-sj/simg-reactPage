import TopButtonGroup from "../organisms/topButtonGroup";
import FooterGroup from "../molecules/footerGroup";
import ProgressBar from "../atoms/progressBar";
import InputForm from "../molecules/inputForm";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../pages/reducers";
import {useNavigate} from "react-router-dom";
import ConfirmButton from "../atoms/confirmButton";
import ApplyButton from "../atoms/applyButton";
import RegisterButton from "../atoms/registerButton";
import SelectBpk from "../atoms/inputs/selectBpk";
import AgreeButtoGroup from "../molecules/agreeButtonGroup";

const RegisterPage = (props : { step : string, setStep : React.Dispatch<React.SetStateAction<string>> }) => {
    const  cell    = useSelector((state : RootState ) => state.userInfo.cell);
    const  keys     = useSelector((state : RootState ) => state.userInfo.keys);
    const [check, setCheck] = useState<boolean>(false);
    useEffect(() => {
        if(cell === '') {
            props.setStep('step2')
        }
    }, []);
    return(
        <div className='flex flex-col mx-4'>
            <TopButtonGroup step={props.step} setStep={props.setStep}/>
            <ProgressBar select={'apply'}/>
            <InputForm  setStep={props.setStep} />
            <FooterGroup />
        </div>
    )
}
export default RegisterPage;
