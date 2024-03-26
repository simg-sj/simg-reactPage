import React, {useEffect, useState} from "react";
import {InfoProps} from "./carNumInput";

const JobInput =(props : {info : InfoProps, setInfo : React.Dispatch<React.SetStateAction<InfoProps>>}) => {
    const [job, setJob] = useState<string>('');
    const [drink, setDrink] = useState<boolean>(false);
    const [smoke, setSmoke] = useState<boolean>(false);

    const onChangeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {id} = e.target;
        const {value} = e.target;
        if(id === 'job'){
            setJob(e.target.value);
            props.setInfo((prevState) => {
                return { ...prevState,
                    cJobN: e.target.value,
                }
            });
        }
        if(id === 'local'){
            props.setInfo((prevState) => {
                return { ...prevState,
                    cJobLocal : e.target.value
                }
            });
        }
        if(id === 'money') {
            props.setInfo((prevState) => {
                return { ...prevState,
                    cMoney: e.target.value
                }
            });
        }
        if(id === 'drink') {
            props.setInfo((prevState) => {
                return { ...prevState,
                    cDrink: e.target.value
                }
            });
        }
        if(id === 'drinkW') {
            props.setInfo((prevState) => {
                return { ...prevState,
                    cWeekD: e.target.value
                }
            });
        }
        if(id === 'oneDrink') {
            props.setInfo((prevState) => {
                return { ...prevState,
                    cOneD: e.target.value
                }
            });
        }
        if(id === 'smoke') {
            props.setInfo((prevState) => {
                return { ...prevState,
                    cJobN: e.target.value,
                    CJobLocal : e.target.value
                }
            });
        }
        if(id === 'weekS') {
            props.setInfo((prevState) => {
                return { ...prevState,
                    cWeekS: e.target.value,
                }
            });
        }
        if(id === 'oneS') {
            props.setInfo((prevState) => {
                return { ...prevState,
                    cOneS: e.target.value,
                }
            });
        }
        if(id === 'height') {
            props.setInfo((prevState) => {
                return { ...prevState,
                    cHeight: e.target.value,
                }
            });
        }
        if(id === 'weight') {
            props.setInfo((prevState) => {
                return { ...prevState,
                    cWeight: e.target.value,
                }
            });
        }
    }
    const onChangeSelect = (e : React.ChangeEvent<HTMLSelectElement>) => {
        const {value} = e.target;
        const {id} = e.target;
        if(id === 'drinkY'){
            if(value === 'Y'){
                setDrink(true);
                props.setInfo((prevState) => {
                    return { ...prevState,
                        cDrink: value
                    }
                });
            }else {
                setDrink(false);
                props.setInfo((prevState) => {
                    return { ...prevState,
                        cDrink: value
                    }
                });
            }
        }
        if(id === 'smokeY'){
            if(value === 'Y'){
                setSmoke(true);
                props.setInfo((prevState) => {
                    return { ...prevState,
                        cSmoke: value
                    }
                });
            }else {
                setSmoke(false);
                props.setInfo((prevState) => {
                    return { ...prevState,
                        cSmoke: value
                    }
                });
            }
        }
    }
    return(
        <div className='flex-col pb-8 px-2 pt-4'>
            <div className='flex items-center'>
                <div className='flex-col'>
                    <div className='sub_title pb-1 pl-2 pr-4'>
                        직장명
                    </div>
                    <input type={'text'} id={'job'} name={job} onChange={onChangeHandler} className='input basis-1/3' placeholder='직장명을 입력해주세요'/>
                </div>
                <div className='flex-col pl-8'>
                    <div className='sub_title pb-1 pl-2 '>
                        근무 지역
                    </div>
                    <input type={'text'} id={'local'} name={job} onChange={onChangeHandler} className='input basis-1/3' placeholder='근무지역을 입력해주세요'/>
                </div>
            </div>
            <div className='flex items-center mt-4'>
                <div className='flex-col'>
                    <div className='sub_title pb-1 pl-2 pr-4'>
                        월소득
                    </div>
                    <input type={'text'} id={'money'} name={job} onChange={onChangeHandler} className='input basis-1/3' placeholder='월소득을 입력해주세요'/>
                </div>
            </div>
            <div className='flex mt-8'>
                <div className='flex-col'>
                    <div className='sub_title pb-1 pl-2 pr-4'>
                        음주여부
                    </div>
                    <select  className='w-[230px]  border rounded-lg py-1 px-4' id={'drinkY'} onChange={onChangeSelect}>
                        <option>
                            선택
                        </option>
                        <option value={'Y'}>
                            예
                        </option>
                        <option value={'N'}>
                            아니오
                        </option>
                    </select>
                </div>
                <div className='flex-col pl-8'>
                    {
                        drink &&
                        <>
                            <div className='sub_title pb-1 pl-2 '>
                                주당 음주 횟수
                            </div>
                            <input type={'text'} id={'drinkW'} name={job} onChange={onChangeHandler} className='input basis-1/3' placeholder='주당 음주 횟수를 입력해주세요' />
                            <div className='sub_title pb-1 pl-2  mt-4'>
                                1회 음주시 주량
                            </div>
                            <input type={'text'} name={job} id={'oneDrink'} onChange={onChangeHandler} className='input basis-1/3' placeholder='1회 음주량을 입력해주세요' />
                        </>
                    }
                </div>
            </div>
            <div className='flex mt-8'>
                <div className='flex-col'>
                    <div className='sub_title pb-1 pl-2 pr-4'>
                        흡연여부
                    </div>
                    <select className='w-[230px] border rounded-lg py-1 px-4' id={'smokeY'} onChange={onChangeSelect}>
                        <option>
                            선택
                        </option>
                        <option value={'Y'}>
                            예
                        </option>
                        <option value={'N'}>
                            아니오
                        </option>
                    </select>
                </div>
                <div className='flex-col pl-8'>
                    {
                        smoke &&
                        <>
                            <div className='sub_title pb-1 pl-2 '>
                                1일당 흡연량
                            </div>
                            <input type={'text'} name={job} id={'weekS'} onChange={onChangeHandler} className='input basis-1/3' placeholder='흡연량을 입력해주세요(n 개피)' />
                            <div className='sub_title pb-1 pl-2  mt-4'>
                                흡연 기간
                            </div>
                            <input type={'text'} name={job}  id={'oneS'} onChange={onChangeHandler} className='input basis-1/3' placeholder='흡연 기간을 입력해주세요' />
                        </>
                    }
                </div>
            </div>
            <div className='flex items-center mt-8'>
                <div className='flex-col'>
                    <div className='sub_title pb-1 pl-2 pr-4'>
                        키
                    </div>
                    <input type={'text'} name={job} id={'height'} onChange={onChangeHandler} className='input basis-1/3' placeholder='키를 입력해주세요'/>
                </div>
                <div className='flex-col pl-8'>
                    <div className='sub_title pb-1 pl-2 '>
                        몸무게
                    </div>
                    <input type={'text'} name={job} id={'weight'} onChange={onChangeHandler} className='input basis-1/3' placeholder='몸무게를 입력해주세요'/>
                </div>
            </div>
        </div>
    )
}
export default JobInput;