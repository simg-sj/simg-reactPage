import {SubmitHandler, useForm} from "react-hook-form";
import React, {SetStateAction, useState} from "react";
import {useMediaQuery} from "react-responsive";
import cn from 'classnames';
import axiosInstance from "../../api/axiosInstans";
import {Agree} from "./agree";


interface Param {
    dName ?: string;
    dCell ?: string;
    dJumin ?: string;
    carType ?: string;
    businessType ?: string;
    carNum ?: string;
    carUse ?: string;
    collectionYn ?: string;
    provisionYn ?: string;
    inquiryYn ?: string;
    marketingYn ?: string;
    sharingYn ?: string;
}
interface Props {
    setIsOpen : React.Dispatch<SetStateAction<boolean>>
}
export default function RegisterForm({setIsOpen} : Props) {
    const isMobile = useMediaQuery({maxWidth : 930})
    const [agreeOpen, setAgreeOpen] = useState(false);
    const [type, setType] = useState('');
    const isMobi = /Mobi/i.test(window.navigator.userAgent);
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm<Param>({
        defaultValues: {
            dName : '',
            dCell : '',
            dJumin : '',
            carNum : '',
            businessType :'',
            carType : '',
            carUse : '',
            collectionYn : '',
            provisionYn : '',
            inquiryYn : '',
            marketingYn : '',
            sharingYn : '',
        },
        mode: 'onChange',
    });
    const onSubmit : SubmitHandler<Param> = async (data : Param) => {
        try{
            const res = await axiosInstance.post('/api1001', data, {
            });
            axiosInstance.post('/count', {job : 'submit'}).then(r => console.log('count'));

            // @ts-ignore
            if(res.code === 200){
                // @ts-ignore
                alert(res.msg);
            }else {
                // @ts-ignore
                alert(res.msg);
            }

            setIsOpen(false);
        }catch(e){
            alert('서비스 오류입니다. \n본사에 문의주시기 바랍니다. \n☎ 1670-0470');
        }
    }
    const onError = (errors : any) => {
        console.log(errors)
    }
    const car = watch("carUse");
    return (
        <div className={cn('w-full flex flex-col', {'text-[12px] overflow-y-scroll pt-[60px] h-full' : isMobi})}>
            <form id={'regi'} className='w-[calc(100% - 20%)] px-8 my-8 space-y-4 base_font relative'
                  onSubmit={handleSubmit(onSubmit, onError)}
            >
                <div className='w-full flex'>
                    <label className='basis-1/3 flex_center'>
                        이름
                    </label>
                    <input
                        type={'text'}
                        className={cn('basis-2/3',{'mobi_input' : isMobile, 'input' : !isMobile})}
                        {...register('dName', {
                            required : true
                        })}
                    />
                </div>
                <div className='w-full flex'>
                    <label className='basis-1/3 flex_center'>
                        주민등록번호
                    </label>
                    <input type={'text'}
                           className={cn('basis-2/3',{'mobi_input' : isMobile, 'input' : !isMobile})}
                           {...register('dJumin', {
                               required : true
                           })}
                    />
                </div>
                <div className='w-full flex'>
                    <label className='basis-1/3 flex_center'>
                        휴대폰 번호
                    </label>
                    <input type={'text'}
                           className={cn('basis-2/3',{'mobi_input' : isMobile, 'input' : !isMobile})}
                           {...register('dCell', {
                               required : true
                           })}
                    />
                </div>
                <div className='w-full flex'>
                    <label className='basis-1/3 flex_center'>
                        개인 / 법인
                    </label>
                    <select className={cn('basis-2/3',{'mobi_select' : isMobile, 'select' : !isMobile})}
                            defaultValue={'00'}
                            {...register('businessType', {
                                required : true
                            })}
                    >
                        <option value={'00'} disabled={true} >선택</option>
                        <option>개인</option>
                        <option>법인</option>
                    </select>
                </div>
                <div className='w-full flex'>
                    <label className='basis-1/3 flex_center'>
                        차량 용도
                    </label>
                    <select className={cn('basis-2/3',{'mobi_select' : isMobile, 'select' : !isMobile})}
                            //onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setType(e.currentTarget.value)}
                            {...register('carUse', {

                                required : true,
                            })}
                            defaultValue={'00'}>
                        <option value={'00'} disabled={true}>선택</option>
                        <option value={'01'}>택시</option>
                        <option value={'02'}>화물</option>
                    </select>
                    {errors.carUse && <p>차량용도를 선택해주세요.</p>}
                </div>
                <div className='w-full flex'>
                    <label className='basis-1/3 flex_center'>
                        차종
                    </label>
                    {
                        car === '01' ?
                            <select className={cn('basis-2/3',{'mobi_select' : isMobile, 'select' : !isMobile})}
                                    {...register('carType', {
                                        required : false
                                    })}
                                    defaultValue={'00'}>
                                <option value={'00'} disabled={true}>선택</option>
                                <option>니로(DE) EV</option>
                                <option>아이오닉 5 EV (톰레인지)</option>
                            </select>
                            :
                            <select className={cn('basis-2/3',{'mobi_select' : isMobile, 'select' : !isMobile})}
                                    {...register('carType', {
                                        required : false
                                    })}
                                    disabled={car === '' && true}>
                                <option>선택</option>
                                <option>봉고 EV</option>
                                <option>포터 EV</option>
                            </select>
                    }
                </div>
                <div className='w-full flex'>
                    <label className='basis-1/3 flex_center'>
                        차량 번호
                    </label>
                    <input type={'text'}
                           className={cn('basis-2/3',{'mobi_input' : isMobile, 'input' : !isMobile})}
                           {...register('carNum', {
                               required : true
                           })}
                    />
                </div>
            </form>
            <div className={cn('bg-white w-full ',{'absolute bottom-0' : !isMobile})}>
                <div className={cn('flex flex-col base_font p-4 mt-2 w-full space-y-1',{'text-[10px]' : isMobile, 'text-[14px]' : !isMobile})}>
                    <div className='flex '>
                        <input type='checkbox'

                        />
                        <p className='ml-2'>아래 정보제공 동의에 대하여 모두 동의합니다.</p>
                    </div>
                    <div className='flex '>
                        <input type='checkbox'
                               {...register('collectionYn', {
                                   required : true
                               })}
                        />
                        <p className='ml-2'>개인(신용)정보의 수집, 이용에 관한 사항 (필수)</p>
                        <button className='ml-auto' onClick={(e :React.MouseEvent<HTMLButtonElement>) => {
                            setAgreeOpen(true);
                            setType('collect')
                        }}>[보기]</button>
                    </div>
                    <div className='flex '>
                        <input type='checkbox'
                               {...register('inquiryYn', {
                                   required : true
                               })}
                        />
                        <p className='ml-2'>개인(신용)정보의 조회에 관한 사항 (필수)</p>
                        <button className='ml-auto' onClick={(e :React.MouseEvent<HTMLButtonElement>) => {
                            setAgreeOpen(true);
                            setType('inquiry')
                        }}>[보기]</button>
                    </div>
                    <div className='flex '>
                        <input type='checkbox'
                               {...register('provisionYn', {
                                   required : true
                               })}
                        />
                        <p className='ml-2'>개인(신용)정보의 제공에 관한 사항 (필수)</p>
                        <button className='ml-auto' onClick={(e :React.MouseEvent<HTMLButtonElement>) => {
                            setAgreeOpen(true);
                            setType('provision')
                        }}
                        >[보기]</button>
                    </div>
                    <div className='flex '>
                        <input type='checkbox'
                               {...register('sharingYn', {
                                   required : true
                               })}
                        />
                        <p className='ml-2'>민감정보 및 고유식별정보의 처리에 관한 사항 (필수)</p>
                        <button className='ml-auto' onClick={(e :React.MouseEvent<HTMLButtonElement>) => {
                            setAgreeOpen(true);
                            setType('sharing');
                        }}
                        >[보기]</button>
                    </div>
                    <div className='flex'>
                        <input type='checkbox'
                               {...register('marketingYn', {
                               })}
                        />
                        <p className='ml-2'>마켓팅 활용 동의에 관한 사항</p>
                        <button className='ml-auto' onClick={(e :React.MouseEvent<HTMLButtonElement>) => {
                            setAgreeOpen(true);
                            setType('marketing');
                        }}>[보기]</button>
                    </div>
                </div>
                <div className='w-full flex_center my-4'>
                    <button type={'submit'} form={'regi'} className='border w-[120px] h-[40px] rounded-xl bg_base text-white font-bold'>접수</button>
                </div>
            </div>
            {
                agreeOpen && <Agree type={type} agreeOpen={agreeOpen} setAgreeOpen={setAgreeOpen}/>
            }
        </div>
    )
}

