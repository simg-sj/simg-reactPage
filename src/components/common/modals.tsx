import React, {SetStateAction, useEffect, useState} from "react";
import Close from "../../assets/images/btn_close_24px.svg";
import cn from "classnames";
import Modal from "react-modal";
import {SubmitHandler, useForm} from "react-hook-form";
import {useMediaQuery} from "react-responsive";
import {modalStyles} from "../../utils/common";
import {climeRequest, insertLocation} from "../../api/fetchData";
import {Param} from '../../@types/common';


interface Props {
    type : string;
    PJTcode ?: string;
    pklName ?: string;
    flag : boolean;
    setFlag : React.Dispatch<SetStateAction<boolean>>;
}
export default function Modals({type, PJTcode, pklName, setFlag, flag} : Props) {
    const isPc = useMediaQuery({ query: "(min-width: 990px)" });
    const [imagePreview, setImagePreview] = useState('');
    const styles = modalStyles(type);
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm<Param>({
        defaultValues: {
            type : '',
            name : '',
            cell : '',
            errorType : '',
            errorLocation : '',
            detail : '',
            carNum : '',
            choose : '',
            check01 : false,
            check02 : false,
            image : ''
        },
        mode: 'onChange',
    });
    const eType = watch('errorType');
    const upload = watch("image");

    const closeModal = (e : React.MouseEvent<HTMLButtonElement>) => {
        setFlag(false);
    }



    const onSubmit: SubmitHandler<Param> =  async (data) => {
        if(type === 'clim'){
            try{
                const formData = new FormData();
                data.type = type;
                data.pklName = pklName as string;
                data.PJTcode = PJTcode as string;
                /*for (const file of data.image) {
                    formData.append('files', file);
                }*/

                formData.append('type', type);
                formData.append('name', data.name);
                formData.append('cell', data.cell);
                formData.append('errorType', data.errorType);
                formData.append('errorLocation', data.errorLocation);
                formData.append('detail', data.detail);
                formData.append('carNum', data.carNum);
                formData.append('choose', data.choose);
                formData.append('check01', 'Y');
                formData.append('check02', 'Y');
                formData.append('pklName', data.pklName);
                formData.append('PJTcode', data.PJTcode);

                for (const file of data.image) {
                    formData.append('photos', file)
                }

                let result = await climeRequest(formData);
                if(result === '200'){
                    alert('접수 완료');
                    setFlag(!flag);
                }else {
                    alert(result.msg);
                }
            }catch(e){
                console.error(e);
            }
        }
        if(type === 'manage'){
            try{
                let result = await insertLocation(data);
                if(result[0][0] === '200'){
                    alert("주차등록 되었습니다.");
                    setFlag(!flag);
                }else {
                    setFlag(!flag);
                    alert(result[0][0].msg);
                }

            }catch(e){

                console.error(e);
            }
        }
    };

    const onError = (errors: any) => {

        console.log(errors)
    };

    useEffect(() => {
        if (upload && upload.length > 0) {
            const file = upload[0];
            setImagePreview(URL.createObjectURL(file));
        }
    }, [upload]);
    return (
        <>
            {
                type === 'manage'
                    ?
                    <Modal isOpen={true} style={!isPc ? styles.mobi : styles.web}>
                        <div className='bg-white text-black font-bold h-[60px]'>
                            <div className='flex items-center h-full'>
                                <p className='pl-4'>현장등록</p>
                                <button className='ml-auto pr-4' onClick={closeModal}><img src={Close} alt={'close'}/></button>
                            </div>
                        </div>
                        <div className='w-full flex_center flex-col base_font text-[14px]'>
                            <div className='w-full px-6 flex flex-col text-[12px] bg-[#eeeeee] pt-4'>
                                <p></p>
                                <p>아래항목을 입력해주세요 <span className='text-[#f0821f]'>* 필수입력 항목</span></p>
                            </div>
                            <form className={cn('w-full bg-[#eeeeee] relative',{'text-[12px]' : !isPc})} onSubmit={handleSubmit(onSubmit, onError)}>
                                <div className='px-6 my-4'>
                                    <div className='w-full flex items-center h-[30px]'>
                                        <label className='basis-1/2 flex items-center pl-8 h-[35px]'>
                                            <p>주차장명<span className='text-[#f0821f]'>&nbsp;*</span></p>
                                        </label>
                                        <div className='w-full basis-1/2 h-[35px] px-2'>
                                            <input className='w-full h-full px-2' placeholder={'주차장명을 입력해주세요'}
                                                   {...register('name', {
                                                       required: true,
                                                   })}
                                            />
                                        </div>
                                    </div>
                                    <div className='w-full flex items-center h-[30px] mt-4'>
                                        <label className='basis-1/2 flex items-center pl-8 h-[35px]'>
                                            <p>주차장코드<span className='text-[#f0821f]'>&nbsp;*</span></p>
                                        </label>
                                        <div className='w-full basis-1/2 h-[35px] px-2'>
                                            <input className='w-full h-full px-2' placeholder={'주차장코드를 입력해주세요'}
                                                   {...register('cell', {
                                                       required: true,
                                                   })}
                                            />
                                        </div>
                                    </div>
                                    <div className='w-full flex items-center h-[30px] mt-4'>
                                        <label className='basis-1/2 flex items-center pl-8 h-[35px]'>
                                            <p>시/도<span className='text-[#f0821f]'>&nbsp;*</span></p>
                                        </label>
                                        <div className='w-full basis-1/2 h-[35px] px-2'>
                                            <input className='w-full h-full px-2' placeholder={'시/도를 입력하세요'}
                                                   {...register('errorType', {
                                                       required: true,
                                                   })}
                                            />
                                        </div>
                                    </div>
                                    <div className='w-full flex items-center h-[30px] mt-4'>
                                        <label className='basis-1/2 flex items-center pl-8 h-[35px]'>
                                            <p>시/군/구<span className='text-[#f0821f]'>&nbsp;*</span></p>
                                        </label>
                                        <div className='w-full basis-1/2 h-[35px] px-2'>
                                            <input className='w-full h-full px-2' placeholder={'시/군/구를 입력하세요'}
                                                   {...register('errorLocation', {
                                                       required: true,
                                                   })}
                                            />
                                        </div>
                                    </div>
                                    <div className='w-full flex items-center h-[30px] mt-4'>
                                        <label className='basis-1/2 flex items-center pl-8 h-[35px]'>
                                            <p>동/읍/로<span className='text-[#f0821f]'>&nbsp;*</span></p>
                                        </label>
                                        <div className='w-full basis-1/2 h-[35px] px-2'>
                                            <input className='w-full h-full px-2' placeholder={'동/읍/로를 입력하세요'}
                                                   {...register('detail', {
                                                       required: true,
                                                   })}
                                            />
                                        </div>
                                    </div>
                                    <div className='w-full flex items-center h-[30px] mt-4'>
                                        <label className='basis-1/2 flex items-center pl-8 h-[35px]'>
                                            <p>상세주소<span className='text-[#f0821f]'>&nbsp;*</span></p>
                                        </label>
                                        <div className='w-full basis-1/2 h-[35px] px-2'>
                                            <input className='w-full h-full px-2' placeholder={'상세주소를 입력하세요'}
                                                   {...register('carNum', {
                                                       required: true,
                                                   })}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={cn('flex_center  h-[80px] bg-white w-full', {'fixed bottom-0' : !isPc,})}>
                                    <button className='button_on' type="submit">접수 완료</button>
                                </div>
                            </form>
                        </div>
                    </Modal>


                    :


                    <Modal isOpen={flag} style={!isPc ? styles.mobi : styles.web}>
                    <div className='bg-white text-black font-bold h-[60px]'>
                            <div className='flex items-center h-full'>
                                <p className='pl-4'>{pklName} 장애접수</p>
                                <button className='ml-auto pr-4' onClick={(e : React.MouseEvent) => setFlag(!flag)}><img src={Close} alt={'close'}/></button>
                            </div>
                    </div>
                        <div className='w-full flex_center flex-col base_font text-[14px]'>
                            <div className='w-full px-6 flex flex-col text-[12px] bg-[#eeeeee] pt-4'>
                                <p>({PJTcode})</p>
                                <p>아래항목을 입력해주세요 <span className='text-[#f0821f]'>* 필수입력 항목</span></p>
                            </div>
                            <form className={cn('w-full bg-[#eeeeee]',{'text-[11px]' : !isPc})} onSubmit={handleSubmit(onSubmit, onError)}>
                                <div className='px-6 my-4'>
                                    <div className='w-full flex items-center h-[30px]'>
                                        <label className='basis-1/2 flex items-center pl-8 h-[35px]'>
                                            <p>접수자 성명<span className='text-[#f0821f]'>&nbsp;*</span></p>
                                        </label>
                                        <div className='w-full basis-1/2 h-[35px] px-2'>
                                            <input className='w-full h-full px-2' placeholder={'성명을 입력해주세요.'}
                                                   {...register('name', {
                                                       required: true,
                                                   })}
                                            />
                                        </div>
                                    </div>
                                    <div className='w-full flex items-center h-[30px] mt-4'>
                                        <label className='basis-1/2 flex items-center pl-8 h-[35px]'>
                                            <p>접수자 휴대전화<span className='text-[#f0821f]'>&nbsp;*</span></p>
                                        </label>
                                        <div className='w-full basis-1/2 h-[35px] px-2'>
                                            <input className='w-full h-full px-2' placeholder={'-없이 입력해주세요'}
                                                   {...register('cell', {
                                                       required: true,
                                                   })}
                                            />
                                        </div>
                                    </div>
                                    <div className='w-full flex items-center h-[30px] mt-4'>
                                        <label className='basis-1/2 flex items-center pl-8 h-[35px]'>
                                            <p>장애구분<span className='text-[#f0821f]'>&nbsp;*</span></p>
                                        </label>
                                        <div className='w-full basis-1/2 h-[35px] px-2'>
                                            <select className='w-full h-full'
                                                    {...register('errorType', {
                                                        required: true,
                                                    })}
                                            >
                                                <option value={''} disabled={true}>장애구분</option>
                                                <option value={'장애'}>장애</option>
                                                <option value={'정기권'}>정기권</option>
                                                <option value={'환불'}>환불</option>
                                                <option value={'기타'}>기타</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='w-full flex items-center h-[30px] mt-4'>
                                        <label className='basis-1/2 flex items-center pl-8 h-[35px]'>
                                            <p>장애발생위치<span className='text-[#f0821f]'>&nbsp;*</span></p>
                                        </label>
                                        <div className='w-full basis-1/2 h-[35px] px-2'>
                                            <select
                                                className='w-full h-full'
                                                {...register('errorLocation', {
                                                    required: eType === '장애'
                                                })}
                                                disabled={eType !== '장애'}
                                            >
                                                <option value={''} disabled={true}>장애발생위치</option>
                                                <option value={'정산기출구'}>정산기출구</option>
                                                <option value={'정산기사전'}>정산기사전(상세내역에 기입)</option>
                                                <option value={'LPR입구'}>LPR입구</option>
                                                <option value={'LPR출구'}>LPR출구</option>
                                                <option value={'LPR출구'}>차단기입구</option>
                                                <option value={'LPR출구'}>차단기출구</option>
                                                <option value={'기타'}>기타(상새내역에 기입)</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='w-full flex items-center h-[30px] mt-4'>
                                        <label className='basis-1/2 flex items-center pl-8 h-[35px]'>
                                            <p>장애 상세 내용<span className='text-[#f0821f]'>&nbsp;*</span></p>
                                        </label>
                                        <div className='w-full basis-1/2 h-[35px] px-2'>
                                <textarea className='w-full px-2 h-[60px]' placeholder={'장애발생 내용'}
                                          {...register('detail', {
                                              required: true,
                                          })}
                                />
                                        </div>
                                    </div>
                                    <div className='w-full flex items-center h-[30px] mt-12'>
                                        <label className='basis-1/2 flex items-center pl-8 h-[35px]'>
                                            <p>현장조치사항</p>
                                        </label>
                                        <div className='w-full basis-1/2 h-[35px] px-2'>
                                            <select className='w-full h-full'
                                                    {...register('choose', {
                                                        required: false,
                                                    })}
                                            >
                                                <option value={''} disabled={true}>현장조치사항</option>
                                                <option value={'수동 스위치 고정'}>수동 스위치 고정</option>
                                                <option value={'현장 업락 고정'}>현장 업락 고정</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='w-full flex items-center h-[30px] mt-4'>
                                        <label className='basis-1/2 flex items-center pl-8 h-[35px]'>
                                            <p>첨부파일</p>
                                        </label>
                                        <div className={cn('w-full basis-1/2 px-2 flex flex-col h-[30px]')}>
                                            <div className='w-full flex flex-col basis-1/2 h-[180px] '>
                                                <input {...register("image")}
                                                       id="picture"
                                                       type="file"
                                                       accept="image/*"
                                                       className='w-full h-full '
                                                       multiple={true}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-white'>
                                    <div className='w-full flex flex-col py-4 base_font text-[14px] mt-4 px-4'>
                                        <p className='text-[16px] font-bold text-black'>개인정보 수집 및 이용동의</p>
                                        <div className='flex flex-col px-4 text-[12px]'>
                                        <ul className='list-decimal'>
                                                <li className='font-bold pt-2'>
                                                    개인정보의 수집 및 이용목적
                                                    <ol>
                                                        <li className='font-thin'>장애발생 대응</li>
                                                    </ol>
                                                </li>
                                                <li className='font-bold pt-2'>
                                                    수집항목
                                                    <ol>
                                                        <li className='font-thin'>성명,연락처(휴대전화)</li>
                                                    </ol>
                                                </li>
                                                <li className='font-bold pt-2'>
                                                    개인정보의 이용 및 보유기간
                                                    <ol>
                                                        <li className='font-thin'>목적 완료 후 즉시 파기</li>
                                                    </ol>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={cn({'text-[11px]': !isPc})}>
                                            <div className='flex_center w-full mt-4'>
                                                <div className='basis-1/6 flex'>
                                                    <input type='checkbox' className='ml-auto mr-2'
                                                           {...register('check01', {
                                                               required: true,
                                                           })}
                                                    />
                                                </div>
                                                <p className='basis-5/6'>위와 같이 개인정보수집 및 이용방침에 동의를 합니다.</p>
                                            </div>
                                            <div className='flex_center w-full mt-4'>
                                                <div className='basis-1/6 flex'>
                                                    <input type='checkbox' className='ml-auto mr-2'
                                                           {...register('check02', {
                                                               required: true,
                                                           })}
                                                    />
                                                </div>
                                                <p className='basis-5/6'>위와 같이 개인정보 제3자 제공에 동의합니다.</p>
                                            </div>
                                            <div className='flex_center w-full mt-4 font-bold text-black'>
                                                <span>대표번호 1877 - 3006</span>
                                            </div>
                                            <div className='flex_center w-full mt-4 '>
                                                <button className='button_on' type="submit">접수 완료</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Modal>
            }
        </>
    )
}
