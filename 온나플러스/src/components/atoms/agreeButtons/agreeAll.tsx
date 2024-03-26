import CheckOff from '../../../assets/images/icon_checkbox_16px_off.svg';
import CheckOn from '../../../assets/images/icon_checkbox_16px_on.svg';
import React from "react";

interface AllstatusProps {
    all : boolean,
    setAll : React.Dispatch<React.SetStateAction<boolean>>
}
const AgreeAll = ({all, setAll} : AllstatusProps) => {
    const onClickHadnler = (e : React.MouseEvent<HTMLElement>) => {
        setAll(!all);
    }
    return(
        <div className='flex w-full mt-8 mr-6 border-b pb-2 '>
            <button className='flex items-center w-full' onClick={onClickHadnler}>
                <div className={all ? 'checkOn' : 'checkOff'}>
                    <img src={all ? CheckOn : CheckOff} alt={'off'}/>
                </div>
                <h2 className='title_text text-[13px] ml-2 pb-1'>[필수] 고객정보 관리 및 가입설계를 위한 동의</h2>
            </button>
        </div>
    )
}
export default AgreeAll;