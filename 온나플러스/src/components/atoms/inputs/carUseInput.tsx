import React, {useEffect, useState} from "react";
import {InfoProps} from "./carNumInput";

const CarUseInput = (props : {info : InfoProps, setInfo : React.Dispatch<React.SetStateAction<InfoProps>>}) => {
    const [carUse, setCarUse] = useState<string>('');
    useEffect(() => {
        props.setInfo((prevState) => {
            return { ...prevState, carUse: carUse }
        });
    }, [carUse]);
    return (
        <div className='flex flex-col pb-8 px-2'>
            <div className='sub_title pb-1 pl-2'>
                차량용도
            </div>
            <input type={'text'} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setCarUse(e.target.value)} className='input' placeholder='차량목적을 입력해주세요'/>
        </div>
    )
}
export default CarUseInput;