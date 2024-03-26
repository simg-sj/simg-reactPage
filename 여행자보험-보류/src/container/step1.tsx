// Step1.tsx

import React, {useRef, useState} from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import 'dayjs/locale/ko';
import InputDatePicker from '../components/inputDatePicker';
import SelectGender from '../components/selectGender';
import Time from '../components/time';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState, setStep1} from '../redux';
import { getAmt } from '../service/getPrimeum';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Inputs, ModalProps} from '../@types/tour';
import {useNavigate} from "react-router";
import {useAppSelector} from "../hooks/utils";



const theme = createTheme({
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontSize: '12px',
                },
            },
        },
    },
});

interface Step1Props extends ModalProps {
    setMsg: React.Dispatch<React.SetStateAction<string>>;
    isOpen: boolean;
}

const Step1: React.FC<Step1Props> = ({ setMsg, isOpen, setIsOpen } ) => {
    const Regex = /\d{2}([0]\d|[1][0-2])([0][1-9]|[1-2]\d|[3][0-1])/g;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isMobile = useAppSelector((state : RootState) => state.mobile.isMobi);
    const [strDate, setStrDate] = useState<string>('');
    const divInput = useRef<HTMLDivElement>(null);
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<Inputs>({
        defaultValues: {
            birth: '',
            genders: '',
            goal: '',
            strDate: '',
            endDate: '',
            strTime: '',
            endTime: '',
        },
        mode: 'onChange',
    });
    const onSubmit: SubmitHandler<Inputs> =  (data) => {
        try {
            dispatch(
                setStep1({
                    gender: data.genders,
                    fromDate: `${data.strDate} ${data.strTime}`,
                    toDate: `${data.endDate} ${data.endTime}`,
                    birth: data.birth,
                    goal: data.goal,
                })
            );
            navigate('/step2');

        } catch (error) {
            console.error(error);
        }
    };

    const onError = (errors: any) => {
        setIsOpen(true);
        setMsg('');

        if (errors.goal) {
            setMsg('여행 목적을 선택해주세요.');
        } else if (errors.strDate || errors.endDate || errors.strTime || errors.endTime) {
            setMsg('여행 일정을 선택해주세요.');
        } else if (errors.birth) {
            setMsg('생년월일을 입력해주세요.');
        } else if (errors.genders) {
            setMsg('성별을 선택해주세요.');
        }
    };

    return (
        <div ref={divInput} className="w-full h-full flex-col">
            <div className={isMobile ? 'mobile_step1' : 'web_step1'}>
                <div className="border-b-4 font-bold text-[16px] w-full pb-1 ">
                    가입 정보 입력
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit, onError)}
                    className="h-full w-full flex-col mt-4 relative"
                >
                    {/* 여행 목적 선택 */}
                    <div>
                        <div className="font-bold text-[#0B0273]">여행 목적</div>
                        <div className="w-full center-flex flex-col">
                            <ThemeProvider theme={theme}>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="goal"
                                >
                                    <FormControlLabel
                                        value="여행/관광"
                                        control={<Radio size="small" {...register('goal', { required: true })} />}
                                        label="여행/관광"
                                    />
                                    <FormControlLabel
                                        value="출장/업무"
                                        control={<Radio size="small" {...register('goal', { required: true })} />}
                                        label="출장/업무"
                                    />
                                    <FormControlLabel
                                        value="유학/연수/캠프"
                                        control={<Radio size="small" {...register('goal', { required: true })} />}
                                        label="유학/연수/캠프"
                                    />
                                </RadioGroup>
                            </ThemeProvider>
                        </div>
                        <h2 className="base_text pl-2 text-[11px]">
                            * 여행국가에 대한 입국제한 조치 상태를 꼭{' '}
                            <a href={'https://www.0404.go.kr'} target={'_blank'} rel={'noreferrer'} className="base_color">
                                확인
                            </a>
                            하시기 바랍니다.
                        </h2>
                        {/* 여행 기간 선택 */}
                        <div className="font-bold mt-4 text-[#0B0273]">여행 기간</div>
                        <div className="flex w-full mt-4">
                            <div className="w-full">
                                {/* InputDatePicker에 대한 ref 추가 */}
                                <InputDatePicker control={control} strDate={strDate} setStrDate={setStrDate} />
                                <div className="flex w-full">
                                    <div className="mr-auto">
                                        <Time name={'strTime'} control={control} /> {/* 변경 */}
                                    </div>
                                    <div className="ml-auto">
                                        <Time name={'endTime'} control={control}/> {/* 변경 */}
                                    </div>
                                </div>
                                <div className="flex-col flex">
                                        <span className="base_text mt-2">* 출발 전까지 가입 가능합니다.</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 flex">
                            <div className="flex-col w-full">
                                <h2 className="font-bold pb-2 text-[#0B0273]">여행자 정보</h2>
                                <div className="flex flex-col">
                                    <span className="text-[12px] pb-2">생년월일</span>
                                    <div className="flex w-full">
                                        <div className="flex-col ml-auto basis-1/2">
                                            {/* birthField를 통해 birth를 등록 */}
                                            <input
                                                placeholder={'숫자6자리 ex)990101'}
                                                {...register('birth', {
                                                    required: true,
                                                    pattern: { value: Regex, message: '생년월일을 확인해주세요.' },
                                                })}
                                                maxLength={6}
                                                className="input w-full"
                                            />
                                            <div className="base_text mt-2 text-[11px]">* 만 79세까지 가입이 가능합니다.</div>
                                        </div>
                                        <div className="flex-col center-flex basis-1/2 mr-auto">
                                            {/* genderField를 통해 genders를 등록 */}
                                            <SelectGender control={control} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={isMobile ? 'mobile_footer' : 'web_footer'}>
                        <button type="submit" className="w-full h-full">
                            보험료 확인하기
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Step1;
