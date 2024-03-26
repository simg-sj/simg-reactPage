import {getCode, getName} from '../utils/common';
import React, { SetStateAction, useState, useEffect } from 'react';
import TextInput from '../components/commons/baseText';
import {excelDownload} from '../utils/common';
import Excel from '../assets/images/uxicon-excel.png';
import {Person} from '../@types/common';
import SearchIcon from '../assets/images/search.svg';
import axiosInstance from '../api/axiosInstans';
import dayjs from 'dayjs';
interface Props {
    type : string,
    count : number,
    data : Person[],
    setData : React.Dispatch<SetStateAction<Person[]>>
}

interface Param {
    [key: string]: string;
}
export default function Search({type, count, data, setData} : Props){
    const today = dayjs().format('YYYY-MM-DD');
    const [cmpk, setCmpk] = useState('');
    const [cName, setCname] = useState('');
    const [cCell, setCcell] = useState('');
    const [cJumin, setCjumin] = useState('');
    const [toDate, setToDate] = useState(dayjs().subtract(7, 'day').format('YYYY-MM-DD'));
    const [fromDate, setFromDate] = useState(today);

    const fetchData = async () => {
        try {
            let bpk = getCode(type);
            let param : Param = {
                bpk : bpk,
                cmpk : cmpk,
                cName : cName,
                cCell : cCell,
                cJumin : cJumin,
                toDate: toDate,
                fromDate: fromDate
            }
            const result: any = await axiosInstance.post('/searchData',param);
            setData(result);
            if(result.length <= 0 ){
                alert("데이터가 없습니다.")
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const onClickHandler = (e: React.MouseEvent) => {

        fetchData();
    }

    useEffect(() => {
        console.log('@@')
        fetchData();
    }, []);
    return (
        <div className='pl-[90px] w-full mt-8'>
            <div className='min-w-[1440px] px-4 '>
                <p className='font-bold'>{getName(type)}</p>
                <div className='flex w-full'>
                    <div className='basis-1/3'>
                        <p>총 : {count}건</p>
                    </div>
                    <div className='basis-2/3 flex_center'>
                        <TextInput
                            classnames={'w-[120px]'}
                            text={'고객키'}
                            value={cmpk}
                            onChange={(e) => setCmpk(e.target.value)}
                        />
                        <TextInput
                            classnames={'w-[120px]'}
                            text={'핸드폰'}
                            value={cCell}
                            onChange={(e) => setCcell(e.target.value)}
                        />
                        <TextInput
                            classnames={'w-[100px]'}
                            text={'생년월일'}
                            value={cJumin}
                            onChange={(e) => setCjumin(e.target.value)}
                        />
                        <TextInput
                            classnames={'w-[60px]'}
                            text={'이름'}
                            value={cName}
                            onChange={(e) => setCname(e.target.value)}
                        />
                        <div className='flex_center'>
                            <label className='w-[60px] text-center mx-1'>
                                날짜
                            </label>
                            <input className='px-2 text_input' type={'date'} defaultValue={toDate}
                                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setToDate(e.target.value)}/>
                            <h2 className='mx-2'>~</h2>
                            <input className='px-2 text_input' type={'date'} defaultValue={fromDate}
                                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFromDate(e.target.value)}/>
                        </div>
                        <div className='ml-4 border flex_center w-[30px] h-[30px] rounded-lg'>
                            <button className='outline-none' onClick={onClickHandler}>
                            <img src={SearchIcon} alt={'search'} width={20}/>
                            </button>
                        </div>
                        <div className='mx-8'>
                            <button
                                onClick={(event: React.MouseEvent<HTMLButtonElement>) => excelDownload(getName(type), data)}>
                                <img src={Excel} alt={'excel'} width={40}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
