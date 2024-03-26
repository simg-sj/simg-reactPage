import React, {useState} from "react";
import {InfoProps} from "./carNumInput";

const AutoPay = (props : {info : InfoProps, setInfo : React.Dispatch<React.SetStateAction<InfoProps>>}) => {

    const onChangeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {id} = e.target;
        const {value} = e.target;
        if(id === 'bank'){
            props.setInfo((prevState) => {
                return { ...prevState,
                    cBank: e.target.value,
                }
            });
        }
        if(id === 'account'){
            props.setInfo((prevState) => {
                return { ...prevState,
                    cAccount : e.target.value
                }
            });
        }
    }
    const onChangeSelect = (e : React.ChangeEvent<HTMLSelectElement>) => {
        const {value} = e.target;
                props.setInfo((prevState) => {
                    return { ...prevState,
                        cPayDt: value
                    }
                });
    }
    return (
        <div className='flex-col pb-8 px-2 pt-4'>
            <div className='flex items-center'>
                <div className='flex-col'>
                    <div className='sub_title pb-1 pl-2 pr-4'>
                        은행명
                    </div>
                    <input type={'text'} id={'bank'}  onChange={onChangeHandler} className='input basis-1/3' placeholder='은행명을입력해주세요'/>
                </div>
                <div className='flex-col pl-8'>
                    <div className='sub_title pb-1 pl-2 '>
                        계좌번호
                    </div>
                    <input type={'text'} id={'account'}  onChange={onChangeHandler} className='input basis-1/3' placeholder='계좌번호를 입력해주세요'/>
                </div>
            </div>
            <div className='flex items-center mt-8'>
                <div className='flex-col'>
                    <div className='sub_title pb-1 pl-2 pr-4'>
                        납입일자
                    </div>
                    <select className='w-[230px] border rounded-lg py-1 px-4' id={'smokeY'} onChange={onChangeSelect}>
                        <option>
                            선택
                        </option>
                        <option value={'05'}>
                            매월 5일
                        </option>
                        <option value={'10'}>
                            매월 10일
                        </option>
                        <option value={'20'}>
                            매월 20일
                        </option>
                        <option value={'25'}>
                            매월 25일
                        </option>
                    </select>
                </div>
            </div>
        </div>
    )
}
export default AutoPay;