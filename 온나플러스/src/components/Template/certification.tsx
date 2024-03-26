import TopButtonGroup from "../organisms/topButtonGroup";
import ProgressBar from "../atoms/progressBar";
import AgreeButtoGroup from "../molecules/agreeButtonGroup";
import FooterGroup from "../molecules/footerGroup";
import CertiFormGroup from "../molecules/certiFormGroup";
import React, {useState} from "react";
import CalcText from "../molecules/calcText";
import ConfirmButton from "../atoms/confirmButton";

const Certification = (props : { step : string, setStep : React.Dispatch<React.SetStateAction<string>> }) => {
    const isMobi = /Mobi/i.test(window.navigator.userAgent);

    return (
        <div className='flex flex-col w-full items-center justify-center'>
            <div className={isMobi ? 'w-full' : 'web_step1'}>
                <TopButtonGroup step={props.step} setStep={props.setStep}/>
                <ProgressBar select={'calc'}/>
                {/*<AgreeButtoGroup setCheck={setCheck}/>*/}
                {/*<CertiFormGroup check={check} setStep={props.setStep}/>
            <FooterGroup />*/}
                <CalcText/>
                <ConfirmButton setStep={props.setStep}/>
            </div>
        </div>
    )
}
export default Certification;
