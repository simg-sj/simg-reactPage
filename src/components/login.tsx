import cn from "classnames";
import {useMediaQuery} from "react-responsive";
import React, {SetStateAction, useState} from "react";
import axiosInstance from "../api/axiosInstans";

interface Props {
    setLogin : React.Dispatch<SetStateAction<boolean>>;
}
export default function Login({setLogin} : Props){
    const isPc = useMediaQuery({ query: "(min-width: 990px)" });
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    const onClickLogin = async (event : React.MouseEvent) => {
        const fetchLogin = async () => {
            try {
                let data = {
                    userId : userId,
                    password :password
                }
                const result: any = await axiosInstance.post('/login',data);
                if(result.response === 'OK' ){
                    sessionStorage.setItem('upk', result.data[0].upk);
                    sessionStorage.setItem('name', result.data[0].name);
                    sessionStorage.setItem('userId', result.data[0].id);
                    setLogin(true);
                }else {
                    alert("아이디 또는 패스워드를 확인해주세요.");
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchLogin();
    }
    return (
        <div className={cn('w-full pt-[120px] flex_center')}>
                <div className={cn('flex-col w-[325px] flex_center', {'text-[9px]': !isPc})}>
                    <div className='w-full flex_center flex-col'>
                        <div className='flex w-full'>
                            <div className='basis-1/3 flex_center h-[40px]'>
                                <label>
                                    아이디 :
                                </label>
                            </div>
                            <div className='basis-2/3 px-4 '>
                                <input type={'text'} className='border px-2 h-[40px]' onChange={(e : React.ChangeEvent<HTMLInputElement>) => setUserId(e.currentTarget.value)}/>
                            </div>
                        </div>
                        <div className='flex w-full mt-8'>
                            <div className='basis-1/3 flex_center h-[40px] '>
                                <label>
                                    비밀번호 :
                                </label>
                            </div>
                            <div className='basis-2/3 px-4 '>
                                <input type={'password'} className='border px-2 h-[40px]' onChange={(e : React.ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)}/>
                            </div>
                        </div>
                        <div className='flex_center mt-8'>
                            <button type={'button'} className={cn('border py-2 px-6 rounded-xl',{'bg-[#eeeeee]' : !(userId && password), 'text-white bg_base' :(userId && password)})} onClick={onClickLogin} disabled={(!(userId || password))}>로그인</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}
