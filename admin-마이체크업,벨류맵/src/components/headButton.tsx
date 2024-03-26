import React, {SetStateAction} from "react";
import cn from "classnames";


interface Props {
    text: string,
    className : string,
    setType : React.Dispatch<SetStateAction<string>>,
    type : string
}
export default function HeadButton({text, className, setType, type} : Props){
    const handleChange = (ev: React.MouseEvent<HTMLButtonElement>) => {
        setType(type);
    };
    return (
        <button onClick={handleChange} className={cn('base-button', className)}>{text}</button>
    )
}
