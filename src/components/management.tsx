import cn from "classnames";
import React, {useEffect, useState} from "react";
import {Location} from "../@types/common";
import {useMediaQuery} from "react-responsive";
import {searchData} from "../api/fetchData";
import {isScrollable} from "../utils/common";
import Modals from "./common/modals";
import EditModal from "./editModal";

export default function Management(){
    const [data, setData] = useState<Location[]>([]);
    const [parkingName, setParkinName] = useState('');
    const isPc = useMediaQuery({ query: "(min-width: 990px)" });
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [edit, setEdit] = useState(false);
    const [editData, setEditData] = useState({});
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
        console.log("Flag changed:", isOpen);
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    useEffect(() => {
        console.log("Flag changed:", edit);
        if (edit) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [edit]);

    useEffect(() => {
        setScrolled(isScrollable);
    }, [data]);
    return(
        <div className={cn('w-full flex flex-col', {'h-[400px]': !scrolled, 'pb-[160px]' : scrolled})}>
            <div className={cn('flex items-center w-full space-x-4 justify-center',{'text-[10px]': !isPc})}>
                <div className='border w-[300px] h-[40px] flex items-center'>
                    <label className='basis-1/3 h-full flex_center bg-[#eeeeee] w-[60px]'>
                        현장
                    </label>
                    <input type={'text'} className='w-full h-full px-2' placeholder={'현장명을 입력해주세요.'}
                           onChange={(e: React.ChangeEvent<HTMLInputElement>) => setParkinName(e.currentTarget.value)}
                           onKeyDown={handleKeyDown}
                    />
                </div>
                <div className='w-[60px] h-[40px] flex_center border'>
                    <button className='w-full h-full bg_base text-white' onClick={onClickSearch}>
                        검색
                    </button>
                </div>
                <div className='w-[80px] h-[40px] flex_center border'>
                    <button className='w-full h-full bg_base text-white' onClick={(e:React.MouseEvent) => setIsOpen(!isOpen)}>
                        현장추가
                    </button>
                </div>
            </div>
            <div className='w-full mt-8'>
                {data.length > 0 && (
                    <table className={cn('w-full border',{'text-[10px]' : !isPc})}>
                        <thead>
                        <tr className='h-[40px] bg_base text-white'>
                            <th className='border-r'>코드</th>
                            <th className='border-r'>현장명</th>
                            <th className='border-r'>영업관할</th>
                            <th>수정</th>
                        </tr>
                        </thead>
                        {data.map((location, index) => (
                            <tbody key={index} className='text-black'>
                            <tr className='text-center h-[60px] border-b'>
                                <td rowSpan={2} className='border-r'>{location.PJTcode}</td>
                                <td className='border-r'>{location.pklName}</td>
                                <td className='border-r'>{location.sales_region}</td>
                                <td rowSpan={2}><button className={cn(' border text-white bg-[#007bff] rounded-lg',{'h-[28px] w-[40px] text-[9px]' : !isPc, 'h-[40px] w-[80px]' : isPc})} onClick={(event :React.MouseEvent<HTMLButtonElement>) => {setEdit(!edit); setEditData(location)}}>수정</button></td>
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
            </div>
            {
                isOpen &&
                <Modals type={'manage'} pklName={''} PJTcode={''} setFlag={setIsOpen} flag={isOpen}/>
            }
            {
                edit &&
                <EditModal flag={edit} setFlag={setEdit} editData={editData} setData={setData}/>
            }
        </div>
    )
}
