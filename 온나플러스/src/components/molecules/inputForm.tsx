import NameInput from "../atoms/inputs/nameInput";
import ReadPhone from "../atoms/inputs/readPhone";
import React, {useEffect, useState} from "react";
import JuminInput from "../atoms/inputs/juminInput";
import EmailInput from "../atoms/inputs/emailInput";
import JobInput from "../atoms/inputs/jobInput";
import PostCode from "../atoms/modal/postCode";
import RegisterButton from "../atoms/registerButton";
import SelectBpk from "../atoms/inputs/selectBpk";
import CarNumInput from "../atoms/inputs/carNumInput";
import AutoPay from "../atoms/inputs/autoPay";
import {useSelector} from "react-redux";
import PhoneInput from "../atoms/phoneInput";
import AgreeButtoGroup from "./agreeButtonGroup";

export interface PhoneProps{
    keys : string
}

const InputForm = (props : {setStep : React.Dispatch<React.SetStateAction<string>>}) => {
    const [info, setInfo] = useState(
        {
            cName : "",
            cJumin : "",
            cCell : "",
            cCheck : false
           /* cMail : "",
            cPost : "",
            cAddr1 : "",
            cAddr2 : "",
            cJobN : "",
            cCarCc : "",
            cUseN : "",
            cJobLocal : "",
            cMoney : "",
            cDrink : "",
            cWeekD : "",
            cOneD : "",
            cSmoke : "",
            cWeekS : "",
            cOneS : "",
            cHeight : "",
            cWeight : "",
            cBank : "",
            cAccount : "",
            cPayDt : "",*/
        }
    );
    useEffect(() => {
        console.log(info)
    }, [info]);
    return (
        <div className='mx-2'>
           {/* <SelectBpk info={info} setInfo={setInfo}/>*/}
            <div className='flex-col'>
                <NameInput  info={info} setInfo={setInfo}/>
                <JuminInput info={info} setInfo={setInfo} />
                <PhoneInput info={info} setInfo={setInfo}/>
                {/*<EmailInput info={info} setInfo={setInfo}/>
                <PostCode info={info} setInfo={setInfo} />
                <CarNumInput info={info} setInfo={setInfo} />*/}
            </div>
            <AgreeButtoGroup info={info} setInfo={setInfo}/>
           {/* <div>
                <div className='title_text ml-2'>
                    필수 알릴의무 고지사항
                </div>
                <JobInput info={info} setInfo={setInfo}/>
            </div>*/}
            {/*<div>
                <div className='title_text ml-2'>
                    보험료 자동이체 정보
                </div>
                <AutoPay info={info} setInfo={setInfo}/>
            </div>*/}
            <RegisterButton  info={info} setStep={props.setStep}/>
        </div>
    )
}
export default InputForm;