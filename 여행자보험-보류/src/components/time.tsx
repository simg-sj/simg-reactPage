import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Mousewheel } from 'swiper/modules';
import { cls } from "../hooks/utils";
import ClockIcon from '../asset/images/clock-regular.svg';
import XIcon from '../asset/images/xmark-solid.svg';
import { useController } from 'react-hook-form';

function Time({ control, name }: any) {
    const { field } = useController({
        name,
        control,
        rules: { required: true },
    });

    const TIME_HOURS = Array.from({ length: 24 }, (_, i) => i + 1);
    const inputRef = useRef<HTMLInputElement>(null);
    const [hours, setHours] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false);

    const onClickHandler = (hour: number) => {
        let temp = `${String(hour).padStart(2, '0')}:00`;
        if (inputRef.current) field.onChange(temp);
        setOpen(false);
    };

    const getTimeDisplay = (hour: number) => `${String(hour).padStart(2, '0')} : 00`;

    return (
        <div className='w-[160px] h-[35px] relative border rounded-md mt-2 border-[#000000]/20'>
            <div className='flex items-center py-2 px-2'>
                <input
                    className='w-[110px] ml-[5px] text-[12px] font-[400]'
                    ref={inputRef}
                    type='text'
                    placeholder={name === 'strTime' ? '출발 시간' : '도착 시간'}
                    name={field.name}
                    value={field.value}
                    readOnly={true}
                />
                <button type="button" className='ml-[5px]' onClick={() => setOpen(!open)}>
                    {!open ? <img src={ClockIcon} width={'18px'} alt={'clock'} /> : <img className='ml-1' src={XIcon} width={'14px'} alt={'xmark'} />}
                </button>
            </div>
            {open && (
                <div className='border w-[160px] shadow-xl rounded-xl absolute top-[40px] bg-white z-30'>
                    <div className='text-[12px] font-semibold center-flex pt-2'>
                        {name === 'strTime' ? '출발 시간' : '도착 시간'}
                    </div>
                    <Swiper
                        direction='vertical'
                        initialSlide={10}
                        modules={[Mousewheel]}
                        slidesPerView={3}
                        loop={true}
                        mousewheel={true}
                        loopAdditionalSlides={5}
                        slideToClickedSlide={true}
                        centeredSlides={true}
                        className='h-[160px] px-[1.1rem]'
                        onSlideChange={(swiper: any) => {
                            setHours(TIME_HOURS[swiper.realIndex]);
                        }}
                    >
                        {TIME_HOURS.map((hour: number) => (
                            <SwiperSlide key={hour}>
                                <div
                                    className={getClassNames(hours, hour)}
                                    onClick={() => onClickHandler(hour)}
                                >
                                    {getTimeDisplay(hour)}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className='w-full flex text-[12px] font-semibold'>
                        <div className={getButtonClassNames(false)} onClick={() => setOpen(!open)}>
                            <button type="button" className='w-full h-full'>취소</button>
                        </div>
                        <div className={getButtonClassNames(true)} onClick={() => onClickHandler(hours)}>
                            <button type="button" className='w-full h-full'>저장</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Time;

function getClassNames(hours: number, hour: number): string {
    return cls(
        'flex h-[40px] cursor-pointer items-center justify-center',
        hours === hour
            ? 'text-[15px] text-primary-700 font-bold border-b border-t base_color border-b-[#0075FF] border-t-[#0075FF]'
            : 'text-[12px]  font-medium'
    );
}

function getButtonClassNames(isSave: boolean): string {
    return cls(
        'basis-1/2 border text-center mx-2 my-2 rounded-lg py-1.5',
        isSave ? 'base_bg text-white' : 'border-black/40',
        'border'
    );
}
