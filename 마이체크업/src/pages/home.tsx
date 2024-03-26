import Logo from '../assets/images/logo2.png'
import React, {useState, useEffect, useRef} from 'react';
import Modals from '../component/modals';
import cn from 'classnames';
import axiosInstans from "../api/axiosInstans"
import Process from '../assets/images/보험금청구절차.png';
import {useMediaQuery} from "react-responsive";
import {Link, useSearchParams } from 'react-router-dom';

interface UserData {
    name: string;
    cmpk: string;
}


export default function Home(){
    const [searchParams, setSeratchParams] = useSearchParams();
    const [name, setName] = useState('');
    const isPc = useMediaQuery({ query: "(min-width: 990px)" });
    let [open, setOpen] = useState(false);
    const [type, setType] = useState('');
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [open]);

    useEffect(() => {
        let client  = searchParams.get('client');
        let cName  = searchParams.get('cName');
        let join  : any  = searchParams.get('join');
        if(client !== null) client = client.replace(' ','+');
        if(cName !== null) cName = cName.replace(' ','+');
        let param = {
            client : client,
            cName : cName
        }
        if(client && cName){
            // @ts-ignore
            axiosInstans.post('/userInfo', param).then((res: AxiosResponse<UserData>) => {
                setName(res.name);
                sessionStorage.setItem("name", res.name);
                sessionStorage.setItem("cmpk", res.cmpk);
                sessionStorage.setItem("join", join);
            });
        }
    }, []);
    return (
        <div className='w-[calc(100%-20%)] pb-[40px]'>
            <div className='w-full flex_center'>
                <div>
                    <img src={Logo} alt={'logo'} width={isPc ? 100 : 60}/>
                </div>
                <div className={cn('font-bold',{'text-[14px] ml-4' : !isPc, 'text-[24px] ml-16' : isPc})}>
                    <h2>임베디드 보험의 선구자 SIMG</h2>
                </div>
            </div>
            <div className='w-full flex_center border mt-8 border-black flex-col py-8'>
                <div className={cn('text-blue-600 flex_center flex-col', {'ml-16': isPc, 'ml-2': !isPc})}>
                    <div className={cn('font-bold flex_center flex-col', {
                        'text-[24px]': isPc,
                        'text-[14px] flex': !isPc
                    })}>
                        <h2>건강검진전용 1회성 용종보험</h2>
                        <h2>(프로미 고객사랑 보험)</h2>
                    </div>
                    <div className='flex_center flex-col'>
                        <img src={Process} alt={'process'} width={isPc ? '600' : '400'}/>
                        <div className={cn('font-bold px-16 mt-16 text-black', {'mt-4 text-[12px]': !isPc})}>
                            <p>구비서류</p>
                            <h2>
                                1. 보험금 지급청구서<br/>
                                2. 진단을 확인할 수 있는 자료<br/>
                                <span className='ml-4'>(보험금 지급 심사를 위해 보상담당자가 요청한 서류)</span>
                            </h2>
                            <div className='mt-4'>
                               <ul className='list-disc'>
                                   <li>
                                       피보험자의 정보 변경/해지, 보험금 청구/지급 관련 문의는 <br/>SIMG 고객센터로 연락주세요(☎ 1877-3006)
                                   </li>
                                   <li>
                                       보험금청구접수 대행 : <Link to={'/claim'} target="_blank">mycheckup-insu.simg.kr/claim</Link>
                                   </li>
                               </ul>
                            </div>
                        </div>
                        <div className='flex space-x-8 text-black'>
                            <button className={isPc ? 'button bg-[#f3e6b2]' : 'm_button bg-[#f3e6b2]'}
                                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                                        setType('regi');
                                        setOpen(true);
                                    }}
                            >보험가입증명서
                            </button>
                            <button className={isPc ? 'button bg-[#c5dcfe]' : 'm_button bg-[#c5dcfe]'}
                                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                                        setType('pdf');
                                        setOpen(true);
                                    }}
                                    >보험 약관
                            </button>
                        </div>
                        {/* <button className={isPc ? 'button bg-[#c5dcfe]' : 'm_button bg-[#c5dcfe]'}
                                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                                    setType('process');
                                    setOpen(true);
                                }}>보험금 청구 및 절차
                        </button>*/}
                    </div>
                </div>
            </div>
            {open && <Modals open={open} setOpen={setOpen} type={type}/>}
        </div>
    )
}
