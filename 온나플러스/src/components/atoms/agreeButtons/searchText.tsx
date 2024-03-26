import React, {useState} from "react";
import CloseIcon from "../../../assets/images/btn_close_24px.svg";
import Modal from "react-modal";
interface SearchProps{
    sel : boolean,
    setSel : React.Dispatch<React.SetStateAction<boolean>>
}
const SearchText = ({sel, setSel} : SearchProps) => {
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
    const [showSearch, setShowSearch] = useState(sel);
    const onClickHandler = (e : React.MouseEvent<HTMLElement>) => {
        setShowSearch(!showSearch);
        setTimeout(() => {
            setSel(!sel);
        }, 500);
    }
    return(
        <div>
            {
                isMobi ?
            <div className='fixed inset-0 w-full z-10 '>
                <div className={showSearch ? 'absolute bottom-0 left-0 w-screen h-full bg-white animate-[left-side-on_600ms_ease-in-out] overflow-y-auto pb-8' : 'absolute bottom-0 h-full left-0  w-screen bg-white animate-[left-side-out_600ms_ease-in-out]'}>
                    <div className='flex items-center mb-8 text-[14px] h-[45px] bg-[#0e47a1] border-b-[2px] border-b-[#0e47a1] title_text fixed top-0 w-full'>
                        <div className="flex w-full justify-center text-white">개인(신용)정보의 조회에 관한 사항</div>
                        <div className='mr-2'> <button onClick={(e) => onClickHandler(e)}><img src={CloseIcon}/></button></div>
                    </div>
                    <div className='text-[11px] mx-8 flex justify-center flex-col pt-[60px]'>
                        <div className='bold_12'>
                            당사 및 당사 업무수탁자는 「개인정보보호법」 및 「신용정보의 이용 및 보호에 관한 법률」에 따라 귀하의 개인정보를 다음과 같이 조회하고자 합니다..
                        </div>
                        <div className='pt-4'>
                            <h2 className='pb-2 bold_12'>1. 조회 대상 기관</h2>
                            <h2>
                                º 종합신용정보집중기관
                            </h2>
                            <h2 className='pt-1'>
                                º 보험요율산출기관
                            </h2>
                        </div>
                        <div className='pt-4'>
                            <h2 className='pb-2 bold_12'>2. 조회 목적</h2>
                            <h2>
                                º 종합신용정보집중기관 : 보험계약 인수여부 결정을 위한 판단, 보험 가입 한도 조회, 실제 발생하는 손해를 보상하는 실손보험의 중복확인
                            </h2>
                            <h2 className='pt-1'>
                                º 보험요율산출기관 : 보험계약인수여부 결정을 위한 판단
                            </h2>
                        </div>
                        <div className='pt-4'>
                            <h2 className='pb-2 bold_12'>3. 조회항목</h2>
                            <h2 className='font-bold text-[11px]'>
                                1) 개인(신용)정보
                            </h2>
                            <h2>
                                º 일반개인정보 : 성명
                            </h2>
                            <h2 className='pt-1'>
                                º 신용거래정보 : 보험계약정보(상품종류, 기간, 보험가입금액 등), 보험금정보(보험금 지급사유, 지급금액 등)
                            </h2>
                            <h2 className='pt-1'>
                                - 손해보험협회에서 수집ㆍ관리하는 전문보험계약자(보험설계사ㆍ보험대리점ㆍ보험중개사 등)의 정보
                            </h2>
                            <h2 className='font-bold text-[11px] mt-2'>
                                2) 민감정보
                            </h2>
                            <h2 className='pt-1'>
                                º 피보험자의 질병 및 가족력ㆍ상해에 관한정보(진료기록, 상병명 등),
                                교통법규 위반정보

                            </h2>
                        </div>
                        <div className='pt-4'>
                            <h2 className='pb-2 bold_12'>4. 조회 동의의 효력기간</h2>
                            <h2>
                                º  동의일로부터 1년까지
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            :
                    <Modal isOpen={showSearch} style={customStyles}>
                        <div className='border-b bg-[#0e47a1] text-white border-b-[#0e47a1] font-bold'>
                            <div className='flex justify-center py-2'>
                                개인(신용)정보의 조회에 관한 사항
                            </div>
                        </div>
                        <div className='text-[11px] mx-8 flex justify-center flex-col pt-[20px]'>
                            <div className='bold_12'>
                                당사 및 당사 업무수탁자는 「개인정보보호법」 및 「신용정보의 이용 및 보호에 관한 법률」에 따라 귀하의 개인정보를 다음과 같이 조회하고자 합니다..
                            </div>
                            <div className='pt-4'>
                                <h2 className='pb-2 bold_12'>1. 조회 대상 기관</h2>
                                <h2>
                                    º 종합신용정보집중기관
                                </h2>
                                <h2 className='pt-1'>
                                    º 보험요율산출기관
                                </h2>
                            </div>
                            <div className='pt-4'>
                                <h2 className='pb-2 bold_12'>2. 조회 목적</h2>
                                <h2>
                                    º 종합신용정보집중기관 : 보험계약 인수여부 결정을 위한 판단, 보험 가입 한도 조회, 실제 발생하는 손해를 보상하는 실손보험의 중복확인
                                </h2>
                                <h2 className='pt-1'>
                                    º 보험요율산출기관 : 보험계약인수여부 결정을 위한 판단
                                </h2>
                            </div>
                            <div className='pt-4'>
                                <h2 className='pb-2 bold_12'>3. 조회항목</h2>
                                <h2 className='font-bold text-[11px]'>
                                    1) 개인(신용)정보
                                </h2>
                                <h2>
                                    º 일반개인정보 : 성명
                                </h2>
                                <h2 className='pt-1'>
                                    º 신용거래정보 : 보험계약정보(상품종류, 기간, 보험가입금액 등), 보험금정보(보험금 지급사유, 지급금액 등)
                                </h2>
                                <h2 className='pt-1'>
                                    - 손해보험협회에서 수집ㆍ관리하는 전문보험계약자(보험설계사ㆍ보험대리점ㆍ보험중개사 등)의 정보
                                </h2>
                                <h2 className='font-bold text-[11px] mt-2'>
                                    2) 민감정보
                                </h2>
                                <h2 className='pt-1'>
                                    º 피보험자의 질병 및 가족력ㆍ상해에 관한정보(진료기록, 상병명 등),
                                    교통법규 위반정보

                                </h2>
                            </div>
                            <div className='pt-4'>
                                <h2 className='pb-2 bold_12'>4. 조회 동의의 효력기간</h2>
                                <h2>
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
export default SearchText;
