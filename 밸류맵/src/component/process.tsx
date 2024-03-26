import React, {SetStateAction} from "react";
import ProcessImage from '../assets/images/보험금청구절차.png';
import { useMediaQuery } from "react-responsive";
import cn from 'classnames';
import {Link} from "react-router-dom";
interface Props {
    setOpen : React.Dispatch<SetStateAction<boolean>>;
}
export default function process({setOpen} : Props){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const isPc = useMediaQuery({ query: "(min-width: 990px)" });
    return(
        <div className='w-full flex justify-center items-center flex-col bg-white py-8'>
            <div className='h-[40px] flex items-center font-bold text-[20px]'>
                <p>보험금 청구 절차 및 청구 안내</p>
            </div>
            <div className='flex flex-col relative '>
                <div className='w-full flex_center'>
                    <img src={ProcessImage} alt={'process'} width={isPc ? 500 : 300}/>
                </div>
                <div className={cn('font-bold px-16 mt-16', {'mt-4 text-[12px]': !isPc})}>
                <p>구비서류</p>
                    <h2>
                        1. 보험금 지급청구서<br/>
                        2. 진단을 확인할 수 있는 자료<br/>
                        <span className='ml-4'>(보험금 지급 심사를 위해 보상담당자가 요청한 서류)</span>
                    </h2>
                    <div className='mt-4'>
                        <h2>
                            보험금청구관룐 문의 : 1876-3006
                        </h2>
                        <h2>
                            보험금청구접수 대행 : https://valuemap-insu.simg.kr
                        </h2>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-4 flex space-x-6 flex_center  text-white'>
                <button className='button-color'
                        onClick={(event: React.MouseEvent<HTMLButtonElement>) => setOpen(false)}>닫기
                </button>
            </div>
        </div>
    )
}
