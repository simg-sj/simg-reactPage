import dayjs from "dayjs";
import getDate from "../utils/getDate";
import {excelDownload} from '../utils/common';
import More from '../assets/images/icon_more.svg';
import Excel from '../assets/images/uxicon-excel.png';
import React, {  SetStateAction, useEffect, useState } from "react";
import cn from 'classnames';
import Close from '../assets/images/btn_close_24px.svg';
import axiosInstance from '../api/axiosInstans';
import { Link } from 'react-router-dom';
import Down from '../assets/images/download-solid.svg';

interface Props {
    card : boolean,
    setCard: React.Dispatch<SetStateAction<boolean>>
}
export default function HomeCard({card, setCard} : Props){
    const today = dayjs().format('YYYY-MM-DD');
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result: any = await axiosInstance.get(`/getToday?today='${today}'`);
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    return (
        <div
            className={cn('absolute z-100  flex  transition-height duration-75 ease-in-out', {
                'card_close': !card,
                'card_open': card
            })}>
            {
                card ?
                    <div className='flex flex-col mt-8 items-center'>
                        <div className='w-full flex_center'>
                            <p className='font-[700] text-[20px] basis-3/4 text-end'>{getDate(today)} 현황</p>
                            <div className='ml-auto basis-1/4 items-end cursor-pointer flex items-center justify-end' onClick={(event: React.MouseEvent<HTMLDivElement>) => setCard(false)}>
                                <img src={Close} alt={'close'}/>
                            </div>
                        </div>
                        <div className='h_carBody'>
                            <div className='flex items-center'>
                                <p className='base_font'>마이체크업 접수 현황</p>
                                <Link to={'/mycheckup'}>
                                    <img src={More} alt={'more'}/>
                                </Link>
                            </div>
                            <div className='flex base_font w-full h-[80px]'>
                                <div className='flex flex-col basis-1/2 justify-center'>
                                    <p>접수 : {data.length > 0 ? Object.keys(data[1]).length : '0'} 건</p>
                                </div>
                                <div className='basis-1/2 justify-center items-center flex'>
                                    <button
                                        onClick={(event: React.MouseEvent<HTMLButtonElement>) => excelDownload('마이체크업', data[1])}>
                                        <img src={Excel} alt={'excel'} width={40}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='h_carBody'>
                            <div className='flex items-center'>
                                <p className='base_font'>벨류맵 접수 현황</p>
                                <Link to={'/valuemap'}>
                                    <img src={More} alt={'more'}/>
                                </Link>
                            </div>
                            <div className='flex base_font h-[80px]'>
                                <div className='flex flex-col basis-1/2 justify-center'>
                                    <p>접수 : {data.length > 0 ? Object.keys(data[0]).length : '0'} 건</p>
                                </div>
                                <div className='flex h-full basis-1/2 justify-center items-center'>
                                    <button onClick={(event : React.MouseEvent<HTMLButtonElement>) => excelDownload('벨류맵',data[0])}>
                                        <img src={Excel} alt={'excel'} width={40}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='border w-[60px] h-[60px] flex_center border rounded-full bg-white'>
                        <button className='h-full w-full flex_center'
                                onClick={(event: React.MouseEvent<HTMLButtonElement>) => setCard(true)}>
                            <img src={Down} alt={'Down'} width={30}/>
                        </button>
                    </div>
            }
        </div>
    )
}
