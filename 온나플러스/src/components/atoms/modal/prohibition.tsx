import CloseIcon from "../../../assets/images/btn_close_24px.svg";
import React, {useState} from "react";
interface ShowProps {
    sel : boolean,
    setSel : React.Dispatch<React.SetStateAction<boolean>>
}
const Prohibition = ({sel, setSel} : ShowProps) => {
    const [close, setClose] = useState(sel);
    const onClickHandler = (e : React.MouseEvent<HTMLElement>) => {
        setClose(!close);
        setTimeout(() => {
            setSel(!sel);
        }, 500);
    }
    return (
        <div>
            <div className='fixed inset-0 w-full z-10 '>
                <div className={close ? 'absolute bg-white bottom-0 left-0 w-screen h-full bg-white animate-[left-side-on_600ms_ease-in-out] overflow-y-auto' : 'absolute bottom-0 h-full left-0  w-screen bg-white animate-[left-side-out_600ms_ease-in-out]'}>
                    <div className='flex items-center mb-8 text-[14px] h-[45px] bg-[#0e47a1] border-b-[2px] border-b-[#0e47a1] title_text fixed top-0 w-full'>
                        <div className="flex w-full justify-center text-white">손해보험 광고, 선전에 관한 규정에 의거하여,제4장 준수사항 및 금지행위 제22조를 안내해 드립니다</div>
                        <div className='mr-2'> <button onClick={(e) => onClickHandler(e)}><img src={CloseIcon}/></button></div>
                    </div>
                    <div className='text-[11px] mx-8 flex justify-center flex-col pt-[60px]'>
                        <div className='bold_12 mt-8'>
                            1. 이 보험의 기본계약 및 특약 별 보장내용(약관상의 보험금 지급 사유), 보험료 예시, 예상 만기환급금, 보험기간, 보험료 납입기간, 갱신보험료(갱신 담보를 포함하는 상품에 한함), 지급제한 사항 등은 현대해상 홈페이지를 통해 확인할 수 있습니다.
                        </div>
                        <div className='bold_12 mt-4'>
                            2. 안내해 드리는 만기환급금은 현재 시점에서 적용하고 있는 이율에 따른 금액이며 향후 적용이율의 변경, 계약내용의 변경, 보험료의 실제 납입일자 등에 따라 달라질 수 있습니다.
                        </div>
                        <div className='bold_12 mt-4'>
                            3. 해약(정산)환급금이란 보험계약이 중도에 해지될 경우에 지급되는 금액을 말하는 것으로 보험은 은행의 저축과 달리 위험보장과 저축을 겸비한 제도로 계약자가 보험료 중 일부는 불의의 사고를 당한 다른 가입자에게 지급되는 보험금으로, 또 다른 일부는 보험회사 운영에 필요한 경비로 사용되므로 중도해지 시 지급되는 해약(정산)환급금은 납입한 보험료보다 적거나 없을 수도 있습니다.
                        </div>
                        <div className='bold_12 mt-4'>
                            4. 보험계약자는 보험증권을 받은 날로 부터 15일 이내(다만, 계약이 성립한 날로부터 30일을 한도로 합니다.)에 청약을 철회할 수 있으며 이 경우, 3영업일 이내에 보험료를 돌려 드립니다. 단, 일반금융소비자의 건강상태 진단을 지원하는 보장성 상품, 보장기간이 90일 이내인 금융상품 또는 전문금융소비자를 계약자로 체결한 계약은 청약을 철회할 수 없습니다.
                        </div>
                        <div className='bold_12 mt-4'>
                            5. 보험계약자가 보험가입 시 보험약관과 청약서 부본을 전달받지 못하였거나 청약서에 자필서명 또는 날인(도장을 찍음)을 하지 않았을 경우, 약관의 중요한 내용을 설명 받지 못하였을 때에는 계약이 성립한 날로부터 3개월 이내에 회사에 보험계약의 취소를 요구할 수 있습니다. 다만, 전자거래기본법에 의해 컴퓨터를 이용하여 가상의 영업장(사이버몰)을 이용하여 계약을 체결한 때에는 청약서 부본을 드리지 아니할 수 있습니다.
                        </div>
                        <div className='bold_12 mt-4'>
                            6. 보험계약자 또는 피보험자는 보험계약 청약 시 청약서(전자문서 포함)의 질문사항에 대하여 알고 있는 내용을 반드시 사실대로 알려야 하며(청약서 또는 전자청약서에 기재), 그렇지 않은 경우 보험금의 지급이 거절될 수 있습니다. 보험계약 체결 전에 반드시 상품설명서와 약관을 확인해야 하며, 보험계약자가 기존에 체결했던 보험계약을 해지하고 다른 보험계약을 체결하면 보험인수가 거절되거나 보험료가 인상되거나 보장내용이 달라질 수 있습니다.
                        </div>
                        <div className='bold_12 mt-4'>
                            7. 보험계약자 또는 피보험자는 보험계약을 맺은 후 보험약관에 정한 계약 후 알릴 의무사항이 발생하였을 경우, 지체 없이 회사에 알려야 합니다. 그렇지 않을 경우 보험금 지급이 거절될 수 있습니다.
                        </div>
                        <div className='bold_12 mt-4'>
                            8. 이 보험계약은 예금자보호법에 따라 예금보험공사가 보호하되, 보호 한도는 본 보험회사에 있는 귀하의 모든 예금보호 대상 금융상품의 해약환급금(또는 만기 시 보험금이나 사고보험금)에 기타지급금을 합하여 1인당 "최고 5천만원"이며, 5천만원을 초과하는 나머지 금액은 보호하지 않습니다.
                        </div>
                        <div className='bold_12 mt-4'>
                            9. 보험계약자가 기존에 체결했던 보험계약을 해지하고 다른 보험계약을 체결하면 보험인수가 거절되거나 보험료가 인상되거나 보장내용이 달라질 수 있습니다.
                        </div>
                        <div className='bold_12 mt-4'>
                            10. 보험계약 체결 전 상품설명서 및 약관을 확인해 주세요.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Prohibition;