import GetLocation from "./getLocation";
import React, {useEffect, useState} from "react";
import {Location} from '../@types/common';
import cn from 'classnames';
import {useMediaQuery} from "react-responsive";
import {searchData} from "../api/fetchData";
import {isScrollable} from "../utils/common";

export default function InsuRequest(){
    const [data, setData] = useState<Location[]>([]);
    const [parkingName, setParkinName] = useState('');
    const isPc = useMediaQuery({ query: "(min-width: 990px)" });
    const [scrolled, setScrolled] = useState(false);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onClickSearch();
        }
    };

    const onClickSearch = async () => {
        const trimmedValue = parkingName.trim();
        if (trimmedValue) {
            await searchData(trimmedValue).then((result) => setData(result));
        }
    }

    useEffect(() => {
        setScrolled(isScrollable);
    }, [data]);
    return(
        <div className={cn('w-full pt-[120px]', {'h-[400px]': !scrolled, 'pb-[140px]' : scrolled})}>
                <div className='div_wrap flex_center'>
                    <div className='my-8 w-full flex_center flex-col'>
                        <div className={cn('flex items-center  border h-[50px]',{'w-[450px] text-[16px]' : isPc, 'w-[300px] text-[9px]' : !isPc})}>
                            <div
                                className=' text-black font-[500] h-full flex_center border-r basis-1/3'>
                                주차장명
                            </div>
                            <input type='text' className='search_input'
                                   onChange={(e:React.ChangeEvent<HTMLInputElement>) => setParkinName(e.currentTarget.value)}
                                   onKeyDown={handleKeyDown}
                            />
                            <div
                                className=' text-black  font-[500] h-full flex_center border-r basis-1/3'>
                                <button className='w-full h-full text-white bg_base hover:text-[#FFD840]' onClick={onClickSearch}>
                                    SEARCH
                                </button>
                            </div>
                        </div>
                        <GetLocation data={data}/>
                    </div>
                </div>
        </div>
    )
}
