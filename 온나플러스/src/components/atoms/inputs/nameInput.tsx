import React, {useEffect, useState} from "react";
import {InfoProps} from "./carNumInput";

const NameInput = (props : {info : InfoProps, setInfo : React.Dispatch<React.SetStateAction<InfoProps>>}  ) => {
    const [name , setName] = useState<string>('');
    const [check, setCheck] = useState<boolean>(false);
    const onChangeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        const nameRegex = /^[ㄱ-ㅎ가-힣a-zA-Z]+$/;
        setName(e.currentTarget.value);
        if(nameRegex.test(name)){
            setCheck(true);
        }else {
            setCheck(false);
        }
    }
    useEffect(() => {
        if(check){
            props.setInfo((prevState) => {
                return { ...prevState, cName: name }
            });
        }
    }, [name]);
    return(
        <div className='flex flex-col pb-4 w-full items-center justify-center'>
            <div className='flex'>
                <div className='sub_title  mt-1 basis-1/3'>
                    이름
                </div>
                <input type={'text'} onChange={onChangeHandler} className=' input  basis-2/3' placeholder='기사 성명'/>
            </div>
            {!check && name !== '' && <h2 className='text-red-500 text-[11px] pt-2 pl-2'>이름을 확인해주세요.</h2>}
        </div>
    )
}
export default NameInput;
