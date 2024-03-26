import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {calcPremium, sendJoin} from "../../pages/api/sendJoin";
import Modal from "react-modal";
import {InfoProps} from "./inputs/carNumInput";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../pages/reducers";
import {calculateInsAge} from "../../pages/api/calculateInsAge";
import {USER_BIRTH, userBirth} from "../../pages/reducers/userInfo";
import PhoneIcon from '../../assets/images/phoneIcon.png';
const RegisterButton = (props : {info : InfoProps, setStep : React.Dispatch<React.SetStateAction<string>>} ) => {
    const page = useNavigate();
    const dispatch = useDispatch();
    const isMobile = (/Mobi/i.test(window.navigator.userAgent));
    const [msg, setMsg] = useState<string>('');
    const [flag, setFlag] = useState<boolean>(false);
    const [errMsg, setErrMsg] = useState<boolean>(false);
    const  keys : string     = useSelector((state : RootState ) => state.userInfo.keys);
    const mobi_customStyles = {
        overlay: {
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex : 100
        },
        content: {
            left: "50%",
            margin: "auto",
            width: "350px",
            height: "350px",
            padding: "0",
            overflow: "hidden",
            transform : "translate(-50%,0)"
        },
    };
    const customStyles = {
        overlay: {
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex : 100
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
    const mobi_customStyles2 = {
        overlay: {
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex : 100
        },
        content: {
            left: "50%",
            margin: "auto",
            width: "350px",
            height: "220px",
            padding: "0",
            overflow: "hidden",
            transform : "translate(-50%,0)"
        },
    };
    const customStyles2 = {
        overlay: {
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex : 100
        },
        content: {
            left: '0',
            margin: "auto",
            width: "350px",
            height: "220px",
            padding: "0",
            overflow: "hidden",
            //transform : "translate(-50%,0)"
        },
    };
    const onClickHandler = (e : React.MouseEvent<HTMLElement>) => {
        let {id}: any = e.target;
        let text = '';
        if (id === 'reg') {
            let idx: keyof typeof props.info;
            let check: string = '';
            if (keys === 'onna' || keys === 'enuri' || keys === 'barico' || keys === 'none') {
                for (idx in props.info) {
                    console.log(idx);
                    if (props.info[idx] === '' || props.info[idx] === false) {
                        check = idx;
                        console.log(props.info[idx])
                        console.log(check)
                        if (check === 'cName') text = '이름을 입력해주세요.';
                        if (check === 'cJumin') text = '주민번호를 입력해주세요.';
                        if (check === 'cCell') text = '핸드폰번호를 입력해주세요.';
                        if (check === 'cCheck') text = '필수 확인사항, 약관에 동의해주세요.';
                        break;
                    }
                    /*if(props.info[idx] === '' && idx !== 'cMail' && props.info[idx] !== 'Y'){
                        check = idx;
                        if(check === 'bpk') text = '업체를 선택해주세요.';
                        if(check === 'cName') text = '이름을 입력해주세요.';
                        if(check === 'cCell') text = '전화번호를 입력해주세요.';
                        if(check === 'cJumin') text = '주민번호를 입력해주세요.';
                        if(check === 'cPost') text = '주소를 입력해주세요.';
                        if(check === 'cAddr1') text = '주소1을 입력해주세요.';
                        if(check === 'cAddr2') text = '주소2를 입력해주세요.';
                        if(check === 'cJobN') text = '직장명을 입력해주세요.';
                        if(check === 'cCarCc') text = '배기량을 입력해주세요.';
                        if(check === 'cUseN') text = '운전경력을 입력해주세요.';
                        if(check === 'cJobLocal') text = '근무지역을 입력해주세요.';
                        if(check === 'cMoney') text = '월소득을 입력해주세요.';
                        if(check === 'cDrink') text = '음주여부를 입력해주세요.';
                        if(check === 'cWeekD') text = '음주횟수를 입력해주세요.';
                        if(check === 'cOneD') text = '주량을 입력해주세요.';
                        if(check === 'cSmoke') text = '흡연여부를 입력해주세요.';
                        if(check === 'cWeekS') text = '흡연량를 입력해주세요.';
                        if(check === 'cOneS') text = '흡연기간을 입력해주세요.';
                        if(check === 'cHeight') text = '주소를 입력해주세요.';
                        if(check === 'cWeight') text = '몸무게를 입력해주세요.';
                        if(check === 'cBank') text = '은행명을 입력해주세요.';
                        if(check === 'cAccount') text = '계좌번호를 입력해주세요.';
                        if(check === 'cPayDt') text = '납입 일자를 선택해주세요.';
                        break;
                    }*/
                }
                if (check === '') {
                    let param = {
                        bpk: keys,
                        cName: props.info.cName,
                        cJumin: props.info.cJumin,
                        cCell: props.info.cCell,
                        cCheck: props.info.cCheck
                    }
                    sendJoin(param)
                        .then((res: any) => {
                            console.log(res)
                            if (res.status === 200) {
                                setFlag(true);
                                /*alert("감사합니다!\n이륜차 운전자 보험 가입 신청이 완료되었습니다. \n 기입해주신 번호로 담당자가 곧 연락드릴 예정입니다")*/
                            } else {
                                setMsg(res.msg)
                                setErrMsg(true);
                                /*set(res.msg);*/
                            }
                        })
                } else {
                    alert(text);
                }
            } else {
                text = 'URL 주소를 확인해주세요.';
                alert(text);
            }
        }
            if (id === 'confirm') {
                let birth = props.info.cJumin.substring(0,6);
                let male = '';
                let name = props.info.cName;
                if(Number(birth.substring(0,1)) >= 1){
                    birth = "19"+birth;
                }else {
                    birth = '20'+birth;
                }
                if(props.info.cJumin.substring(6,7) === '1' || props.info.cJumin.substring(6,7) === '3'){
                    male = 'm';
                }
                if(props.info.cJumin.substring(6,7) === '2' || props.info.cJumin.substring(6,7) === '4') {
                    male = 'fe';
                }
                let age = calculateInsAge(birth);
                let param = {
                    bpk : keys,
                    age : age
                }
                calcPremium(param)
                    .then((res: any) => {
                        console.log(res)
                        if (res.status === 200) {
                            let highpremiums : string = res.highpremiums;
                            let defaultpremiums : string = res.defaultpremiums;
                            /*setFlag(true);*/
                            dispatch(userBirth(birth, male, age, name, defaultpremiums, highpremiums ));
                            props.setStep('step2');
                            /*alert("감사합니다!\n이륜차 운전자 보험 가입 신청이 완료되었습니다. \n 기입해주신 번호로 담당자가 곧 연락드릴 예정입니다")*/
                        } else {
                            //setFlag(true);
                            alert(res.msg);
                        }
                    })
            }
    }
    useEffect(() => {

    }, [props.info]);
    return (
        <div className='w-full '>
            <div className='border  mx-8 mb-6  py-[10px] px-4 rounded-lg bg-[#0e47a1] text-white font-bold text-[14px] flex items-center justify-center'>
                <button id={'reg'} className='w-full h-full' onClick={onClickHandler}>신청하기</button>
            </div>
            {   flag &&
                    <Modal isOpen={flag} style={isMobile ? mobi_customStyles : customStyles}>
                        <div className='border-b bg-[#0e47a1] text-white border-b-[#0e47a1] font-bold'>
                            <div className='flex justify-center py-2'>
                                가입 신청 완료
                            </div>
                        </div>
                        <div className='flex-col justify-center text-[14px] font-semibold mx-4'>
                            <div className='pt-4'>
                                {props.info.cName} 라이더님 이륜자동차 운전자보험 가입 신청을 해주셔서 감사합니다.
                            </div>
                            <div className='pt-2'>
                                계약 진행을 위해 담당자가 신청순서에 따라 전화(☎️1877-3006) 드릴 예정이오니 잠시만 기다려 주시기 바랍니다.
                            </div>
                            <div className='pt-2'>
                                많은 신청건으로 전화가 지연될 수 있아오니 양해 부탁드립니다.
                            </div>
                            <div>
                                안전 운전되십시요.
                            </div>
                        </div>
                        <div className=' w-full flex justify-center py-4 '>
                            <button id={'confirm'} className='button_on' onClick={onClickHandler}>닫기</button>
                        </div>
                    </Modal>
            }
            {   errMsg &&
                <Modal isOpen={errMsg} style={isMobile ? mobi_customStyles2 : customStyles2}>
                    <div className='border-b bg-[#0e47a1] text-white border-b-[#0e47a1] font-bold'>
                        <div className='flex justify-center py-2'>
                            알림
                        </div>
                    </div>
                    <div className='flex-col justify-center text-[14px] font-semibold mx-4 mt-2'>
                        <h2>
                            {msg}
                        </h2>
                    </div>
                    <div className='flex items-center w-full mt-8 '>
                        <div className='basis-1/2 flex justify-center'>
                            <button id={'confirm'} className='button_on' onClick={(e : React.MouseEvent<HTMLElement>)=>setErrMsg(false)}>닫기</button>
                        </div>
                        <div className='basis-1/2 flex justify-center'>
                            <button id={'confirm'} className='button_on' onClick={onClickHandler}>보험료 확인</button>
                        </div>
                    </div>
                </Modal>
            }
        </div>
    )
}
export default RegisterButton;
