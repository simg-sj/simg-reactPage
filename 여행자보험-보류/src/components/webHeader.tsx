import React from 'react';
import TopLogo from '../asset/images/top_logo.png';
const WebHeader: React.FC = () => {
    return (
        <div className='fixed top-0 left-0 w-full h-[100px] center-flex'>
            <div>
                <img src={TopLogo} alt={'toplogo'} width={300}/>
            </div>
        </div>
    );
};

export default WebHeader;
