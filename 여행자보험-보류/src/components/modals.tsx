import React from 'react';
import Modal from "react-modal";
import {useSelector} from "react-redux";

interface ModalProps {
    msg : string,
    isOpen : boolean,
    setIsOpen : React.Dispatch<React.SetStateAction<boolean>>
}


const Modals: React.FC<ModalProps> = ( { msg, isOpen, setIsOpen } ) => {
    const isMobile = useSelector((state : any) => state.mobile.isMobi);
    const mobi_customStyles = {
        overlay: {
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex : 100
        },
        content: {
            left: "50%",
            margin: "auto",
            width: "350px",
            height: "250px",
            padding: "0",
            overflow: "hidden",
            transform : "translate(-50%,0)"
        },
    };
    const customStyles = {
        overlay: {
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex : 100
        },
        content: {
            left: '0',
            margin: "auto",
            inset : '40px 0px 40px 0px',
            width: "400px",
            height: "200px",
            padding: "0",
            overflow: "hidden",
            //transform : "translate(-50%,0)"
        },
    };
    return (
        <div>
            <Modal isOpen={isOpen} style={isMobile ? mobi_customStyles : customStyles}>
                <div className='h-[40px] base_bg whiteL_text center-flex'>
                    알 림
                </div>
                <div className='center-flex flex-col'>
                    <div className='center-flex mt-8 font-bold'>
                        {msg}
                    </div>
                    <button className='absolute bottom-2 button-color whiteM-text py-1 px-8' onClick={(e:React.MouseEvent<HTMLElement>) => setIsOpen(!isOpen)}>
                        닫 기
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default Modals
