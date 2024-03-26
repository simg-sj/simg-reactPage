import React from 'react';

const WebFooter: React.FC = () => {
    return (
        <div className='footer'>
            <div className='flex-col center-flex w-full h-full'>
                <div className='font-bold text-[12px]'>
                    (주)에스아이엠지 | 대표이사 오성준
                </div>
                <div className='flex-col text-[10px] text-black/50 font-semibold mt-4'>
                    <h2>
                        서울시 강남구 테헤란로 416 16층(연봉빌딩)  | T : 1877-3006
                    </h2>
                    <h2>
                        사업자등록번호 :  128-87-16058  |  대리점 등록 번호 : 2014110098
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default WebFooter;
