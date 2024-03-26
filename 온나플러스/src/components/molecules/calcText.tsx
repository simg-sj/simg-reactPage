import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../pages/reducers";

const CalcText: React.FC = () => {
    const state : any     = useSelector((state : RootState ) => state.userInfo);
    const isMobi = /Mobi/i.test(window.navigator.userAgent);
    const [info, setInfo] = useState({
        name : '',
        text : '',
        male : '',
        birth : '',
        age : '',
        defaultpremiums : "",
        highpremiums : ""
    })
    useEffect(() => {
            window.scrollTo(0,0);
            let cMale = '';
            let cBirth = '';
            let text = ''
            if (state.male === 'm') cMale = '(남)';
            if (state.male === 'fe') cMale = '(여)';
            if (state.keys === 'onna') text = '온나플러스';
            if (state.keys === 'enuri') text = '이누리플러스';
            if (state.keys === 'barico') text = '바리코퍼레이션';
            if (state.birth !== '') cBirth = state.birth.substring(0, 4) + '.' + state.birth.substring(4, 6) + '.' + state.birth.substring(6, 8);

            setInfo((prevState) => {
                return {
                    ...prevState,
                    name: state.name,
                    age: state.age,
                    male: cMale,
                    text: text,
                    birth: cBirth,
                    defaultpremiums: state.defaultpremiums,
                    highpremiums: state.highpremiums
                }
            })
    }, []);

    return (
        <div className={isMobi ? 'flex flex-col items-center justify-center pt-[120px] mx-6 pb-[90px]' : 'web_calc_1'}>
            <div className={isMobi ? 'text-[12px]  px-8 flex-col flex items-center font-semibold fixed top-[120px] bg-white w-full' : 'px-2 text-[12px] mt-4 font-semibold'}>
                <div className='flex justify-center flex-col items-center'>
                    <h2>{info.text} {info.name} 라이더님의 </h2>
                    <h2>운전자보험 월보험료 예시는 다음과 같습니다.</h2>
                    <h2>보장 담보는 상담시 변경 가능합니다.</h2>
                </div>
                <div className='mt-4 py-4 border-t-2 border-b-2 flex w-full font-semibold text-[12px]'>
                    <div className='basis-2/4 pl-6'>
                        <div>
                            {info.birth} {info.male} {info.age} 세
                        </div>
                        <div className='mt-1'>
                            이륜자동차운전
                        </div>
                    </div>
                    <div className='basis-2/4 flex-col  items-center flex'>
                        <div className='w-full flex justify-center'>
                            <div>
                                20년납입 / 20년만기
                            </div>
                        </div>
                        <div className='flex mt-4 w-full'>
                            <div className='flex justify-center basis-1/2'>
                                기본형
                            </div>
                            <div className='flex justify-center basis-1/2'>
                                고급형
                            </div>
                        </div>
                        <div className='flex mt-4 w-full'>
                            <div className='flex justify-center basis-1/2'>
                                {info.defaultpremiums}원
                            </div>
                            <div className='flex justify-center basis-1/2'>
                                {info.highpremiums}원
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={isMobi ? 'pt-[200px] py-2  flex w-full font-semibold text-[12px]' : ' py-2  flex w-full font-semibold text-[12px]'}>
                <div className='basis-2/4 pl-6'>
                    <div>
                        운전 중 상해 사망
                    </div>
                    <div className='mt-4'>
                        운전 중 상해 후유 장해
                    </div>
                    <div className='mt-4'>
                        자동차사고 벌금(대인)
                    </div>
                    <div className='mt-4'>
                        자동차사고 벌금(대물)
                    </div>
                    <div className='mt-4'>
                        사고처리지원금<br/>
                        (중대법규위반,6주미만치료)
                    </div>
                    <div className='mt-4'>
                        사고처리지원금
                    </div>
                    <div className='mt-4'>
                        자동차사고변호사선임비용
                    </div>
                    <div className='mt-4'>
                        운전중상해입원일당<br/>(최대180일)
                    </div>
                    <div className='mt-4'>
                        골절진단(치아제외)
                    </div>
                    <div className='mt-4'>
                        운전중 상해 수술
                    </div>
                    <div className='mt-4'>
                        운전중 상해 깁스 치료
                    </div>
                </div>
                <div className='basis-1/4 flex-col  items-center flex'>
                    <div>
                        100만원
                    </div>
                    <div className='mt-4'>
                        1,000만원
                    </div>
                    <div className='mt-4'>
                        3,000만원
                    </div>
                    <div className='mt-4'>
                        500만원
                    </div>
                    <div className='mt-6'>
                        500만원
                    </div>
                    <div className='mt-6'>
                        3,000만원
                    </div>
                    <div className='mt-[17px]'>
                        2,000만원
                    </div>
                    <div className='mt-4'>
                        1만원
                    </div>
                    <div className='mt-4'>
                        -
                    </div>
                    <div className='mt-4'>
                        -
                    </div>
                    <div className='mt-4'>
                        -
                    </div>
                </div>
                <div className='basis-1/4 flex-col  items-center flex'>
                    <div>
                        100만원
                    </div>
                    <div className='mt-4'>
                        1,000만원
                    </div>
                    <div className='mt-4'>
                        3,000만원
                    </div>
                    <div className='mt-4'>
                        500만원
                    </div>
                    <div className='mt-6'>
                        500만원
                    </div>
                    <div className='mt-6'>
                        3,000만원
                    </div>
                    <div className='mt-[17px]'>
                        3,000만원
                    </div>
                    <div className='mt-4'>
                        2만원
                    </div>
                    <div className='mt-4'>
                        10만원
                    </div>
                    <div className='mt-4'>
                        10만원
                    </div>
                    <div className='mt-4'>
                        30만원
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalcText;
