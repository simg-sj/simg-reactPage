import React from 'react';
import Modal from "react-modal";

interface ModalProps {
    msg : string,
    isOpen : boolean,
    setIsOpen : React.Dispatch<React.SetStateAction<boolean>>
}


const Alert: React.FC<ModalProps> = ({ msg, isOpen, setIsOpen } ) => {
    const isMobile = (/Mobi/i.test(window.navigator.userAgent));
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
                <div className='h-[40px] bg_base text-white text-[16px] flex_center'>
                    알 림
                </div>
                <div className='flex_center flex-col'>
                    <div className='flex_center mt-8 font-bold'>
                        {
                            msg !== '' ? msg :
                            <div className='flex_center flex-col'>
                                <p>서비스 오류입니다.</p>
                                <p>본사에 문의주시기 바랍니다.</p>
                                <p>☎ 1877-3006</p>
                            </div>
                        }
                    </div>
                    <button className='absolute bottom-2 button-color text-white text-[16px] py-1 px-8' onClick={(e:React.MouseEvent<HTMLElement>) => setIsOpen(!isOpen)}>
                        닫 기
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default Alert
