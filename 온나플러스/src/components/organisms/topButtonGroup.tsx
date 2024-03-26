import BackButton from "../atoms/backButton";
import LogoButton from "../atoms/logoButton";
import React from "react";

const TopButtonGroup = (props : { step : string, setStep : React.Dispatch<React.SetStateAction<string>> }) => {
    return(
        <div className='topBar'>
            <div className='mr-auto pl-2 pt-1'>
                <BackButton step={props.step} setStep={props.setStep}/>
            </div>
            <div className='mr-auto pt-2 pr-2'>
                <LogoButton setStep={props.setStep}/>
            </div>
        </div>
    )
}
export default TopButtonGroup;