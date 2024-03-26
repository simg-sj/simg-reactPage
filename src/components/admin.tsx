import cn from 'classnames';
import React, {useEffect, useState} from "react";
import Login from "./login";
import Management from "./management";

export default function Admin(){
    const [login, setLogin] = useState(false);


    useEffect(() => {
        if(sessionStorage.getItem('upk')){
            setLogin(true);
        }
    }, [login]);
    return(
        <div className={cn('w-full pt-[120px]')}>
            <div className='div_wrap flex_center'>
                {
                    login ?
                        <Management/>
                        :
                        <Login setLogin={setLogin}/>
                }
            </div>
        </div>
    )
}
