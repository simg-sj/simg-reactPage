import MoreIcon from "../../../assets/images/icon_more.svg";
import CheckOff from "../../../assets/images/icon_checkbox_14px_off.svg";
import CheckOn from '../../../assets/images/icon_checkbox_14px_on.svg';
import React, {useState} from "react";
import SearchText from "./searchText";

interface SearchProps{
    search : boolean,
    setSearch : React.Dispatch<React.SetStateAction<boolean>>
}
const SearchAbout =( { search, setSearch} : SearchProps) => {
    const [show, setShow] = useState<boolean>(false);
    return (
        <div className='flex mx-4 mt-4 base_text items-center'>
            <button className='flex' onClick={(e : React.MouseEvent<HTMLElement>) => setShow(!show)}>
                개인(신용)정보의 조회에 관한 사항
                <img src={MoreIcon} alt={'more'}/>
            </button>
            <button className='ml-auto flex items-center' onClick={(e : React.MouseEvent<HTMLElement>) => setSearch(!search)}><img src={search ? CheckOn : CheckOff} alt={'check'} className='mr-2'/>동의</button>
            {show && <SearchText sel={show} setSel={setShow} />}
        </div>
    )
}
export default SearchAbout;