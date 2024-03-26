import React from 'react';
import LogoIcon from '../assets/images/footer-logo.svg';
const Header: React.FC = () => {
    return (
        <div className='header'>
            <div className='flex px-4 items-center w-full h-full text-white'>
                <div>
                    <img src={LogoIcon} alt={'logo'} width={100}/>
                </div>
            </div>
        </div>
    );
};

export default Header;
