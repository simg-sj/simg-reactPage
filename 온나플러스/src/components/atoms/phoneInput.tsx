import React, {Dispatch, SetStateAction, useState} from "react";
import {InfoProps} from "./inputs/carNumInput";

interface Props {
    setCell: React.Dispatch<React.SetStateAction<string>>;
    setIsCell : React.Dispatch<React.SetStateAction<boolean>>;
}
const PhoneInput = (props : {info : InfoProps, setInfo : React.Dispatch<React.SetStateAction<InfoProps>>} ) => {
    const [phone, setPhone] = useState<string>('');
    const [isCheck, setIsCheck] = useState<boolean>(false);
    const onChangeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        const phoneRegex =/^\d{3}\d{3,4}\d{4}$/;
        const { value } = e.target;
        const onlyNumber = value.replace(/[^-0-9]/g, '');
        setPhone(onlyNumber);
        if(phoneRegex.test(onlyNumber)){
            setIsCheck(true);
            props.setInfo((prevState) => {
                return {
                    ...prevState,
                    cCell : onlyNumber
                }
            });
        }else {
            setIsCheck(false);
            props.setInfo((prevState) => {
                return {
                    ...prevState,
                    cCell : ''
                }
            });
        }
    }
    return (
        <div className='flex flex-col pb-4 w-full items-center justify-center'>
            <div className='flex'>
                <div className='sub_title basis-1/3'>
                    연락처
                </div>
                <input placeholder='(-)없이 입력해주세요.' className='input basis-2/3 mr-[10px]' value={phone} type='string'
                       onChange={(e) => onChangeHandler(e)}/>
            </div>
            {!isCheck && phone !== '' && <h2 className='text-red-500 text-[11px] pt-2 pl-2'>휴대폰 번호 형식이 맞지 않습니다.</h2>}
        </div>
    )
}
export default PhoneInput;
