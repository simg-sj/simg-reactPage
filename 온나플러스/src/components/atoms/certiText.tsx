import InfoIcon from "../../assets/images/icon_info.svg";

const CertiText = () => {
    return (
            <div className='base_text mt-2'>
                <ul className='list-outside base_text mt-4 mx-8' style={{ listStyleImage: `url(${InfoIcon})`}}>
                    <li className='leading-[20px]'>
                        개인정보 보호법에 의거하여 가입설계를 위한 개인(신용(정보 처리 동의서를 동의한 경우에만 당사의 보험계약 가입 등을 하실 수 있습니다.
                    </li>
                    <li className='leading-[20px] mt-2'>
                        책임보험이 유효한 상태여야 본 시간제보험의 보상이 가능합니다. 만기일 이전에 갱신 누락예방을 위해 사전안내를 드릴 수 있습니다.
                    </li>
                </ul>
            </div>
    )
}
export default CertiText