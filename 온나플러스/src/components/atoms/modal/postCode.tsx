import DaumPostcode from 'react-daum-postcode';
import React, {useEffect, useState} from "react";
import Modal from "react-modal";
import {InfoProps} from "../inputs/carNumInput";

const PostCode = (props : {info : InfoProps, setInfo : React.Dispatch<React.SetStateAction<InfoProps>>}) => {
    const isMobile = (/Mobi/i.test(window.navigator.userAgent));
    const [flag, setFlag] = useState<boolean>(false);
    const [cPost, setCpost] = useState<string>('');
    const [cAddr1, setCaddr1] = useState<string>('');
    const [cAddr2, setCaddr2] = useState<string>('');
    console.log(isMobile)
    const customStyles = {
        overlay: {
            backgroundColor: "rgba(0,0,0,0.5)",
        },
        content: {
            left: '0',
            margin: "auto",
            width: "350px",
            height: "350px",
            padding: "0",
            overflow: "hidden",
            //transform : "translate(-50%,0)"
        },
    };
    const mobileStyles = {
        overlay: {
            backgroundColor: "rgba(0,0,0,0.5)",
        },
        content: {
            left: '50%',
            margin: "auto",
            width: "350px",
            height: "350px",
            padding: "0",
            overflow: "hidden",
            transform : "translate(-50%,0)"
        },
    }
    const handleComplete = (data : any) => {
        let fullAddress :string = data.address;
        let extraAddress = '';
        console.log(data)
        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
            props.setInfo((prevState) => {
                return { ...prevState,
                cPost : data.zonecode,
                cAddr1 : data.roadAddress
                }
            });
            setCpost(data.zonecode);
            setCaddr1(data.roadAddress);
        }
        setFlag(false)
    }
    useEffect(() => {
        props.setInfo((prevState) => {
            return { ...prevState, cAddr2: cAddr2 }
        });
    }, [cAddr2]);
    return (
        <div className='flex flex-col mx-2 base_text my-2'>
            <h2 className='sub_title pb-1 pl-2'>주소</h2>
            <div className='flex base_text'>
                <div className='w-[150px] h-[40px] border rounded-lg flex items-center'>
                    <h2 className='ml-4'>
                        {cPost === '' ? '우편번호' : cPost}
                    </h2>
                </div>
                <button onClick={(e:React.MouseEvent<HTMLElement>)=>setFlag(!flag)} className='button_on ml-8 flex justify-center items-center'>우편번호 검색</button>
            </div>
            <div className='h-[40px] border rounded-lg mt-4 flex items-center'>
                <h2 className='ml-4'>
                    {cAddr1 === '' ? '주소1' : cAddr1}
                </h2>
            </div>
            <input type={'text'} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setCaddr2(e.target.value)} value={cAddr2} className='input mt-4' placeholder='상세주소' />
            { flag &&
                <Modal isOpen={flag} ariaHideApp={false} style={isMobile ? mobileStyles : customStyles}>
                    <div className='flex border-b bg-[#0e47a1]'><button className='ml-auto px-4 py-2 text-white font-normal' onClick={(e : React.MouseEvent<HTMLElement>)=>setFlag(false)}>닫기</button></div>
                    <DaumPostcode onComplete={handleComplete} style={{height : '100%'}}/>
                </Modal>
            }
        </div>
    )
}
export default PostCode;