import React, {useEffect, useState} from "react";

export type InfoProps = {
   //bpk : string,
    cName : string,
    cJumin : string,
    cCell : string,
    cCheck : boolean
    /*cMail : string,
    cPost : string,
    cAddr1 : string,
    cAddr2 : string,
    cJobN : string,
    cCarCc : string,
    cUseN : string,
    cJobLocal : string,
    cMoney : string,
    cDrink : string,
    cWeekD : string,
    cOneD : string,
    cSmoke : string,
    cWeekS : string,
    cOneS : string,
    cHeight : string,
    cWeight : string,
    cBank : string,
    cAccount : string,
    cPayDt : string,*/
}
const CarNumInput = (props : {info : InfoProps, setInfo : React.Dispatch<React.SetStateAction<InfoProps>>}) => {
    const onChangeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {id} = e.target;
        const {value} = e.target;
        if(id === 'carCC'){
            props.setInfo((prevState) => {
                return { ...prevState,
                    cCarCc: e.target.value,
                }
            });
        }
        if(id === 'useN'){
            props.setInfo((prevState) => {
                return { ...prevState,
                    cUseN : e.target.value
                }
            });
        }
    }
    return (
        <div className='flex-col pb-8 px-2 pt-4'>
            <div className='flex items-center'>
                <div className='flex-col'>
                    <div className='sub_title pb-1 pl-2 pr-4'>
                        운행차량 배기량(cc)
                    </div>
                    <input type={'text'} id={'carCC'} onChange={onChangeHandler} className='input' placeholder='배기량을 입력하세요(n cc)'/>
                </div>
                <div className='flex-col pl-8'>
                    <div className='sub_title pb-1 pl-2 '>
                        이륜차 운전경력
                    </div>
                    <input type={'text'} id={'useN'} onChange={onChangeHandler} className='input' placeholder='운전경력을 입력하세요(n 년)'/>
                </div>
            </div>
        </div>
    )
}
export default CarNumInput;