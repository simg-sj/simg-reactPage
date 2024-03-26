import {useMediaQuery} from "react-responsive";
import cn from 'classnames';

export default function Footer(){
    const isPc = useMediaQuery({ query: "(min-width: 990px)" });

    return (
        <div className={cn('w-full border-t h-[140px] bg-white',{'fixed bottom-0 left-0 text-[9px]' : !isPc, 'fixed bottom-0 left-0 text-[12px]' : isPc})}>
            <div className={cn('mx-auto my-0 h-full flex items-center max-w-[1280px]',{'w-[calc(100%-80px)]' : isPc,'w-[calc(100%-40px)]' : !isPc  })}>
                <div className='flex w-full'>
                    <div>
                        <p className='font-bold text-black'>(주)케이엠파크</p>
                        {
                            isPc ?
                                <p className='mt-2'>주소 : 13529 경기도 성남시 분당구 판교역로 152 알파돔타워 13층</p>
                                :
                                <>
                                    <p>13529 경기도 성남시 분당구 판교역로 152 알파돔타워 13층</p>
                                </>
                        }
                    </div>
                    <div className={cn('ml-auto  flex flex-col',{'mr-6' : isPc})}>
                       {/* <p className='font-bold text-black'>고객센터  {!isPc && <br/>}1877 - 3006</p>
                        <p><span className='font-bold text-black mr-2'>전화상담</span>{!isPc && <br/>} 평일 9시 ~ 18시, 주말 · 공휴일 휴무</p>
                        <p className={cn('font-bold text-black',{'mt-4' : isPc})}><span className='mr-2'>이메일 문의</span> sj@simg.kr</p>
                    */}</div>
                </div>
            </div>
        </div>
    )
}
