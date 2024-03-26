import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Controller } from "react-hook-form";
import React from "react";

function BankSelect({ control } : any) {
    return (
        <div>
            <Controller
                rules={{ required: true}}
                control={control}
                name='bank'
                // render를 사용해서, field값을 복사하거나 꺼내 쓰면 된다.
                // field안에는 value나 onBlur와 같은 함수도 있음
                // render안의 onChange를 조작해, onChange안에 들어갈 값을
                // 선택할 수 있다.
                render={({ field: { onChange, ref } }) => (
                    <FormControl sx={{m: 1, minWidth: 320}}>
                        <InputLabel htmlFor="grouped-select">은행명</InputLabel>
                        <Select defaultValue="" id="grouped-select" label="Grouping" onChange={onChange} inputRef={ref}>
                            <MenuItem value={'위의 양성신생물'}>국민은행</MenuItem>
                            <MenuItem value={'십이지장의 양성신생물'}>십이지장의 양성신생물</MenuItem>
                            <MenuItem value={'위 및 십이지장의 폴립'}>위 및 십이지장의 폴립</MenuItem>
                            <MenuItem value={'맹장의 양성신생물'}>맹장의 양성신생물</MenuItem>
                            <MenuItem value={'충수의 양성신생물'}>충수의 양성신생물</MenuItem>
                            <MenuItem value={'상행결장의 양선신생물'}>상행결장의 양선신생물</MenuItem>
                            <MenuItem value={'휭행결장의 양선신생물'}>휭행결장의 양선신생물</MenuItem>
                            <MenuItem value={'하행결장의 양선신생물'}>하행결장의 양선신생물</MenuItem>
                            <MenuItem value={'구불결장의 양선신생물'}>구불결장의 양선신생물</MenuItem>
                            <MenuItem value={'상세물명의 결장의 양선신생물'}>상세물명의 결장의 양선신생물</MenuItem>
                            <MenuItem value={'직장구불결장접합부의 양선신생물'}>직장구불결장접합부의 양선신생물</MenuItem>
                            <MenuItem value={'직장의 양선신생물'}>직장의 양선신생물</MenuItem>
                            <MenuItem value={'직장폴립'}>직장폴립</MenuItem>
                            <MenuItem value={'결장의 폴립'}>결장의 폴립</MenuItem>
                        </Select>
                    </FormControl>
                )}
                />
        </div>
    )
}
export default BankSelect
