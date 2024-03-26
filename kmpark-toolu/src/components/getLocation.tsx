import {Location} from '../@types/common';
import cn from 'classnames';
import {useMediaQuery} from "react-responsive";
import React, {useEffect, useState} from "react";
import Modals from "./common/modals";

interface Props {
    data: Location[]; // Location 타입의 배열을 받는 props
}

export default function GetLocation({ data }: Props) {
    const isPc = useMediaQuery({ query: "(min-width: 990px)" });
    const [flag, setFlag] = useState(false);
    const [param, setParam] = useState<Location>();
    const climRequest = (state : Location) => {
        setParam(state);
        setFlag(!flag);
    }

    useEffect(() => {
        console.log("Flag changed:", flag);
        if (flag) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [flag]);

    return (
        <div className={cn('w-full mt-8 flex_center', {'text-[10px]': !isPc, 'text-[14px]' : isPc})}>
            {data.length > 0 && (
                <table className='w-full border'>
                    <thead>
                    <tr className='h-[40px] bg_base text-white'>
                        <th className='border-r'>코드</th>
                        <th className='border-r'>현장명</th>
                        <th className='border-r'>영업관할</th>
                        <th>장애접수</th>
                    </tr>
                    </thead>
                    {data.map((location, index) => (
                        <tbody key={index} className='text-black'>
                        <tr className='text-center h-[60px] border-b'>
                            <td rowSpan={2} className='border-r'>{location.PJTcode}</td>
                            <td className='border-r'>{location.pklName}</td>
                            <td className='border-r'>{location.sales_region}</td>
                            <td rowSpan={2}><button className={cn(' border text-white bg-[#007bff] rounded-lg',{'h-[28px] w-[40px] text-[9px]' : !isPc, 'h-[40px] w-[80px]' : isPc})} onClick={(event : React.MouseEvent)=>climRequest(location)}>장애 접수</button></td>
                        </tr>
                        <tr className='h-[40px] border-b'>
                            <td colSpan={2} className='border-r pl-4'>
                                {location.pklAddress}
                            </td>
                        </tr>
                        </tbody>
                    ))}
                </table>
            )}
            {
                flag &&
                <Modals type={'clim'} PJTcode={param?.PJTcode} pklName={param?.pklName} flag={flag} setFlag={setFlag}/>
            }
        </div>
    );
}
