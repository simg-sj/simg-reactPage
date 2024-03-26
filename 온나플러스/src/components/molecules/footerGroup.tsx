import SimgIcon from '../../assets/images/simg_logo.png'
const FooterGroup = () => {
    return(
            <div className='footer text_white items-end'>
                <div className='flex basis-1/2 flex-col mr-auto items-start'>
                    <h2 className='h2_pb1'>보험대리점 : (주)SIMG</h2>
                    <h2 className='h2_pb1'>대표자 : 오성준</h2>
                    <h2 className='h2_pb1'>사업자번호 : 128-87-16058 | 대리점 등록 번호 2014110098</h2>
                    <h2 className='h2_pb1'>주소 : 서울특별시 강남구 테헤란로 416 16층(연봉빌딩)</h2>
                    <h2>Tel: 1877-3006 | Mail : sj@simg.kr</h2>
                </div>
                <div className='mr-4'>
                    <img alt={'simgLogo'} src={SimgIcon} className='w-14'/>
                </div>
        </div>
    )
}
export default FooterGroup;