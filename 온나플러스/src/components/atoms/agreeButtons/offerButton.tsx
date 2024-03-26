import MoreIcon from "../../../assets/images/icon_more.svg";
import CheckOff from "../../../assets/images/icon_checkbox_14px_off.svg";
import CheckOn from '../../../assets/images/icon_checkbox_14px_on.svg';
import React, {useState} from "react";
import OfferText from "./offerText";

interface OfferProps {
    offer : boolean,
    setOffer : React.Dispatch<React.SetStateAction<boolean>>
}
const OfferButton =({offer, setOffer} : OfferProps) => {
    const [show, setShow] = useState<boolean>(false);
    return (
        <div className='flex mx-4 mt-4 base_text items-center '>
            <button className='flex' onClick={(e:React.MouseEvent<HTMLElement>) => setShow(!show)}>
                개인(신용)정보의 제공에 관한 사항
                <img src={MoreIcon} alt={'more'}/>
            </button>
            <button className='ml-auto flex items-center ' onClick={(e:React.MouseEvent<HTMLElement>) => setOffer(!offer)}><img src={offer? CheckOn : CheckOff} alt={'check'} className='mr-2'/>동의</button>
            {show && <OfferText sel={show} setSel={setShow} />}
        </div>
    )
}
export default OfferButton;