import React from "react";
import { useNavigate } from 'react-router-dom';
import SimgLogo from '../../assets/images/SIMG_LOGO2.png';
const LogoButton = (props : { setStep : React.Dispatch<React.SetStateAction<string>> }) => {
    const page = useNavigate();
    const onClickHandler = (e : React.MouseEvent<HTMLElement>) => {
        props.setStep('step1');
    }

    return (
            <button onClick={onClickHandler} className='base_button'>
                <img src={SimgLogo} alt={'homeBtn'} className='w-32'/>
            </button>

    )
}
export default LogoButton;