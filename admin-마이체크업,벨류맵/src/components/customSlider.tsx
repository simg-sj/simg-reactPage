import React from "react";
import Slider from "react-slick";
import Left from '../assets/images/left.svg';
import Right from '../assets/images/right.svg';
import {Person} from '../@types/common';

function SampleNextArrow(props : any) {
    const {  onClick } = props;
    return (
        <button
            className='customNext'
            onClick={onClick}
        >
            <img src={Right} alt={'left'} width={20}/>
        </button>
    );
}

function SamplePrevArrow(props : any) {
    const { onClick } = props;
    return (
        <button
            className='customPrev'
            onClick={onClick}
        >
            <img src={Left} alt={'left'} width={20}/>
        </button>
    );
}

interface Props {
    data : Person[]
}
function CustomSlider({data} : Props) {
    const settings = {
        dots: true,
        infinite: true,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: Math.min(data.length, 4), // 데이터 배열의 길이와 4 중 작은 값을 사용
        slidesToScroll: Math.min(data.length, 4), // 데이터 배열의 길이와 4 중 작은 값을 사용
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className="h-full w-full">
            <div className='w-[1660px] min-w-[1240px]'>
                {
                    data.length > 0 ?
                        <Slider {...settings}>
                            {
                                data.map((person, index) =>
                                    <div className=' h-[100px] bg-white border rounded-xl mb-8 shadow px-4 flex flex-col' key={index}>
                                        <table className="table-auto w-full">
                                            <thead className='h-[45px] font-[500]'>
                                            <tr className='border-b pb-2'>
                                                <th>
                                                    No.
                                                </th>
                                                <th>
                                                    고객키
                                                </th>
                                                <th>
                                                    신청자
                                                </th>
                                                <th>
                                                    핸드폰
                                                </th>
                                                <th>
                                                    생년월일
                                                </th>
                                                <th>
                                                    나이(성별)
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody className='base_font'>
                                            <tr>
                                                <td className='text-center pt-4'>
                                                    {index + 1}
                                                </td>
                                                <td className='text-center pt-4'>
                                                    {person.cmpk}
                                                </td>
                                                <td className='text-center pt-4'>
                                                    {person.cName}
                                                </td>
                                                <td className='text-center pt-4'>
                                                    {person.cCell}
                                                </td>
                                                <td className='text-center pt-4'>
                                                    {person.cJumin}
                                                </td>
                                                <td className='text-center pt-4'>
                                                    {person.age}
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                )
                            }
                        </Slider>
                        :
                        <div className='w-full flex_center'>
                            <div className='w-[400px] h-[100px] bg-white border rounded-xl mb-8 shadow px-4 flex_center'>
                                <p>신청건이 없습니다.</p>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
}

export default CustomSlider;
