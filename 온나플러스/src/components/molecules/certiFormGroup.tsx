import React, {useEffect, useState} from "react";
import PhoneInput from "../atoms/phoneInput";
import SendButton from "../atoms/sendButton";
import CodeInput from "../atoms/codeInput";
import ConfirmButton from "../atoms/confirmButton";

type CheckProps = {
    check : boolean
    setStep : React.Dispatch<React.SetStateAction<string>>
}
const CertiFormGroup = ({check, setStep} : CheckProps) => {
    const [cell, setCell] = useState<string>('');
    const [isCell, setIsCell] = useState<boolean>(false);
    const [code, setCode] = useState<string>('');
    const [inputCode, setInputCOde ] = useState<string>('')
    const [isCode, setIsCode] = useState<boolean>(false);

    useEffect(() => {
        if(code !== '') setIsCode(true);
        if(code === '') setIsCode(false);
    }, [cell, code]);
    return (
        <div className='mx-2 my-8 pb-[160px]'>
            <div className='flex justify-between '>
                {/*<PhoneInput setCell={setCell} setIsCell={setIsCell}/>*/}
                <SendButton cell={cell} setCode={setCode} isCell={isCell}/>
            </div>
            <div className='flex justify-between mt-4'>
                <CodeInput setInputCode={setInputCOde} />
                {/*<ConfirmButton inputCode={inputCode} code={code} isCode={isCode} cell={cell} check={check} setStep={setStep}/>*/}
            </div>
        </div>
    )
}
export default CertiFormGroup;