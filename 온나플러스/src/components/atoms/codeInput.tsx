import React, {useEffect, useState} from "react";

interface CodeProps {
    setInputCode : React.Dispatch<React.SetStateAction<string>>
}
const CodeInput = ({setInputCode} : CodeProps) => {
    const [code, setCode] = useState<string>('');
    const onChangeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target

        const onlyNumber = value.replace(/[^-0-9]/g, '');
        setCode(onlyNumber);
        setInputCode(onlyNumber);
    }
    return (
        <div>
            <input placeholder='인증번호 6자리' className='input' maxLength={6}  type={"text"} value={code} onChange={onChangeHandler}/>
        </div>
    )
}
export default CodeInput;