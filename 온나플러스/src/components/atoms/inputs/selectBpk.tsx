import React, {useEffect, useState} from "react";
import {InfoProps} from "./carNumInput";

const SelectBpk = (props : {info : InfoProps, setInfo : React.Dispatch<React.SetStateAction<InfoProps>>} ) => {
    const [bpk, setBpk] = useState<string>('')
    useEffect(() => {
        props.setInfo((prevState) => {
            return { ...prevState, bpk: bpk }
        });
    }, [bpk]);
    return(
        <div className='pt-8 flex flex-col w-full'>
            <div className='sub_title pb-2 pl-4 flex '>
                업체선택
            </div>
            <div className='sub_title pb-4 pl-1 flex '>
                <select  className='input ml-2' onChange={(e : React.ChangeEvent<HTMLSelectElement>)=> setBpk(e.target.value)}>
                    <option defaultValue={'none'}>
                        선택
                    </option>
                    <option value={'onna'}>
                        온나플러스
                    </option>
                    <option value={'enuri'} disabled={true}>
                        이누리
                    </option>
                    <option value={'barico'} disabled={true}>
                        바리코퍼레이션
                    </option>
                </select>
            </div>
        </div>
    )
}
export default SelectBpk;