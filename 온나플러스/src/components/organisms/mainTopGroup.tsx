import LogoButton from "../atoms/logoButton";
import React from "react";

const MainTopGroup = (props : { setStep : React.Dispatch<React.SetStateAction<string>> }) => {
    return (
        <div className='topBar '>
                <LogoButton setStep={props.setStep}/>
        </div>
    )
}
export default MainTopGroup;
