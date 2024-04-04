import React, {SetStateAction} from "react";
import cn from 'classnames';
import Close from '../../assets/images/btn_close_24px.svg';
import {Collect} from "../agreeSet/collect";
import {Provision} from "../agreeSet/provision";
import {Inquiry} from "../agreeSet/inquiry";
import {Sharing} from "../agreeSet/sharing";
import {Marketing} from "../agreeSet/marketing";
interface Props {
    type : string ;
    agreeOpen : boolean;
    setAgreeOpen : React.Dispatch<SetStateAction<boolean>>;
}
export function Agree({type, agreeOpen, setAgreeOpen} : Props){
    const isMobi = /Mobi/i.test(window.navigator.userAgent);
    return(
        <div className='absolute z-50 w-full h-full top-0'>
            <div className={cn('z-50 bg-white py-4 flex flex-col w-full absolute bottom-0 transition-all duration-[8000] ease-in-out', {
                'h-[0px]': !agreeOpen,
                'h-[90%] ': agreeOpen,
                'overflow-y-scroll' : isMobi
            })}>
                <div className='w-full  flex_center mt-2'>
                    <div className='w-[30px] h-[30px] bg_base rounded-full flex_center'>
                        <button className='w-full h-full flex_center'
                                onClick={(e: React.MouseEvent<HTMLButtonElement>) => setAgreeOpen(false)}>
                            <img src={Close} alt={'닫기'}/>
                        </button>
                    </div>
                </div>
                {
                    type === 'collect' && <Collect/>
                }
                {
                    type === 'provision' && <Provision/>
                }
                {
                    type === 'inquiry' && <Inquiry/>
                }
                {
                    type === 'sharing' && <Sharing/>
                }
                {
                    type === 'marketing' && <Marketing/>
                }
            </div>
        </div>
    )
}
