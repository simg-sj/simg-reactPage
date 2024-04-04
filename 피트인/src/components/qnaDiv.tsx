import {useMediaQuery} from "react-responsive";
import cn from 'classnames';
export default function QnaDiv(){
    const isMobile = useMediaQuery({maxWidth : 930})
    return (
        <div className='w-full mt-8'>
            <div>
                <div className='border px-8 py-2 cursor-pointer hover:font-bold'>
                    <p>Q1. 가입은 어떻게 하나요</p>
                </div>
                <div>
                    <div className={cn('border-l border-b border-r px-8 py-2 base_font', {'text-[12px]': isMobile})}>
                        가입하시려면 <span className='font-bold'>"가입신청서, 차량등록증 사본, 신분증 사본"을 제출</span> 하시면 됩니다.<br/>
                        법인은 <span className='font-bold'>"사업자등록증 사본, 법인인감증명서"</span>를 추가로 내시면 됩니다. 심사가 통과되면 결제 후 바로 서비스 이용이 가능합니다.<br/>
                    </div>
                </div>
            </div>
            <div>
                <div className='border-l border-b border-r px-8 py-2 cursor-pointer hover:font-bold'>
                    <p>Q2. OBD/FMS란 무엇인가요?</p>
                </div>
                <div>
                    <div className={cn('border-l border-b border-r px-8 py-2 base_font', {'text-[12px]': isMobile})}>
                        <span className='font-bold'>OBD: On-Board Diagnostics / FMS: Fleet Management System</span><br/><br/>
                        차량에 장착하는 통신 단말기로, 차량에서 발생하는 센서 및 진단 데이터를 통신 모듈을 활용하여 기록하는 장치 입니다. FMS는
                        OBD에서 송출한 데이터를 기반으로 이동하는 모빌리티의 운행 데이터를 관리하는 시스템이며, 가입 후 OBD 장착을 예약하시면
                        전문 기사가 방문하여 차량에 단말기를 설치해 드립니다. 기사님께서는 해당 단말기를 통하여 웹에서 내 차의 운행 정보와 배터리
                        상태를 확인할 수 있습니다.
                    </div>
                </div>
            </div>
            <div>
                <div className='border-l border-b border-r px-8 py-2 cursor-pointer hover:font-bold'>
                    <p>Q3. 배터리 교환 시점 도래 시 해결방법</p>
                </div>
                <div>
                    <div className={cn('border-l border-b border-r px-8 py-2 base_font', {'text-[12px]': isMobile})}>
                        <span className='font-bold'>사고로 배터리가 파손되어 교체가 필요</span>하면 당사에 연락만 주시면 됩니다. 제휴 정비소로 차량을 옮겨드리고, 신품 성능 수준의 재 제조 배터리로 교체해 드립니다.<br/>
                        <span className='text-[12px]'>*비용 발생 시 자기부담금 20%(최소 20만원 ~ 최대 50만원) 부담 필요</span><br/><br/>
                        <span className='font-bold'>배터리 성능 하락 및 자동차 보증 거리 만료 후 고장 시,</span> 신품 대비 최대 65% 할인된 저렴한 가격에 신품 성능 수준의 재 제조 배터리로 교체해 드립니다.<br/>
                        <span className='text-[12px]'>*단 자동차 보증 거리 만료 후 고장 발생 시, 고장 원인 분석 필요</span>
                    </div>
                </div>
            </div>
            <div>
                <div className='border-l border-b border-r px-8 py-2 cursor-pointer hover:font-bold'>
                    <p>Q4. 보장 범위</p>
                </div>
                <div>
                    <div className={cn('border-l border-b border-r px-8 py-2 base_font',{'text-[12px]' : isMobile})}>
                        타 차량과의 충돌, 추돌, 접촉으로 인한 배터리 파손은 모두 교체가 가능합니다.
                        침수, 화재, 폭발 등 차량 외부 요인으로 인한 배터리 고장도 보상 대상입니다.
                        다만, 운전자 과실(음주운전 등)로 인한 사고는 보상에서 제외되니 주의하시기 바랍니다.
                        또한 차량의 개조, 경주, 영업 목적 운행 등으로 인한 배터리 파손도 보장되지 않습니다.
                    </div>
                </div>
            </div>
        </div>
    )
}
