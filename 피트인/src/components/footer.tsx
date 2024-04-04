import FooterLogo from '../assets/images/footerLogo.png';
import { useMediaQuery } from 'react-responsive'
import cn from 'classnames';

export default function Footer(){
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })

    return (
        <div className={cn('w-full bg-[#262729] h-[200px]',{'text-[12px]' : isTabletOrMobile})}>
            <div className='mx-auto my-0  h-full flex items-center w-[calc(100%-80px)] max-w-[1280px]'>
                <div className={cn('flex w-full text-[rgb(177, 177, 177)] font-bold', {'flex-col': isTabletOrMobile})}>
                    <div>
                        <img src={FooterLogo} alt={'footerLogo'} width={100}/>
                        <p className='mt-2'>사업자 등록번호 : 243-87-02926 · 대표이사 : 김세권  · 경기도 의왕시 안양판교로82, 포일어울림센터 704호</p>
                    </div>
                    <div className={cn('', {'ml-auto pr-8 flex flex-col' : isDesktopOrLaptop})}>
                        <p className='font-bold '>고객센터 1670-0470</p>
                        <p><span className='font-bold  mr-2'>전화상담</span> 평일 9시 ~ 18시, 주말 · 공휴일 휴무</p>
                        <p className='font-bold  mt-4'><span className='mr-2'>이메일 문의</span> sj@simg.kr</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
