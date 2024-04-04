import ProductWrap from "./productWrap";
import React, { SetStateAction} from 'react';
import QnaDiv from "./qnaDiv";
import PitIn from '../assets/images/pit-in.png';
import {useMediaQuery} from "react-responsive";
import cn from 'classnames';
import Icon1 from '../assets/images/01-01.png';
import Icon2 from '../assets/images/02-01.png';
import Icon3 from '../assets/images/03-01.png';
import Icon4 from '../assets/images/04-01.png';

interface Props {
    registerRef: React.RefObject<HTMLDivElement>;
    infoRef: React.RefObject<HTMLDivElement>;
    limitRef: React.RefObject<HTMLDivElement>;
    qaRef: React.RefObject<HTMLDivElement>;
    setIsOpen : React.Dispatch<SetStateAction<boolean>>
}
export default function Section({registerRef, infoRef, limitRef, qaRef, setIsOpen} : Props){
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
    const isMobile = useMediaQuery({maxWidth : 930})

    const onClickHadnler = (e : React.MouseEvent<HTMLButtonElement>) => {
        const pdfUrl = 'https://pitin-ev.simg.kr/보험약관_신한 EV배터리 교체비용보상보험.pdf';
        // PDF 파일 다운로드 링크 생성
        const link = document.createElement('a');
         link.href = pdfUrl;
         link.setAttribute('download', '보험약관_신한 EV배터리 교체비용보상보험.pdf');
         link.setAttribute('target', '_blank');
         document.body.appendChild(link);
         link.click();
         document.body.removeChild(link);
    }
    return (
        <div className='w-full pb-[120px]'>
            <div
                className='mx-auto my-0 bg-white w-[calc(100%-80px)] max-w-[1062px] border-b-[2px] border-black  pb-[80px]' ref={registerRef}>
                <div className='flex flex-col text-black'>
                    <h2 className={cn('font-[400]', {'text-[14px]': isTabletOrMobile, 'text-[18px]' : isDesktopOrLaptop})}>
                        영업용 EV 배터리 케어 서비스란?
                    </h2>
                    <div className='flex'>
                        <div className={cn('mt-4 flex flex-col', {'text-[16px]': isTabletOrMobile, 'basis-2/3 text-[24px]' : isDesktopOrLaptop})}>
                            <p>FMS를 활용한 차량관리, BMS 진단 데이터 기반으로{isDesktopOrLaptop &&<br/>}
                                <span className='font-bold'>배터리의 효율적 사용과 고장 예방</span>
                            </p>
                            <p className='mt-4'><span className='font-bold'>국내 최초</span>로 제공되는 영업영EV 배터리팩 자차보험{isDesktopOrLaptop &&<br/>}
                                을 제공하는 혁신적인 서비스입니다
                            </p>
                        </div>
                        {
                            !isMobile &&
                        <div className='basis-1/3 flex_center '>
                                <img src={PitIn} alt={'PitIn'}/>
                        </div>
                        }
                    </div>
                    <div className='mt-8 w-[192px] h-[40px] border rounded-2xl bg_base text-white'>
                        <button className='font-[700] w-full h-full' onClick={(e : React.MouseEvent) => setIsOpen(true)}>
                            서비스 가입
                        </button>
                    </div>
                </div>
            </div>
            <ProductWrap/>
            <div
                className='mx-auto my-0 bg-white w-[calc(100%-80px)] max-w-[1062px] border-b-[2px] border-black  pb-[120px]' ref={limitRef}>
                <div className='flex flex-col text-black' >
                    <h2 className={cn('font-bold', {'text-[18px]': isTabletOrMobile, 'text-[24px]' : isDesktopOrLaptop})}>
                        서비스 비용
                    </h2>
                    <div className='w-full mt-4'>
                        <table className={cn('w-full border shadow rounded-lg base_font', {'text-[9px]': isTabletOrMobile})} >
                            <thead className='h-[60px] text-center bg_base text-white font-[700]'>
                            <tr className={cn('border-b pb-2', {'h-[40px]': isTabletOrMobile})}>
                                <th colSpan={2}>
                                    사업자 유형
                                </th>
                                <th>
                                    파손보장
                                </th>
                                <th>
                                    연장보증(고장수리)
                                </th>
                                <th>
                                    파손보장 + 연장 보증
                                </th>
                            </tr>
                            </thead>
                            <tbody className='bg-white'>
                            <tr className='border-b h-[60px]'>
                                <td className='text-center border-r min-w-[40px]' rowSpan={2}>
                                    택시
                                </td>
                                <td className='text-center border-r'>
                                    법인택시
                                </td>
                                <td className='text-center '>
                                    98,000원
                                </td>
                                <td className='text-center border-r border-l' rowSpan={4}>
                                    2024년 5월 출시
                                </td>
                                <td className='text-center' rowSpan={4}>
                                    2024년 5월 출시
                                </td>
                            </tr>
                            <tr className='border-b h-[60px]'>
                                <td className='text-center border-r'>
                                개인(조합) 택시
                                </td>
                                <td className='text-center'>
                                    57,000원
                                </td>
                            </tr>
                            <tr className='border-b h-[60px]'>
                                <td className='text-center border-r min-w-[40px]' rowSpan={2}>
                                    물류
                                </td>
                                <td className='text-center border-r'>
                                    법인 물류
                                </td>
                                <td className='text-center'>
                                    53,000원
                                </td>
                            </tr>
                            <tr className='border-b h-[60px]'>
                                <td className='text-center border-r'>
                                    개인 물류
                                </td>
                                <td className='text-center'>
                                    53,000원
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ProductWrap/>
            <div
                className='mx-auto my-0 bg-white w-[calc(100%-80px)] max-w-[1062px] border-b-[2px] border-black  pb-[80px]' ref={infoRef}>
                <h2 className=' font-[400] text-[18px]'>
                    서비스 정보
                </h2>
                <div className='flex flex-col text-black space-y-28' ref={infoRef}>
                    <div className='flex_center w-full'>
                        <div className={cn(' base_font', {'text-[32px] basis-2/3' : isDesktopOrLaptop, 'text-[22px]' : isTabletOrMobile})}>
                            <div className='font-bold text-black flex flex-col'>
                                <p>
                                    영업용 EV 배터리팩 자차보험
                                </p>
                            </div>
                            <div className={cn({'text-[22px]': isDesktopOrLaptop, 'text-[18px]' : isTabletOrMobile})}>
                                사고, 자기과실로인한 파손, 화재, 침수 그리고 보증기간 이후 배터리 고장(선택) 시
                                신품성능과 유사한 <span className='font-bold'>리퍼비시배터리 교체 서비스</span>를 진행합니다
                            </div>
                        </div>
                        {
                            isDesktopOrLaptop &&
                            <div className='basis-1/3 pt-[20px] pl-8'>
                                <img src={Icon1} alt={'아이콘1'} width={200}/>
                            </div>
                        }
                    </div>

                    <div className='flex_center w-full'>
                        <div className={cn('base_font', {
                            'text-[32px] basis-2/3': isDesktopOrLaptop,
                            'text-[22px]': isTabletOrMobile
                        })}>
                            <div className='font-bold text-black flex flex-col'>
                                <p>
                                    차량 관리 / 차량 운행 관리
                                </p>
                            </div>
                            <div className={cn({'text-[22px]': isDesktopOrLaptop, 'text-[18px]': isTabletOrMobile})}>
                                <span className='font-bold'>FMS(Fleet Management System)</span>을 활용하여 실시간 데이터를 활용하여 효율적인
                                차량 운행 및 차량 관리가 가능합니다.
                                또한 딥러닝 기술을 활용한 안전운행점수를 제공하여 택시, 물류차의 사고율을 낮추는데 기여합니다.
                            </div>
                        </div>
                        {
                            isDesktopOrLaptop &&
                            <div className='basis-1/3 pt-[20px] pl-8'>
                                <img src={Icon2} alt={'아이콘2'} width={200}/>
                            </div>
                        }
                    </div>


                    <div className='flex_center w-full'>
                        <div className={cn(' base_font', {
                            'text-[32px] basis-2/3': isDesktopOrLaptop,
                            'text-[22px]': isTabletOrMobile
                        })}>
                            <div className='font-bold text-black flex flex-col'>
                                <p>
                                    배터리팩 건강관리
                                </p>
                            </div>
                            <div className={cn({'text-[22px]': isDesktopOrLaptop, 'text-[18px]': isTabletOrMobile})}>
                                배터리팩의 <span className='font-bold'>BMS(Battery Management Sysytem)</span> 진단데이터를 활용하여
                                배터리의 건상상태를
                                진단하므로써 현재의 배터리 상태와 배터리를 건강하게 사용할수 있는 환경 그리고 예기치 못한 배터리문제를
                                예측하여 전기자동차의 안정적인 운영을 지원합니다
                            </div>
                        </div>
                        {
                            isDesktopOrLaptop &&
                            <div className='basis-1/3 pt-[20px] pl-8'>
                                <img src={Icon3} alt={'아이콘3'} width={200}/>
                            </div>
                        }
                    </div>

                    <div className='flex_center w-full'>
                        <div className={cn(' base_font', {
                            'text-[32px] basis-2/3': isDesktopOrLaptop,
                            'text-[22px]': isTabletOrMobile
                        })}>
                            <div className='font-bold text-black flex flex-col'>
                                <p>
                                    리퍼비시배터리 할인 구매{isTabletOrMobile &&<br/>}
                                    <span className={cn({'text-[20px]': isDesktopOrLaptop, 'text-[16px]': isTabletOrMobile})}>(서비스 3년 계약이력 시)</span>
                                </p>

                            </div>
                            <div className={cn({'text-[22px]': isDesktopOrLaptop, 'text-[18px]': isTabletOrMobile})}>
                                장기간 운행으로 배터리의 건강상태가 악화되어 운수사압에 지장이 있을 시 소비자 구매의사에 따라
                                신품과 유사한 성능의 리퍼시비배터리를 <span className='font-bold'>최대 25%</span> 저렴한 가격으로 제공하여 차량의 추가구매 없이
                                Life Cycle 늘려 운수사업자의 수익성을 향상 시킵니다.
                            </div>
                        </div>
                        {
                            isDesktopOrLaptop &&
                            <div className='basis-1/3 pt-[20px] pl-8'>
                                <img src={Icon4} alt={'아이콘4'} width={200}/>
                            </div>
                        }
                    </div>
                    <div className='w-full flex_center mt-8'>
                        <button onClick={onClickHadnler} className='w-[192px] h-[40px] border rounded-2xl bg_base text-white font-[700]'>
                            보험약관 다운로드
                        </button>
                    </div>
                </div>
            </div>
            <ProductWrap/>
            <div
                className='mx-auto my-0 bg-white w-[calc(100%-80px)] max-w-[1062px] border-b-[2px] border-black  pb-[80px]'
                ref={qaRef}>
                <div className='flex flex-col text-black'>
                    <h2 className=' font-[400] text-[18px]'>
                        자주 묻는 질문
                    </h2>
                    <QnaDiv/>
                </div>
            </div>
        </div>
    )
}
