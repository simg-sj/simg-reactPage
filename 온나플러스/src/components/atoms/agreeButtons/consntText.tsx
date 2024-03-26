import React, {useState} from "react";
import CloseIcon from "../../../assets/images/btn_close_24px.svg";
import Modal from "react-modal";
interface ConsntProps{
    sel : boolean,
    setSel : React.Dispatch<React.SetStateAction<boolean>>
}
const ConsntText = ({sel, setSel} : ConsntProps) => {
    const [conShow, setConShow] = useState(sel);
    const isMobi = /Mobi/i.test(window.navigator.userAgent);
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
            height: "700px",
            padding: "0",
            overflow: "hidden",
            //transform : "translate(-50%,0)"
        },
    };
    const onClickHandler = (e : React.MouseEvent<HTMLElement>) => {
        setConShow(!conShow);
        setTimeout(() => {
            setSel(!sel);
        }, 500);
    }
    return(
        <div>
            {
                isMobi ?
            <div className='fixed inset-0 w-full z-10 '>
                <div className={conShow ? 'absolute bg-white bottom-0 left-0 w-screen h-full animate-[left-side-on_600ms_ease-in-out] overflow-y-auto pb-8' : 'absolute bottom-0 h-full left-0  w-screen bg-white animate-[left-side-out_600ms_ease-in-out]'}>
                    <div className='flex items-center mb-8 text-[14px] h-[45px] bg-[#0e47a1] border-b-[2px] border-b-[#0e47a1] title_text fixed top-0 w-full'>
                        <div className="flex w-full justify-center text-white">개인(신용)정보의 수집, 이용에 관한 사항</div>
                        <div className='mr-2'> <button onClick={(e) => onClickHandler(e)}><img src={CloseIcon}/></button></div>
                    </div>
                    <div className='text-[11px] mx-8 justify-center flex-col pt-[70px]'>
                        <div className='bold_12'>
                            당사는 「개인정보보호법」 및 「신용정보의 이용 및 보호에 관한 법률」 에 따라 귀하의 개인정보를 다음과 같이 수집ㆍ이용 하고자 합니다.
                        </div>
                        <div className='pt-4'>
                            <h2 className='pb-2 bold_12'>1. 수집 · 이용 목적</h2>
                            <h2>
                                º 보험 계약상담 및 상품소개, 재무설계서비스, 보험계약 인수여부 판단
                                <br/>
                                (건강진단 및 계약 적부조사 포함)
                            </h2>
                            <h2 className='mt-2'>
                                º 「신용정보의 이용 및 보호에 관한법률」상 의무 이행
                            </h2>
                        </div>
                        <div className='pt-4'>
                            <h2 className='pb-2 bold_12'>2. 수집ㆍ이용 항목</h2>
                            <h2 className='font-bold text-[11px]'>
                                1) 고유식별정보
                            </h2>
                            <h2 className='mt-1'>
                                º 주민등록번호, 외국인등록번호, 여권번호
                            </h2>
                            <h2 className='font-bold text-[11px] mt-2'>
                                2) 개인(신용)정보
                            </h2>
                            <div className='flex-col ml-1'>
                                <h2 className='mt-1'>
                                    º 일반개인정보 : 성명, 본인확인정보(CI,D.I), 주소, 직업, 유무선 전화번호, 이메일
                                </h2>
                                <h2 className='mt-1'>
                                    º 신용거래정보 : 보험계약정보(상품종류,기간,보험가입금액 등), 보험금정보
                                </h2>
                                <h2 className='mt-1'>
                                    º 신용능력정보 : 소득 및 재산정보
                                </h2>
                            </div>
                            <h2 className='font-bold text-[11px] mt-2'>
                                3) 민감정보
                            </h2>
                            <h2 className='pt-1'>
                                º 피보험자의 질병 및 가족력ㆍ상해에 관한정보(진료기록, 상병명 등),
                                교통법규 위반정보
                            </h2>
                        </div>
                        <div className='pt-4'>
                            <h2 className='pb-2 bold_12'>3. 민감정보</h2>
                            <h2 className='pt-1'>
                                º 동의일로부터 1년까지
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
                    :
                    <Modal isOpen={conShow} style={customStyles}>
                        <div className='border-b bg-[#0e47a1] text-white border-b-[#0e47a1] font-bold'>
                            <div className='flex justify-center py-2'>
                                개인(신용)정보의 수집, 이용에 관한 사항
                            </div>
                        </div>
                        <div className='text-[11px] mx-8 justify-center flex-col pt-[20px]'>
                            <div className='bold_12'>
                                당사는 「개인정보보호법」 및 「신용정보의 이용 및 보호에 관한 법률」 에 따라 귀하의 개인정보를 다음과 같이 수집ㆍ이용 하고자 합니다.
                            </div>
                            <div className='pt-4'>
                                <h2 className='pb-2 bold_12'>1. 수집 · 이용 목적</h2>
                                <h2>
                                    º 보험 계약상담 및 상품소개, 재무설계서비스, 보험계약 인수여부 판단
                                    <br/>
                                    (건강진단 및 계약 적부조사 포함)
                                </h2>
                                <h2 className='mt-2'>
                                    º 「신용정보의 이용 및 보호에 관한법률」상 의무 이행
                                </h2>
                            </div>
                            <div className='pt-4'>
                                <h2 className='pb-2 bold_12'>2. 수집ㆍ이용 항목</h2>
                                <h2 className='font-bold text-[11px]'>
                                    1) 고유식별정보
                                </h2>
                                <h2 className='mt-1'>
                                    º 주민등록번호, 외국인등록번호, 여권번호
                                </h2>
                                <h2 className='font-bold text-[11px] mt-2'>
                                    2) 개인(신용)정보
                                </h2>
                                <div className='flex-col ml-1'>
                                    <h2 className='mt-1'>
                                        º 일반개인정보 : 성명, 본인확인정보(CI,D.I), 주소, 직업, 유무선 전화번호, 이메일
                                    </h2>
                                    <h2 className='mt-1'>
                                        º 신용거래정보 : 보험계약정보(상품종류,기간,보험가입금액 등), 보험금정보
                                    </h2>
                                    <h2 className='mt-1'>
                                        º 신용능력정보 : 소득 및 재산정보
                                    </h2>
                                </div>
                                <h2 className='font-bold text-[11px] mt-2'>
                                    3) 민감정보
                                </h2>
                                <h2 className='pt-1'>
                                    º 피보험자의 질병 및 가족력ㆍ상해에 관한정보(진료기록, 상병명 등),
                                    교통법규 위반정보
                                </h2>
                            </div>
                            <div className='pt-4'>
                                <h2 className='pb-2 bold_12'>3. 민감정보</h2>
                                <h2 className='pt-1'>
                                    º 동의일로부터 1년까지
                                </h2>
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
export default ConsntText;
