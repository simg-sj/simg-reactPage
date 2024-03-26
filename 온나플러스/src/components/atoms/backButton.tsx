import BackIcon from '../../assets/images/btn_back.svg';
import React from "react";
import {useNavigate} from "react-router-dom";

interface PropsType{
    step : string
}
const BackButton = (props : { step : string, setStep : React.Dispatch<React.SetStateAction<string>> }) => {
    const movePage = useNavigate();
    const onClickHandler = (e : React.MouseEvent<HTMLElement>) => {
        if(props.step === 'step2') props.setStep('step1')
        if(props.step === 'step3') props.setStep('step2')
    }
    return (
        <div>
            <button className='base_button '>
                <img src={BackIcon} alt={'backIcon'}  onClick={onClickHandler}/>
            </button>
        </div>
    )
}
export default BackButton;