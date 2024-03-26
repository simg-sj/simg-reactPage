import React from 'react';
import LogoIcon from '../assets/images/logo.svg';
import Process from '../assets/images/process.png';

const Section1: React.FC = () => {
    return (
        <div className='flex-col flex items-center w-full mt-[90px] bg-[#f8f9fb] my-[100px]'>
            <div className='h-[150px] w-[300px] flex items-center justify-center border-b-4'>
                <img src={LogoIcon} alt={'logo'}  width={200}/>
            </div>
            <div className='mt-8 text-lg font-normal h-[100px]'>
                <h2>보험금 청구</h2>
            </div>
            <div className='w-full bg-white flex_center flex-col'>
                <div className='h-[100px] w-[300px] flex items-center justify-center border-b-4'>
                    <h2 className='text-[30px] font-bold color_base'>보험금 지급절차</h2>
                </div>
                <div className='mt-8 text-lg font-normal'>
                    <img src={Process} alt={'process'}/>
                </div>
            </div>
        </div>
    );
};

export default Section1;
