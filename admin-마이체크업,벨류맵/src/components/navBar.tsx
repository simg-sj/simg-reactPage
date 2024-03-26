import React, { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import cn from "classnames";
import Left from '../assets/images/angles-left-solid.svg';
import Menu from '../assets/images/menu.svg';
import { getCompany } from '../utils/common';

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [navRef]);

    return (
        <div
            ref={navRef}
            className={cn('fixed top-0 left-0 shadow h-full bg-white flex flex-col py-8 z-[9999] transition-all duration-500 ease-in-out', {
                'w-[80px]': !open,
                'w-[200px]': open
            })}
        >
            <div className='flex_center flex-col'>
                <button
                    className={cn('w-[60px] h-[60px] flex_center')}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => setOpen(!open)}
                >
                    {open ?
                        <img src={Left} alt={'Left'} width={40}/>
                        :
                        <img src={Menu} alt={'menu'} width={40}/>
                    }
                </button>
            </div>
            {open && (
                <div className='flex_center flex-col mt-32 text-[16px] font-normal'>
                    {getCompany().map((company, index) => (
                        <div className='mb-8' key={index}>
                            <Link to={`/${company.url}`} onClick={(e :React.MouseEvent) => setOpen(false)}>
                                {company.name}
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
