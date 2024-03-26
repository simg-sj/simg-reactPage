import React, {useEffect, useState} from "react";
import { sendMessage } from "../../pages/api/sendMessage";
import { randomCode } from "../util/common";
import Modal from "react-modal";
import {useDispatch} from "react-redux";
type sendParam = {
    code : string,
    cell : string
}
interface CellProps {
    cell : string,
    setCode : React.Dispatch<React.SetStateAction<string>>,
    isCell : boolean
}
const SendButton = ({cell, setCode, isCell} : CellProps) => {
    const [sendFlag, setSendFlag] = useState<boolean>(false);
    const [count, setCount] = useState<number>(0);
    const [show, setShow] = useState<boolean>(false);
    const dispatch = useDispatch();
    const customStyles = {
        overlay: {
            backgroundColor: "rgba(0,0,0,0.5)",
        },
        content: {
            left: "50%",
            margin: "auto",
            width: "350px",
            height: "200px",
            padding: "0",
            overflow: "hidden",
            transform : "translate(-50%,0)"
        },
    };
    const onClickHandler = (e : React.MouseEvent<HTMLElement>) => {
         sendMessage(cell)
            .then((res : any) => {
                setCode(res.code);
                setCount(count+1);
                setShow(true);
                setSendFlag(false);
                alert('입력하신 번호로 인증번호를 발송했습니다.');
                setTimeout(() => {
                    setSendFlag(true);
                }, 10000);
            }).catch((error) => {
                alert(error.msg);
         })
    }
    useEffect(() => {
        if(isCell){
            setSendFlag(true);
        }else {
            setSendFlag(false);
        }
    }, [isCell]);
    return (
        <div>
            <button className={sendFlag ? 'button_on' : 'button_off'} onClick={onClickHandler} disabled={!sendFlag}>{ count === 0 ? '인증번호 전송' : '인증번호 재전송'}</button>
            {/*{
                  show &&
                <Modal isOpen={show} style={customStyles}>
                    <div className='border-b bg-[#f6fbf7] border-b-[#157b4b] font-bold'>
                        <div className='flex justify-center py-2'>
                            인증번호 발송 완료
                        </div>
                    </div>
                    <div className='flex justify-center mt-8'>
                        <h2>
                            인증번호가 정상적으로 발송되었습니다.
                        </h2>
                    </div>
                    <div className='fixed bottom-0 w-full flex justify-center py-2'>
                        <button id={'confirm'} className='button_on' onClick={(e:React.MouseEvent<HTMLElement>)=>setShow(false)}>확인</button>
                    </div>
                </Modal>
            }*/}
        </div>
    )
}
export default SendButton;