import React, {SetStateAction, useEffect} from "react";
import Modal from "react-modal";
import {modalStyles} from "../../utils/common";
import Close from '../../assets/images/btn_close_24px.svg';
import RegisterForm from "./registerForm";
import cn from 'classnames';
import axiosInstance from "../../api/axiosInstans";

interface Props {
    isOpen : boolean;
    setIsOpen : React.Dispatch<SetStateAction<boolean>>;
}

export default function Modals({isOpen, setIsOpen} : Props){
    const isMobi = /Mobi/i.test(window.navigator.userAgent);

    useEffect( () => {
        axiosInstance.post('/count',{job : 'popup'}).then(r => console.log('count'));
    }, []);
    const styles = modalStyles('edit');
    return (
        <Modal isOpen={isOpen} style={isMobi ? styles.mobi : styles.web}>
            <div className='h-full w-full'>
                <div className={cn('flex_center h-[60px] border-b w-full bg_base',{'fixed top-0 z-10' : isMobi})}>
                    <p className='pl-4 text-[16px] font-[600] text-white'>서비스 가입</p>
                    <button className='ml-auto pr-4' onClick={(e: React.MouseEvent) => setIsOpen(!isOpen)}>
                        <img src={Close} alt={'close'}/>
                    </button>
                </div>
                <RegisterForm setIsOpen={setIsOpen}/>
            </div>
        </Modal>
    )
}
