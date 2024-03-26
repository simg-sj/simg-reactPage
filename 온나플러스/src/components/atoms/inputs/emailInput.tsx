import React, {useEffect, useState} from "react";
import {InfoProps} from "./carNumInput";

const EmailInput = (props : {info : InfoProps, setInfo : React.Dispatch<React.SetStateAction<InfoProps>>}) => {
    const [email ,setEmail] = useState<string>('');
    const [check, setCheck] = useState<boolean>(false);
    const [email2, setEmail2] = useState<string>('');
    const [emailAll, setEmailAll] = useState<string>('');
    const emailRegex : RegExp = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    useEffect(() => {
        let emailAll2 = '';
        if(email2 !== 'none'){
            emailAll2 = email + email2;
        }else {
            emailAll2 = email;
        }
        if(emailRegex.test(emailAll2)){
            setCheck(true);
            props.setInfo((prevState) => {
                return { ...prevState, cMail: emailAll2 }
            });
        }else {
            console.log("@@!!");
            //setEmailAll('');
            setCheck(false);
        }
        console.log(check)
    }, [email, email2]);
    return (
        <div className='flex flex-col pb-2'>
            <div className='sub_title pb-1 pl-4'>
                이메일 [선택]
            </div>
            <div className='flex justify-between mx-2 items-center'>
                <input type={'email'} value={email} id={'email'} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setEmail(e.currentTarget.value)} className='input basis-1/2' placeholder='이메일을 입력해주세요'/>
                <div className='px-2'>@</div>
                <select className='input basis-1/2' id={'email2'} onChange={(e : React.ChangeEvent<HTMLSelectElement>) => setEmail2(e.currentTarget.value)}>
                    <option  value={'none'}>
                        직접입력
                    </option>
                    <option value={'@daum.net'}>
                        daum.net
                    </option>
                    <option value={'@gmail.com'}>
                        gmail.com
                    </option>
                    <option value={'@hanmail.net'}>
                        hanmail.net
                    </option>
                    <option value={'@hotmail.com'}>
                        hotmail.com
                    </option>
                    <option value={'@nate.com'}>
                        nate.com
                    </option>
                    <option value={'@naver.com'}>
                        naver.com
                    </option>
                    <option value={'@yahoo.co.kr'}>
                        yahoo.co.kr
                    </option>
                </select>
            </div>
            <h2 className='text-[10px] pt-2 pl-4'>※ 증권 및 보험 서류를 이메일로 송부하길 희망하시는 경우</h2>
            {!check && email !== '' && <h2 className='text-red-500 text-[11px] pt-2 ml-2'>이메일을 확인해주세요.</h2>}
        </div>
    )
}
export default EmailInput;