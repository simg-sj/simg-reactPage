import cn from 'classnames';
import React, {ChangeEvent} from 'react';
interface Props {
    classnames : string,
    text : string,
    value ?: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export default function BaseText({value, classnames, text, onChange} : Props){
    return (
        <div className='flex_center base_font'>
            <label className='w-[60px] text-center mx-1'>
                {text}
            </label>
            <input className={cn('text_input',classnames)} type='text' onChange={onChange}/>
        </div>
    )
}
