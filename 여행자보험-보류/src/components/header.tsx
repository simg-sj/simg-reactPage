import React from 'react';
import {useSelector} from "react-redux";
import backIcon from '../asset/images/btn_back.svg';
import {useNavigate, useParams} from "react-router";

const Header: React.FC = () => {
    const isMobile = useSelector((state : any) => state.mobile.isMobi);
    const navigate = useNavigate();
    const {step} = useParams();
    return (
        <div className={isMobile ? 'mobile_header' : 'web_header'}>
            <div className='basis-1/3 flex center-flex ml-2'>
                {
                    step ?
                     <button className='w-[24px] mr-auto' onClick={(e : React.MouseEvent<HTMLButtonElement>) => navigate(-1)}>
                         <img src={backIcon} alt={'back'} />
                     </button>
                     :
                     ''
                }
            </div>
            <div className='basis-2/3'>
                <h2>해외여행자 보험</h2>
            </div>
        </div>
    );
};

export default Header;
