import CheckOff from "../../../assets/images/icon_checkbox_14px_off.svg";
import MoreIcon from '../../../assets/images/icon_more.svg';
import CheckOn from '../../../assets/images/icon_checkbox_14px_on.svg';
import React, {useEffect, useState} from "react";
import AgreeText from "./agreeText";
interface AgreeProps {
    agree : boolean,
    setAgree : React.Dispatch<React.SetStateAction<boolean>>
}
const AgreeButton =({agree, setAgree} :  AgreeProps) => {
    const [show, setShow] = useState(false);
    useEffect(() => {
    console.log(show)
    }, [show]);
    return (
        <div className='flex px-4 mt-4 base_text items-center border-b pb-8'>
            <button className='flex' onClick={(e : React.MouseEvent<HTMLElement>) => setShow(!show)}>
                소비자 권익보호에 관한 사항
                <img src={MoreIcon} alt={'more'}/>
            </button>
            <button className='ml-auto flex items-center' onClick={(e:React.MouseEvent<HTMLElement>) => setAgree(!agree)}><img src={agree ? CheckOn : CheckOff} alt={'check'} className='mr-2'/>동의</button>
            {show && <AgreeText sel={show} setSel={setShow} />}
        </div>
    )
}
export default AgreeButton;
