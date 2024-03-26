import React from "react";

interface PhoneProps {
    cell : string
}
const ReadPhone = ({cell} : PhoneProps) => {
    return (
        <div className='flex flex-col pb-8'>
            <div className='sub_title pb-1 pl-4'>
                핸드폰
            </div>
            <input type={'text'} value={cell} readOnly={true} className='input ml-2'/>
        </div>
    )
}
export default ReadPhone;