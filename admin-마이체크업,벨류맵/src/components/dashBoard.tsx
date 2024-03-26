import React from "react";
import CustomSlider from "./customSlider";
import cn from 'classnames';
import {Person} from '../@types/common';
interface Props {
    card : boolean,
    data :Person[]
}
export default function DashBoard({card, data} : Props){
    return (
        <div className={cn('pl-[150px]  pt-[80px] w-[calc(100%-120px)]')}>
            <CustomSlider data={data}/>
        </div>
    )
}
