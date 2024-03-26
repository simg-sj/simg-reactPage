import React, {useState, useEffect, useMemo} from 'react';
import { SubmitHandler, useForm} from "react-hook-form";
import Signature from "./signature";
import axios from 'axios';
import dayjs from "dayjs";
import DiagSelect from "./diagSelect";
import InputDatePicker from "./inputDatePicker";


interface Inputs {
    image : any;
    birth : string,
    name : string,
    email : string,
    phone : string,
    diagName : string,
    strDate : string,
    account: number,
    bank : string,
    address : string
}

interface modalType {
    setMsg : React.Dispatch<React.SetStateAction<string>>;
    setIsOpen : React.Dispatch<React.SetStateAction<boolean>>;
}

const UserInfo : React.FC<modalType> = ( {setMsg,setIsOpen}) => {
    const Regex =
        {
            jumin : /\d{2}([0]\d|[1][0-2])([0][1-9]|[1-2]\d|[3][0-1])/g,
            number : /^(0|[1-9]\d*)(\.\d+)?$/
        };
    const {
        register,
        handleSubmit,
        watch,
        control,
        setValue,
        setFocus,
        formState: { errors },
    } = useForm<Inputs>({
        defaultValues: {
            image : ''
        },
        mode: 'onChange',
    });
    const maskResidentRegistrationNumber = (value: string) => {
        // 마스크 처리를 위한 함수
        if(value){
            return value.replace(/(\d{6})(\d{1})(\d{6})/, '$1-$2******');
        }
        return '';
    };
    const name = watch("name");
    const [jumin, setJumin] = useState('');
    const [signFile, setSignFile] = useState('');
    const [imagePreview, setImagePreview] = useState("");
    const upload = watch("image");
    const phoneValue = watch('phone');
    const dashPhone = useMemo(() => {
        if (phoneValue) {
            // 정규식을 사용하여 주민등록번호 일부를 가려줍니다.
            return phoneValue.replace(/[^0-9]/g, '').replace(/[^0-9]/g, '').replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3').replace(/-{1,2}$/g, '');
        }
        return '';
    }, [phoneValue]);

    const onSubmit: SubmitHandler<Inputs> = async (data : any) => {
        try{
            if(signFile !== '' && signFile !== undefined){
                const formData = new FormData();
                let today = dayjs().format('YYYY-MM-DD');
                let count = 1;
                for (const file of data.image) {
                    const modifiedFile = new File([file], data.name + '_증빙자료_' + today.toString().replaceAll('-', '') + '_' + count+'.png', {
                        type: file.type,
                    });
                    count ++;
                    formData.append('images', modifiedFile);
                }
                formData.append('name', data.name);
                formData.append('birth', jumin);
                formData.append('diagName', data.diagName);
                formData.append('email', data.email);
                formData.append('address', data.address);
                formData.append('phone', data.phone.replaceAll('-',''));
                formData.append('bank', data.bank);
                formData.append('account', data.account.toString());
                formData.append('strDate', data.strDate.replaceAll('-',''));
                formData.append('signName', signFile);
                const response = await axios.post('https://insurance-open-api.simg.kr/api/v1/prod/createPdf', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                });
                if (response.status === 200) {
                    setMsg('사고접수 완료');
                } else {
                    setMsg('서비스 오류입니다.');
                }
            }else {
                setMsg('서명을 확인해주세요.');
            }
        }catch(error){
        setMsg('서비스 오류입니다.')
        }
        setIsOpen(true);
    }
    const onError = (errors: any) => {
        console.log(errors)
        setIsOpen(true);
        setMsg('');
        if (errors.name) {
            setFocus('name');
            setMsg('이름을 입력해 주세요.');
        } else if (errors.birth) {
            setFocus('birth')
            setMsg('주민 등록 번호를 입력해 주세요.');
        } else if (errors.email) {
            setFocus('email')
            setMsg('이메일을 입력해 주세요.');
        }else if(errors.address){
            setFocus('address')
            setMsg('주소를 입력해주세요.');
        } else if (errors.phone) {
            setFocus('phone')
            setMsg('연락처를 입력해 주세요.');
        }else if (errors.strDate) {
            setFocus('strDate')
            setMsg('진단 일시를 입력해 주세요.');
        }else if (errors.diagName) {
            setFocus('diagName')
            setMsg('진단 명을 선택해 주세요.');
        }else if (errors.bank) {
            setFocus('bank')
            setMsg('수령 은행을 선택해주세요.');
        }else if (errors.account) {
            setFocus('account')
            setMsg('보험금 수령 계좌번호를 입력해 주세요.');
        }else if (errors.image) {
            setFocus('image')
            setMsg('증빙 자료를 업로드 해주세요.');
        }
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // setValue를 사용하여 화면에 보여지는 값을 마스크 처리된 값으로 설정
        setJumin(e.target.value);
        setValue('birth', maskResidentRegistrationNumber(e.target.value));
    };
    useEffect(() => {
        if (upload && upload.length > 0) {
            const file = upload[0];
            setImagePreview(URL.createObjectURL(file));
        }
    }, [upload]);
    return (
        <div className='pt-8  flex_center w-full flex-col pb-[90px] bg-[#f8f9fb]'>
            <div className='section flex-col'>
                <h2 className='title_text'>보험금 청구서 양식</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit, onError)} encType="multipart/form-data">
                <div className='pt-8 w-full flex_center flex-col'>
                    <div className='flex flex-col'>
                        <label className='mr-auto text-[16px] font-bold pb-2'>성명</label>
                        <input
                            placeholder={'이름을 입력해 주세요.'}
                            {...register('name', {
                                required: true,
                            })}
                            className="input2"
                        />
                    </div>
                    <div className='flex flex-col mt-8'>
                        <label className='mr-auto text-[16px] font-bold pb-2'>주민등록번호</label>
                        <input
                            placeholder={'-없이 입력해 주세요.'}
                            {...register('birth', {
                                required: '주민등록번호를 입력해 주세요.',
                                pattern: {
                                    value: Regex.jumin,
                                    message: '유효한 주민등록번호 형식이 아닙니다.',
                                },
                            })}
                            maxLength={13}
                            onChange={(e) => handleChange(e)}
                            className='input2'
                        />
                    </div>
                    <div className='flex flex-col mt-8'>
                        <label className='mr-auto text-[16px] font-bold pb-2'>이메일</label>
                        <input
                            placeholder={'이메일을 입력해 주세요.'}
                            {...register('email', {
                                required: true,
                            })}
                            className="input2"
                        />
                    </div>
                    <div className='flex flex-col mt-8'>
                        <label className='mr-auto text-[16px] font-bold pb-2'>연락처</label>
                        <input
                            value={dashPhone}
                            placeholder={'연락처를 입력해 주세요.'}
                            {...register('phone', {
                                required: true,
                            })}
                            className="input2"
                        />
                    </div>
                    <div className='flex flex-col mt-8 w-full'>
                        <label className='mr-auto text-[16px] font-bold pb-2'>주소</label>
                        <input
                            placeholder={'주소를 입력해주세요.'}
                            {...register('address', {
                                required: true,
                            })}
                            className="input2"
                        />
                        <span className='mt-2 text-red-600 font-normal mr-auto'>{errors?.account?.message}</span>
                    </div>
                    <div className='flex flex-col mt-8 w-full justify-center'>
                        <label className='mr-auto text-[16px] font-bold pb-2'>진단일</label>
                        <InputDatePicker control={control}/>
                    </div>
                    <div className='flex flex-col mt-8 w-full justify-center'>
                        <label className='mr-auto text-[16px] font-bold pb-2'>진단명</label>
                        <DiagSelect control={control}/>
                    </div>

                    <div className='flex flex-col mt-8 w-full justify-center'>
                        <div className='flex flex-col mt-8'>
                            <label className='mr-auto text-[16px] font-bold pb-2'>보험금 수령 은행명</label>
                            <input
                                placeholder={'은행명을 입력해주세요.'}
                                {...register('bank', {
                                    required: true,
                                })}
                                className="input2"
                            />
                        </div>
                    </div>
                    <div className='flex flex-col mt-8 w-full'>
                        <label className='mr-auto text-[16px] font-bold pb-2'>보험금 수령 계좌번호</label>
                        <input
                            placeholder={'-없이 입력해 주세요.'}
                            {...register('account', {
                                required: true,
                                pattern: {value: Regex.number, message: '계좌번호를 확인해주세요.'},
                            })}
                            className="input2"
                        />
                        <span className='mt-2 text-red-600 font-normal mr-auto'>{errors?.account?.message}</span>
                    </div>
                    <div className='flex flex-col mt-8'>
                        <div className='mr-auto text-[16px] font-bold pb-2'>
                            증빙 자료
                        </div>
                        <div
                            className="w-[350px] h-40 rounded-lg border-2 border-dashed flex items-center justify-center bg-white">
                            <label htmlFor="picture" className="cursor-pointer text-center p-4 md:p-8">
                                {
                                    imagePreview ?
                                        <>
                                            <img src={imagePreview} alt={'uploadFile'} className='w-[280px] h-[140px]'/>
                                        </>
                                        :
                                        <>
                                            <svg className="w-10 h-10 mx-auto" viewBox="0 0 41 40" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12.1667 26.6667C8.48477 26.6667 5.5 23.6819 5.5 20C5.5 16.8216 7.72428 14.1627 10.7012 13.4949C10.5695 12.9066 10.5 12.2947 10.5 11.6667C10.5 7.0643 14.231 3.33334 18.8333 3.33334C22.8655 3.33334 26.2288 6.19709 27.0003 10.0016C27.0556 10.0006 27.1111 10 27.1667 10C31.769 10 35.5 13.731 35.5 18.3333C35.5 22.3649 32.6371 25.7279 28.8333 26.5M25.5 21.6667L20.5 16.6667M20.5 16.6667L15.5 21.6667M20.5 16.6667L20.5 36.6667"
                                                    stroke="#4F46E5" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                            </svg>
                                            <p className="mt-3 text-gray-700 max-w-xs mx-auto">Click to <span
                                                className="font-medium text-indigo-600">Upload your  file</span> or drag
                                                and
                                                drop your file here</p>
                                        </>
                                }
                            </label>
                            <input {...register("image", {required: true})}
                                   id="picture"
                                   type="file"
                                   accept="image/*"
                                   className='hidden'
                                   multiple={true}
                            />
                        </div>
                    </div>
                    <Signature name={name} setMsg={setMsg} setIsOpen={setIsOpen} setSign={setSignFile}/>
                </div>
                <div className='w-full flex_center'>
                    <button type="submit" className='button_on mt-8'>접수하기</button>
                </div>
            </form>
        </div>
    );
}

export default UserInfo;
