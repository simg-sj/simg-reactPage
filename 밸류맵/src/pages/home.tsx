import Logo from '../assets/images/logo2.png'
import React, {useState, useEffect} from 'react';
import Modals from '../component/modals';
import axiosInstans from "../api/axiosInstans"
import dayjs from 'dayjs';
import cn from 'classnames';
import {useMediaQuery} from "react-responsive";
import {useSearchParams } from 'react-router-dom';
import Alert from "../component/alert";

interface UserData {
    name: string;
    cmpk: string;
}

interface reservCode {
    code: string;
}

export default function Home(){
    const [searchParams, setSeratchParams] = useSearchParams();
    const [name, setName] = useState('');
    const [cmpk, setCmpk] = useState('');
    const isMobi = /Mobi/i.test(window.navigator.userAgent);
    const isPc = useMediaQuery({ query: "(min-width: 990px)" });
    let today = dayjs().format('YYYY-MM-DD');
    const [common, setCommon] = useState(false);
    const [toDay, setToday] = useState('');
    const [fromDay, setFromDay] = useState('');
    let [open, setOpen] = useState(false);
    const [type, setType] = useState('');
    const [msg, setMsg] = useState('');


    async function reservEvent(event : React.MouseEvent<HTMLButtonElement>){
        try{
            let access = '';
            if(isMobi){
                access = 'Mobile';
            }else {
                access = 'Web';
            }
            let param = {
                toDay : toDay,
                fromDay : fromDay,
                access : access,
                cmpk : cmpk,
            }

            if(fromDay && toDay){
                // @ts-ignore
                await axiosInstans.post('/reservation', param).then((res : AxiosResponse<reservCode> ) => {
                    if('Ok' === res.code){
                        setMsg('접수 완료되었습니다.');
                        setCommon(true);
                    } else {
                        setMsg('');
                        setCommon(true);
                    }
                });
            }else {
                setMsg('상담 가능 일자를 선택해주세요.');
                setCommon(true);
            }
        }catch(e){
            console.log(e);
            setMsg('');
            setCommon(true);
        }
    }

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
                setCmpk(res.cmpk);
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
                <div className={cn('text-blue-600 flex_center flex-col', {'ml-16' : isPc, 'ml-2' : !isPc})}>
                    <div className={cn('font-bold flex_center flex-col', {'text-[24px]': isPc, 'text-[14px] flex': !isPc})}>
                        <h2>벨류맵 회원 대상</h2>
                        <h2>화재보험 상담 예약일 입력</h2>
                </div>
                <p className={cn('mt-8 text-black', {'text-[12px]': !isPc, 'text-[20px]': isPc})}>
                    {name}님 상담이 가능하신 날짜 2개를 선택해주세요.
                    </p>
                    <p className={cn('text-black',{'text-[12px]': !isPc ,'text-[20px]' : isPc})}>
                        최대한 해당 일자에 맞춰 연락 드립니다.
                    </p>
                    <p className={cn('text-black', {'text-[12px]': !isPc , 'text-[20px]' : isPc})}>
                        상담일정 미 입력 시 임의의 날짜에 {!isPc && <br/>}상담 연락을 받아보실 수 있습니다.
                    </p>
                    <div className='border-[1px] w-[calc(100%-40%)] mt-4 border-black'></div>
                </div>
                <div className={cn('w-[calc(100%-20%)] flex_center my-4', {'text-[12px]' : !isPc})}>
                    <div className='basis-1/2 flex_center flex-col'>
                        <label>
                            상담가능일자(1차)
                        </label>
                        <input type={'date'} className={isPc ? 'input' : 'm_input'} min={today} onChange={(event : React.ChangeEvent<HTMLInputElement>) => setToday(event.currentTarget.value)}/>
                    </div>
                    <div className='basis-1/2 flex_center flex-col'>
                        <label>
                            상담가능일자(2차)
                        </label>
                        <input type={'date'} className={isPc ? 'input' : 'm_input'} min={today} onChange={(event : React.ChangeEvent<HTMLInputElement>) => setFromDay(event.currentTarget.value)}/>
                    </div>
                </div>
                <button className={isPc ? 'button' : 'm_button'} onClick={reservEvent}>상담일정 예약하기</button>
            </div>

            <div className='w-full flex_center border mt-8 border-black flex-col py-8'>
                <div className='flex_center flex-col'>
                    <div>
                        <h2 className={cn('font-bold text-blue-600', {
                            'text-[16px]': !isPc,
                            'text-[24px]': isPc
                        })}>임대차보증금 소송보험</h2>
                    </div>
                    <ul className={cn('list-disc my-4', {'text-[12px]': !isPc, 'text-[20px]': isPc})}>
                        <li>
                            보험 가입 증명 및 약관 확인은 아래 버튼을 클릭하세요.
                        </li>
                        <li>
                            피보험자의 정보 변경/해지, 보험금 청구/지급 관련 문의는<br/>
                            SIMG 고객센터로 연락주세요(☎ 1877-3006)
                        </li>
                    </ul>
                    <button className={isPc ? 'button bg-[#c5dcfe]' : 'm_button bg-[#c5dcfe]'}
                            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {setType('regi'); setOpen(true);}}>보험가입증명서</button>
                    <button className={isPc ? 'button bg-[#c5dcfe]' : 'm_button bg-[#c5dcfe]'} onClick={(event : React.MouseEvent<HTMLButtonElement>) => {setType('pdf'); setOpen(true);}}>보험 약관</button>
                    <button className={isPc ? 'button bg-[#c5dcfe]' : 'm_button bg-[#c5dcfe]'} onClick={(event : React.MouseEvent<HTMLButtonElement>) => {setType('process'); setOpen(true);}}>보험금 청구 및 절차</button>
                </div>
            </div>
            {open && <Modals open={open} setOpen={setOpen} type={type}/>}
            {common && <Alert isOpen={common} setIsOpen={setCommon} msg={msg}/>}
        </div>
    )
}
