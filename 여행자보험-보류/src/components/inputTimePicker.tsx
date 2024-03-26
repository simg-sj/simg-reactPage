import React, {useRef} from 'react';
import 'swiper/css';
import ClockIcon from '../asset/images/clock-regular.svg';
import XIcon from '../asset/images/xmark-solid.svg';
import {Controller} from "react-hook-form";
function inputTimePicker({ control, name } : any ) {
    /*const TIME_HOURS =
        [
            100,130,200,230,300,330,400,430,500,530,600,630,700,730,800,830,900,930,1000,1030,1100,1130,1200,1230,1300,1330,1400,1430,1500,1530,1600,1630,1700,1730,
            1800,1830,1900,1930,2000,2030,2100,2130,2200,2230,2300,2330,2400,2430
        ];*/
    const TIME_HOURS = [
        1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24
    ]
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const inputRef2 = useRef<HTMLInputElement>(null);

    return (
        <Controller
        rules={{ required: true}}
        control={control}
        name='strDate'
        // render를 사용해서, field값을 복사하거나 꺼내 쓰면 된다.
        // field안에는 value나 onBlur와 같은 함수도 있음
        // render안의 onChange를 조작해, onChange안에 들어갈 값을
        // 선택할 수 있다.
        render={({ field: { onChange } }) => (
            // antd의 datepicker에서 e.target.value는
            // moment 객체 그대로를 반환하기에,
            // "2021-04-15"와 같은 값을 얻고싶다면, 두번째 파라미터
            // "dateString"을 추가해서 값을 넣어야 한다.
            <div className='w-[160px] h-[35px] relative border rounded-md mt-2 border-[#000000]/20'>
                <div className='flex items-center py-2 px-2'>
                    <input className='w-[110px] ml-[5px] text-[12px] font-[400]' onChange={onChange} type={'text'}  placeholder={name === 'strTime' ? '출발 시간' : '도착 시간'}   readOnly={true} />
                    <button className='ml-[5px]' onClick={(e:React.MouseEvent<HTMLButtonElement>)=> console.log('show')}> <img src={ClockIcon} width={'18px'} alt={'clock'}/> </button>
                </div>
            </div>
        )}
    />
    );
};

export default inputTimePicker;
