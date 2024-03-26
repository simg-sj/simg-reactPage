import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../redux";
import dayjs from "dayjs";
import useCountNum from "../hooks/useCountUp";
import checkOn from '../asset/images/icon_checkbox_16px_on.svg';
import checkOff from '../asset/images/icon_checkbox_16px_off.svg';
import Fab from '@mui/material/Fab';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import {useFieldArray, useForm, Controller, SubmitHandler} from "react-hook-form";
import {ModalProps} from "../@types/tour";
import {getPlan} from "../utils/common";
import Slider from "react-slick";


type UserInfoType = {
    pair : {
        name : string
        jumin : string
        phone : string
        email : string
    }[]
}

interface Step1Props extends ModalProps {
    setMsg: React.Dispatch<React.SetStateAction<string>>;
    isOpen: boolean;
}

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    rows: 1,
    vertical : false,
};

const Step3: React.FC<Step1Props> = ({ setMsg, isOpen, setIsOpen }) => {
    const isMobile = useSelector((state : RootState) => state.mobile.isMobi);
    const state = useSelector((state : RootState) => state.user);
    const [activeChild, setActiveChild] = useState(0);
    const { control, handleSubmit } = useForm<UserInfoType>({
        mode : "onChange",
    })

    const {
        fields: pairFields,
        append,
        remove,
    } = useFieldArray({
        control,
        name: 'pair',
    })

    const removePair = (item: { id: string }) => {
        const idx = pairFields.map(item => item.id).indexOf(item.id)
        idx !== -1 && remove(idx)
        setActiveChild(activeChild-1);
    }

    const addPair = () => {
        append({ name: '', jumin: '', phone: '', email: '' });
        setActiveChild(activeChild+1);
    }

    const onSubmit: SubmitHandler<UserInfoType> =  (data) => {
        console.log('success')
        console.log(data)
    };

    const onError = (errors: any) => {
        let errorUser = errors.pair.length -1;
        if(errorUser === 0){
            setMsg('계약자 정보를 확인해주세요');
        }else {
            setMsg(`동반인 ${errorUser} 정보를 확인해주세요`);
        }
        console.log(activeChild);
        setIsOpen(true);
    };
    useEffect(() => {
        if(activeChild === 0){
            addPair();
        }
    }, []);
    return (
        <div className="w-full h-full flex-col">
            <div className={isMobile ? 'mobile_step1' : 'flex items-center flex-col mt-4 h-full mx-6 relative'}>
                <div className=" border-b-2 font-bold text-[16px] w-full pb-4 flex flex-col border-dotted border-[#0050AE]">
                    <h2 className='base_color font-extrabold text-[16px]'>보험료</h2>
                    <div className='flex w-full h-full'>
                        <div className='flex flex-col basis-1/3'>
                            <span className='base_text'>보험기간 : {dayjs(state.toDate).diff(dayjs(state.fromDate),'days')}일</span>
                            <span className='base_text'>여행인원 : {activeChild}명</span>
                            <span className='base_text'>선택 플랜 : {getPlan('hnsb1001')}</span>
                        </div>
                        <div className='center-flex basis-1/3 text-[18px] border rounded-lg bg-[#0075FF] text-white justify-end ml-auto mt-6'>
                            <h2 className='pr-2'>
                                {useCountNum(12000)}원
                            </h2>
                        </div>
                    </div>
                </div>
                <div className='w-full text-[12px] mt-2 font-normal center-flex'>
                    <span className='mr-auto'>
                        보험가입을 위해 개인정보수집 등에 동의 합니다.
                    </span>
                    <div className='border w-[20px] h-[20px] rounded-full mr-4 mt-1'>
                        <button className='w-full h-full center-flex'>
                            <img src={checkOff} alt={'check'}/>
                        </button>
                    </div>
                </div>
                <div className="border-[#0050AE] border-t-2 border-b-2 font-bold text-[16px] w-full pb-8 flex flex-col border-dotted pt-2 mb-4 mt-8">
                    <h2 className='base_color font-extrabold text-[16px]'>여행자 정보 입력</h2>
                    <div className='w-full flex flex-col h-[160px]'>
                        <form onSubmit={handleSubmit(onSubmit, onError)}>
                            <Slider {...settings} >
                                {pairFields?.map((item, idx) => {
                                    return (
                                        <div key={idx}>
                                            <Controller
                                                name = {`pair.${idx}.name`}
                                                control = {control}
                                                rules={{ required: true}}
                                                render = {({field : {onChange, value }}) => (
                                                    <div className='pt-2 w-full'>
                                                        {idx === 0 ?
                                                            <h2>계약자 정보</h2>
                                                            :
                                                            <div className='flex w-full'>
                                                                <h2>동반자 정보 {idx}</h2>
                                                                <button type='button' className=' pl-4' onClick={(event : React.MouseEvent<HTMLButtonElement>)=>removePair(item)}>
                                                                    <DeleteOutlineIcon />
                                                                </button>
                                                            </div>
                                                        }
                                                        <div className='flex mt-4'>
                                                            <label className='basis-1/4 base_text'>성명</label>
                                                            <input type="text" className="input basis-3/4 h-[20px]" onChange={onChange} />
                                                        </div>
                                                    </div>
                                                )}
                                            />
                                            <Controller
                                                name = {`pair.${idx}.jumin`}
                                                control = {control}
                                                rules={{ required: true}}
                                                render = {({field : {onChange, value }}) => (
                                                    <div className='flex mt-4'>
                                                        <label className='basis-1/4 base_text'>주민번호</label>
                                                        <input type={'text'} className='input basis-3/4 h-[20px]' onChange={onChange}/>
                                                    </div>
                                                )}
                                            />
                                            <Controller
                                                name = {`pair.${idx}.phone`}
                                                control = {control}
                                                rules={{ required: true}}
                                                render = {({field : {onChange, value }}) => (
                                                    <div className='flex mt-4'>
                                                        <label className='basis-1/4 base_text'>연락처</label>
                                                        <input type={'text'} className='input basis-3/4 h-[20px]' onChange={onChange}/>
                                                    </div>
                                                )}
                                            />
                                            {
                                                idx === 0 &&
                                                <Controller
                                                    name = {`pair.${idx}.email`}
                                                    control = {control}
                                                    rules={{ required: true}}
                                                    render = {({field : {onChange, value }}) => (
                                                        <div className='flex mt-4'>
                                                            <label className='basis-1/4 base_text'>이메일</label>
                                                            <input type={'text'} className='input basis-3/4 h-[20px]' onChange={onChange}/>
                                                        </div>
                                                    )}
                                                />
                                            }
                                        </div>
                                    )}
                                )}
                            </Slider>
                        </form>
                    </div>
                </div>
                <Fab size="small" color="primary" aria-label="add" className='bg-[#0075FF]' onClick={addPair}>
                    <AddIcon className='w-[20px] h-[20px]'/>
                </Fab>
                <div className={isMobile ? 'mobile_footer' : 'web_footer'}>
                    <button type="button" className="w-full h-full" onClick={handleSubmit(onSubmit,onError)} >
                        보험료 납입하기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Step3;
