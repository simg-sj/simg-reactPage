import React from "react";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import 'dayjs/locale/ko';
import dayjs, {Dayjs} from "dayjs";
import { Controller } from "react-hook-form";

// control을 받아오고,
const theme = createTheme({
    components: {
        MuiFormLabel: {
            styleOverrides: {
                root : {
                    fontSize : '13px',
                    top : '-4px !important'
                }
            },
        },
        MuiInputBase : {
            styleOverrides : {
                root : {
                    width : '160px',
                    height : '35px',
                    fontSize : '13px'
                }
            }
        }
    },
});

function InputDatePicker({ control, strDate, setStrDate } : any ) {
    return (
        <div className='flex w-full'>
            <div className='mr-auto'>
                <Controller
                    rules={{ required: true}}
                    control={control}
                    name='strDate'
                    // render를 사용해서, field값을 복사하거나 꺼내 쓰면 된다.
                    // field안에는 value나 onBlur와 같은 함수도 있음
                    // render안의 onChange를 조작해, onChange안에 들어갈 값을
                    // 선택할 수 있다.
                    render={({ field: { onChange } }) => (
                        // antd의 datepicker에서 e.target.value는
                        // moment 객체 그대로를 반환하기에,
                        // "2021-04-15"와 같은 값을 얻고싶다면, 두번째 파라미터
                        // "dateString"을 추가해서 값을 넣어야 한다.
                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
                            <div className='flex'>
                                <div>
                                    <ThemeProvider theme={theme}>
                                    <DesktopDatePicker
                                        slotProps={{
                                            toolbar: {
                                                // Customize value display
                                                //toolbarFormat: 'YYYY',
                                                hidden: true,
                                            },
                                            actionBar: {
                                                actions: ['cancel', 'accept'],
                                            },
                                            field: {
                                                readOnly: true
                                            }
                                        }}
                                        onChange={(newDate : any) => {
                                            setStrDate(newDate);
                                            // @ts-ignore
                                            onChange(dayjs(newDate).format('YYYY-MM-DD'));
                                        }
                                        }
                                        label="출발일"
                                        format={'YYYY-MM-DD'}
                                        shouldDisableDate={(day : any) => {
                                            return dayjs(dayjs(day as Dayjs).format(`YYYY-MM-DD`)).isBefore(
                                                dayjs().subtract(1, 'day')
                                            );
                                        }}
                                    />
                                    </ThemeProvider>
                                </div>
                            </div>
                        </LocalizationProvider>
                    )}
                />
            </div>
            <div className='ml-auto'>
                <Controller
                    rules={{ required: true}}
                    control={control}
                    name='endDate'
                    // render를 사용해서, field값을 복사하거나 꺼내 쓰면 된다.
                    // field안에는 value나 onBlur와 같은 함수도 있음
                    // render안의 onChange를 조작해, onChange안에 들어갈 값을
                    // 선택할 수 있다.
                    render={({ field: { onChange } }) => (
                        // antd의 datepicker에서 e.target.value는
                        // moment 객체 그대로를 반환하기에,
                        // "2021-04-15"와 같은 값을 얻고싶다면, 두번째 파라미터
                        // "dateString"을 추가해서 값을 넣어야 한다.
                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
                            <div className='flex'>
                                <div>
                                    <ThemeProvider theme={theme}>
                                    <DesktopDatePicker
                                        slotProps={{
                                            toolbar: {
                                                // Customize value display
                                                //toolbarFormat: 'YYYY',
                                                hidden: true,
                                            },
                                            actionBar: {
                                                actions: ['cancel', 'accept'],
                                            },
                                            field: {
                                                readOnly: true
                                            }
                                        }}
                                        onChange={(newDate : any) =>
                                            // @ts-ignore
                                            onChange(dayjs(newDate).format('YYYY-MM-DD'))
                                        }
                                        label="귀국일"
                                        format={'YYYY-MM-DD'}
                                        shouldDisableDate={(day : any) => {
                                            return dayjs(dayjs(day as Dayjs).format(`YYYY-MM-DD`)).isAfter(
                                                dayjs(strDate).add(69, 'days')) || dayjs(dayjs(day as Dayjs).format('YYYY-MM-DD')).isBefore(dayjs(strDate).add(1,'days'))
                                        }}
                                    />
                                    </ThemeProvider>
                                </div>
                            </div>
                        </LocalizationProvider>
                    )}
                />
            </div>
        </div>
    );
}

export default InputDatePicker;
