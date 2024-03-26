import React, { SetStateAction} from "react";
import Logo from '../assets/images/top_logo.png';
import HeadButton from "./headButton";
import cn from "classnames";
import { Link } from 'react-router-dom';

interface Props {
    type?: string,
    comp?: string,
    setType : React.Dispatch<SetStateAction<string>>,
}
export default function Header({comp,type, setType} : Props) {

    return (
        <div className='header'>
            <div className='head_div pt-2'>
                <Link to={'/'}>
                    <img src={Logo} alt={'Logo'} width={200}/>
                </Link>
            </div>
            {
                comp === 'home' &&
                <>
                    <div className='head_div flex items-center'>
                        <div className='head_button_group'>
                            <HeadButton type={'01'} text={'마이체크업'} setType={setType}
                                        className={cn('header_button', {'head_check': type === '01'})}/>
                            <HeadButton type={'02'} text={'벨류맵'} setType={setType}
                                        className={cn('header_button', {'head_check': type === '02'})}/>
                        </div>
                    </div>
                    <div className='head_div pt-2 flex items-center text-white ml-4'>
                        <p>{type === '01' ? "마이체크업" : "벨류맵"}</p>
                    </div>
                </>
            }

        </div>
    )
}
