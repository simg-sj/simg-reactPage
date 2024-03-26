import MoreIcon from "../../../assets/images/icon_more.svg";
import CheckOff from "../../../assets/images/icon_checkbox_14px_off.svg";
import CheckOn from '../../../assets/images/icon_checkbox_14px_on.svg';
import React, {useEffect, useState} from "react";
import ConsntText from "./consntText";
interface ConsntProps {
    consnt : boolean,
    setConsnt : React.Dispatch<React.SetStateAction<boolean>>
}

const ConsntButton =({consnt, setConsnt} : ConsntProps) => {
    const [show, setShow] = useState<boolean>(false);
    useEffect(() => {
        console.log(consnt)
    }, [consnt]);
    return (
        <div className='flex mx-4 mt-4 base_text items-center'>
            <button className='flex' onClick={(e : React.MouseEvent<HTMLElement>) => setShow(!show)}>
                개인(신용)정보의 수집,이용에 관한 사항
                <img src={MoreIcon} alt={'more'}/>
            </button>
            <button className='ml-auto flex items-center' onClick={(e:React.MouseEvent<HTMLElement>)=>setConsnt(!consnt)} ><img src={consnt ? CheckOn : CheckOff} alt={'check'} className='mr-2'/>동의</button>
            {show && <ConsntText sel={show} setSel={setShow} />}
        </div>
    )
}
export default ConsntButton;