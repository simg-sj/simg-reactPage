import React, { SetStateAction, useState, useEffect, useRef } from "react";
import cn from "classnames";
import { Link } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";
import Menu from '../../assets/images/menu.svg';

interface Props {
    type : string;
    setType: React.Dispatch<SetStateAction<string>>
}

export default function Header({type, setType }: Props) {
    const isPc = useMediaQuery({ query: "(min-width: 990px)" });
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const menuButton = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node) && menuButton.current && !menuButton.current.contains(event.target as Node)) {
                setIsOpen(false); // 네비게이션 바 외부를 클릭했을 때 메뉴를 닫습니다.
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [navRef]);

    const toggleMenu = (e: React.MouseEvent) => {
        setIsOpen(prevState => !prevState);
    };


    const handleItemClick = (type: string) => {
        setType(type); // 메뉴 아이템 클릭 시 타입 변경
        setIsOpen(false); // 메뉴 닫기
    };

    return (
        <div className='w-full border-b h-[80px] fixed top-0 left-0 bg-white'>
            <div className='header'>
                <Link to='/'>
                    <h2 className='font-[500] text-[#FFD840] text-[24px]'>KMPARK</h2>
                </Link>
                {isPc ? (
                    <div className='ml-auto'>
                        <ul className='flex space-x-8'>
                            <li className={cn('li_hover', {'font-bold text-black' : (type==='01')})} onClick={() => handleItemClick('01')}>장애접수</li>
                            <li className={cn('li_hover', {'font-bold text-black' : (type==='02')})} onClick={() => handleItemClick('02')}>주차장등록관리</li>
                        </ul>
                    </div>
                ) : (
                    <div className='ml-auto'>
                        <div className='w-[45px] h-[40px] border bg_base rounded-md' ref={menuButton}>
                            <button className='w-full h-full flex_center' onClick={toggleMenu}>
                                <img src={Menu} alt='menu' width={40} />
                            </button>
                        </div>
                    </div>
                )}
            </div>
            {
                !isPc &&
                <div ref={navRef} className={cn('absolute nav_bar w-full text-white flex_center flex-col text-[20px] transition-all duration-500 ease-in-out', {
                    'h-[0px]': !isOpen,
                    'h-[120px]': isOpen,
                })}>
                    <div className={cn('hover:font-bold hover:text-[#FFD840] cursor-pointer w-full h-[60px]', { 'hidden': !isOpen })}>
                        <button className='w-full h-full' onClick={() => handleItemClick('01')}>장애접수</button>
                    </div>
                    <div className={cn('hover:font-bold hover:text-[#FFD840] cursor-pointer w-full h-[60px]', { 'hidden': !isOpen })}>
                        <button className='w-full h-full' onClick={() => handleItemClick('02')}>주차장등록관리</button>
                    </div>
                </div>
            }
        </div>
    )
}
