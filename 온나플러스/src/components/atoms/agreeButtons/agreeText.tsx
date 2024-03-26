import React, {useState} from "react";
import CloseIcon from '../../../assets/images/btn_close_24px.svg';
import Modal from "react-modal";
interface ShowProps {
    sel : boolean,
    setSel : React.Dispatch<React.SetStateAction<boolean>>
}
const AgreeText = ({sel, setSel} : ShowProps) => {
    const isMobi = /Mobi/i.test(window.navigator.userAgent);
    const [close, setClose] = useState(sel);
    const customStyles = {
        overlay: {
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex : 100
        },
        content: {
            inset : '40px 0px 40px 0px',
            left: '0',
            margin: "auto",
            width: "350px",
            height: "350px",
            padding: "0",
            overflow: "hidden",
            //transform : "translate(-50%,0)"
        },
    };
    const onClickHandler = (e : React.MouseEvent<HTMLElement>) => {
        setClose(!close);
        setTimeout(() => {
            setSel(!sel);
        }, 500);
    }
    return(
        <div>
            {
                isMobi ?
                    <div className='fixed inset-0 w-full z-10 '>
                        <div
                            className={close ? 'absolute bg-white bottom-0 left-0 w-screen h-full bg-white animate-[left-side-on_600ms_ease-in-out] overflow-y-auto' : 'absolute bottom-0 h-full left-0  w-screen bg-white animate-[left-side-out_600ms_ease-in-out]'}>
                            <div
                                className='flex items-center mb-8 text-[14px] h-[45px] bg-[#0e47a1] border-b-[2px] border-b-[#0e47a1] title_text fixed top-0 w-full'>
                                <div className="flex w-full justify-center text-white">소비자 권익보호에 관한 사항</div>
                                <div className='mr-2'>
                                    <button onClick={(e) => onClickHandler(e)}><img src={CloseIcon}/></button>
                                </div>
                            </div>
                            <div className='text-[11px] mx-8 flex justify-center flex-col pt-[60px]'>
                                <div className='bold_12'>
                                    개인(신용)정보의 수집ㆍ이용 및 조회, 제공에 관한 동의를 거부하실 수 있으며, 개인의 신용도 등을 평가하기 위한 목적 이외의 개인(신용)정보 제공
                                    동의를 철회할 수 있습니다.
                                </div>
                                <div className='bold_12 mt-1'>
                                    다만, 본 동의는 ‘고객정보 관리 및 가입설계‘를 위해 필수적인 사항이므로 동의를 거부하시는 경우 관련 업무수행이 불가능합니다.
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <Modal isOpen={close} style={customStyles}>
                        <div className='border-b bg-[#0e47a1] text-white border-b-[#0e47a1] font-bold'>
                            <div className='flex justify-center py-2'>
                                소비자 권익보호에 관한 사항
                            </div>
                        </div>
                        <div className='text-[11px] mx-8 flex justify-center flex-col pt-[20px]'>
                            <div className='bold_12'>
                                개인(신용)정보의 수집ㆍ이용 및 조회, 제공에 관한 동의를 거부하실 수 있으며, 개인의 신용도 등을 평가하기 위한 목적 이외의 개인(신용)정보 제공
                                동의를 철회할 수 있습니다.
                            </div>
                            <div className='bold_12 mt-1'>
                                다만, 본 동의는 ‘고객정보 관리 및 가입설계‘를 위해 필수적인 사항이므로 동의를 거부하시는 경우 관련 업무수행이 불가능합니다.
                            </div>
                        </div>
                        <div className='flex items-center w-full mt-16 justify-center'>
                            <div className='basis-1/2 flex justify-center'>
                                <button id={'confirm'} className='button_on'
                                        onClick={(e: React.MouseEvent<HTMLElement>) => setSel(false)}>닫기
                                </button>
                            </div>
                        </div>
                    </Modal>
            }

        </div>
    )
}
export default AgreeText;
