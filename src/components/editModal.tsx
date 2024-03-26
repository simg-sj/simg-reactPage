import React, {SetStateAction, useEffect} from "react";
import Close from "../assets/images/btn_close_24px.svg";
import cn from "classnames";
import Modal from "react-modal";
import {useMediaQuery} from "react-responsive";
import {modalStyles} from "../utils/common";
import {Location, Param} from "../@types/common";
import {searchData, updateLocation} from "../api/fetchData";
import {SubmitHandler, useForm, } from "react-hook-form";

interface Props {
    flag : boolean;
    setFlag : React.Dispatch<SetStateAction<boolean>>;
    editData : any;
    setData : any;
}

export default function EditModal({setFlag, flag, editData, setData} : Props){
    const isPc = useMediaQuery({ query: "(min-width: 990px)" });
    const styles = modalStyles('manage');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Param>({
        defaultValues: {
            type : '',
            name : editData.pklName,
            cell : editData.PJTcode,
            errorType : editData.region,
            errorLocation : editData.city,
            detail : editData.town,
            carNum : editData.pklAddress,
            choose : '',
            check01 : false,
            check02 : false,
        },
        mode: 'onChange',
    });

    useEffect(() => {
        // 모달이 열렸을 때 body에 overflow: hidden 스타일 적용
        if (flag) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto'; // 모달이 닫혔을 때 스타일 제거
        }
    }, [flag]);
    const onSubmit: SubmitHandler<Param> =  async (data) => {
            try{
                let result = await updateLocation(data);
                if(result[0][0] === '200'){
                    alert("주차장 정보가 수정되었습니다.");
                    setFlag(!flag);
                }else {
                    searchData(editData.pklName).then((res) =>{
                        setFlag(!flag);
                        setData(res);
                        alert(result[0][0].msg);
                    });
                }
            }catch(e){

                console.error(e);
            }
    };

    const onError = (errors: any) => {

        console.log(errors)
    };
    return(
        <Modal isOpen={true} style={!isPc ? styles.mobi : styles.web}>
            <div className='bg-white text-black font-bold h-[60px]'>
                <div className='flex items-center h-full'>
                    <p className='pl-4'>현장수정</p>
                    <button className='ml-auto pr-4' onClick={(e : React.MouseEvent) => setFlag(!flag)}><img src={Close} alt={'close'}/></button>
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
                                <input className='w-full h-full px-2'
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
                        <button className='button_on' type="submit">완료</button>
                    </div>
                </form>
            </div>
        </Modal>
    )
}
