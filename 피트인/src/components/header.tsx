import React, { useState, useEffect, useRef } from 'react';
import cn from 'classnames';
import WhiteLogo from '../assets/images/PITIN LOGO_WHITE.png';
import PitInLogo from '../assets/images/pitin.png';
import {useMediaQuery} from "react-responsive";
import Menu from '../assets/images/menu.svg';
interface Props {
    registRef: React.RefObject<HTMLDivElement>;
    infoRef: React.RefObject<HTMLDivElement>;
    limitRef: React.RefObject<HTMLDivElement>;
    qaRef: React.RefObject<HTMLDivElement>;
}

export default function Header({ registRef, infoRef, limitRef, qaRef }: Props) {
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('');
    const menuButton = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        setScrolled(isScrolled);
        updateActiveSection();
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const updateActiveSection = () => {
        if (qaRef.current && window.scrollY >= qaRef.current.offsetTop) {
            setActiveSection('qa');
        } else if (infoRef.current && window.scrollY >= infoRef.current.offsetTop) {
            setActiveSection('info');
        } else if (limitRef.current && window.scrollY >= limitRef.current.offsetTop) {
            setActiveSection('limit');
        } else if (registRef.current && window.scrollY >= registRef.current.offsetTop) {
            setActiveSection('register');
        } else {
            setActiveSection('');
        }
    };

    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    const scrollToExample = () => {
        if (registRef.current) {
            scrollToSection(registRef);
            setIsOpen(!isOpen);
        }
    };

    const scrollToInfo = () => {
        if (infoRef.current) {
            scrollToSection(infoRef);
            setIsOpen(!isOpen);
        }
    };

    const scrollToLimit = () => {
        if (infoRef.current) {
            scrollToSection(limitRef);
            setIsOpen(!isOpen);
        }
    };

    const scrollToQa = () => {
        if (qaRef.current) {
            scrollToSection(qaRef);
            setIsOpen(!isOpen);
        }
    };

    return (
        <div className={cn('w-full fixed top-0 left-0 ', { 'border-b': scrolled , 'bg_base' : isTabletOrMobile, 'bg-white' : isDesktopOrLaptop})}>
            <div className='mx-auto my-0 h-[100px] flex items-center w-[calc(100%-80px)] max-w-[1280px] relative'>
                {
                    isDesktopOrLaptop ?
                        <>
                        <img src={PitInLogo} alt={'topLogo'} width={150}/>
                        <div className='ml-auto'>
                            <ul className='flex space-x-8 cursor-pointer'>
                                <li className={cn('li_hover', {'font-bold': activeSection === 'register'})}
                                    onClick={scrollToExample}>서비스 가입
                                </li>
                                <li className={cn('li_hover', {'font-bold': activeSection === 'limit'})}
                                    onClick={scrollToLimit}>요금안내 및 보상한도
                                </li>
                                <li className={cn('li_hover', {'font-bold': activeSection === 'info'})}
                                    onClick={scrollToInfo}>서비스 정보
                                </li>
                                <li className={cn('li_hover', {'font-bold': activeSection === 'qa'})}
                                    onClick={scrollToQa}>Q &
                                    A
                                </li>
                            </ul>
                        </div>
                        </>
                        :
                        <>
                            <img src={WhiteLogo} alt={'topLogo'} width={150}/>
                            <div className='ml-auto relative'>
                                <div className='w-[45px] h-[40px] border bg_base rounded-md' ref={menuButton}>
                                    <button className='w-full h-full flex_center'
                                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => setIsOpen(!isOpen)}>
                                        <img src={Menu} alt='menu' width={40}/>
                                    </button>
                                </div>
                            </div>
                        </>

                }
            </div>
            {
                isTabletOrMobile &&
                <div ref={navRef}
                     className={cn('nav_bar w-full text-black bg-white border flex_center flex-col text-[20px] transition-all duration-300 ease-in-out', {
                         'h-[0px]': !isOpen,
                         'h-[180px]': isOpen,
                     })}>
                    <ul className={cn('flex flex-col flex_center cursor-pointer space-y-1', {'hidden': !isOpen})}>
                        <li className={cn('li_hover', {'font-bold': activeSection === 'register'})}
                            onClick={scrollToExample}>서비스 가입
                        </li>
                        <li className={cn('li_hover', {'font-bold': activeSection === 'limit'})}
                            onClick={scrollToLimit}>요금안내 및 보상한도
                        </li>
                        <li className={cn('li_hover', {'font-bold': activeSection === 'info'})}
                            onClick={scrollToInfo}>서비스 정보
                        </li>
                        <li className={cn('li_hover', {'font-bold': activeSection === 'qa'})}
                            onClick={scrollToQa}>Q &
                            A
                        </li>
                    </ul>
                </div>
            }
        </div>
    );
}
