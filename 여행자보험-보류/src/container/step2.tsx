import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {calculateInsAge, calDate} from "../utils/common";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {getAmt} from "../service/getPrimeum";
import {RootState, selectUser} from "../redux";
import useCountNum from "../hooks/useCountUp";
import {useNavigate} from "react-router";
const CustomButton = styled(BottomNavigationAction)`
  & .Mui-selected {
    border-bottom :  solid #0050AE ;
    height: 100%;
    align-items: center;
    display: flex;
    font-weight: 600;
  }
`;
const Step2: React.FC = () => {
    const isMobile = useSelector((state : RootState) => state.mobile.isMobi);
    const state = useSelector(selectUser);
    const [amt, setAmt] = useState(0);
    const [pdtCode, setPdtCode] = React.useState('hnsb1002');
    const navigate = useNavigate();
    const handleChange = async(event: React.SyntheticEvent, newValue: string) => {
        setPdtCode(newValue);
            try {
                    const response = await getAmt({
                        gender: state.gender,
                        pdtCode: newValue,
                        birth: state.birth,
                        fromDate: state.fromDate,
                        toDate: state.toDate
                    });
                setAmt(Number(response.toString().replaceAll(',','')));
            } catch (error) {
                console.error(error);
            }
    };
    const onClickHandler = () => {
        navigate('/step3');
    }
    useEffect(() => {
            getAmt(
                {
                    gender: state.gender,
                    pdtCode: 'hnsb1002',
                    birth: state.birth,
                    fromDate: state.fromDate,
                    toDate: state.toDate
                }
            ).then((res) => setAmt(Number(res.toString().replaceAll(',',''))));
    }, []);
    return (
        <div className="w-full h-full flex-col">
            <div className={isMobile ? 'mobile_step1' : 'flex items-center flex-col mt-4 h-full mx-6 relative'}>
                <div className="border-b-4 font-bold text-[16px] w-full pb-1 flex flex-col">
                    가입 정보 확인
                    <div className='center-flex w-full base_text pt-2'>
                        <h2 className='mr-auto'>
                            보험나이({calculateInsAge(state.birth)}세)
                        </h2>
                        <h2 className=''>
                            성별({state.gender === 'male' ? '남성' : '여성'})
                        </h2>
                        <h2 className='ml-auto'>
                            보험기간( {calDate(state.toDate,state.fromDate)}일)
                        </h2>
                    </div>
                </div>
                <div className="flex w-full border mt-2">
                    <BottomNavigation sx={{ width: 500 }} value={pdtCode} onChange={handleChange} showLabels >
                        <CustomButton
                            label="안심플랜"
                            value="hnsb1001"
                        />
                       <CustomButton
                            label="든든플랜"
                            value="hnsb1002"
                        />
                    </BottomNavigation>
                </div>
                <div className='font-bold'>
                    총 보험료 : {useCountNum(amt,0,2000)}원
                </div>
                <div className={isMobile ? 'mobile_footer' : 'web_footer'}>
                    <button type="button" className="w-full h-full" onClick={(event:React.MouseEvent<HTMLButtonElement>) => onClickHandler()}>
                        보험 가입하기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Step2;
