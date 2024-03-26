import React from "react";
import {useNavigate} from "react-router-dom";
import {StepProps} from "../../pages/MyPage/register";

const ApplyButton = (props : {setStep : React.Dispatch<React.SetStateAction<string>>}) => {
    const page = useNavigate();
    const onClickHandler = (e : React.MouseEvent<HTMLElement>) => {
        /*page('certification');*/
        props.setStep("step2");
    }
    return (
        <div className='fixed left-0 bottom-0 w-full bg-white  border-t-[2px]'>
            <div className='border mx-8 my-8 py-[10px] px-4 rounded-lg bg-[#0e47a1] text-white font-bold text-[14px] flex items-center justify-center'>
                <button onClick={(e) => onClickHandler(e)} className='w-full'>이륜자동차 운전자보험 가입 신청하기</button>
            </div>
        </div>
    )
}
export default ApplyButton;