import { useController } from "react-hook-form";
import React from "react";

const SelectGender = React.memo(({ control } : any) => {
    const { field } = useController({ control, name: 'genders', rules: { required: true  }, });

    return (
        <div className='w-[100px] h-[30px] border ml-6 rounded-xl bg-[#D9D9D9] '>
            <div className="w-full center-flex h-full text-[13px] font-semibold font-['Hack-Bold']">
                <button
                    type="button" // type을 명시해줘서 기본 동작을 막습니다.
                    className={field.value === 'male' ? 'genderBtnOn' : 'genderBtnOff'}
                    onClick={() => field.onChange('male')}
                >
                    남자
                </button>
                <button
                    type="button"
                    className={field.value === 'female' ? 'genderBtnOn' : 'genderBtnOff'}
                    onClick={() => field.onChange('female')}
                >
                    여자
                </button>
            </div>
        </div>
    );
});

export default SelectGender;
