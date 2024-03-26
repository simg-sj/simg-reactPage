import InfoIcon from '../../assets/images/icon_info.svg';
import CheckIcon from '../../assets/images/icon_checkbox_14px_on.svg';
import ProgressBar from "../atoms/progressBar";
import styled from "styled-components";
import React, {useEffect, useState} from "react";
import Prohibition from "../atoms/modal/prohibition";
import {useSearchParams} from "react-router-dom";

const StyledTable = styled.table`
  tbody > tr td {
    border-top:1px #0e47a1 solid;
    border-right : 1px #0e47a1 solid;
    padding : 6px;
  }
  /*tbody > tr > td:nth-child(even) {
    text-align: end;
  }
  tbody > tr > td:nth-child(odd) {
    text-align: start;
    padding-left : 6px;
  }*/
  //tbody > tr:first-child td {border:none}
  thead > tr > td {
    padding : 8px;
    width: 30%;
  }
`
const MainText = () => {
    const [show, setShow] = useState<boolean>(false);
    const [selImg, setSelImg] = useState<string>('');
    const [searchParams, setSeratchParams] = useSearchParams();
    const [text, setText] = useState<string>('');
    const key : any = searchParams.get('key');
    useEffect(() => {
        if(key === 'onna'){
            setText('온나플러스');
            setSelImg('onna');
        }
        if(key === 'enuri'){
            setText('이누리');
            setSelImg('enuri');
        }
        if(key === 'barico'){
            setText('라이트바겐');
            setSelImg('barico');
        }
    }, []);
    return (
        <div className='main'>
            <ProgressBar select={'main'}/>
            <div className='flex-col w-full'>
                <div className='title_text mt-4 flex-col flex justify-center items-center border-b pb-4'>
                    {
                        selImg !== '' ?
                            <>
                                <img src={require(`../../assets/images/${selImg}.png`)} alt={'logo'} width={200}/>
                                <h2 className='mt-4 text-[16px]'>{text} 라이더님을 위한</h2>
                            </>
                            :
                            <>
                                <h2 className='mt-4 text-[16px]'>라이더님을 위한</h2>
                            </>
                    }
                    <h2 className='text-[#0e47a1] text-[16px]'>이륜자동차 운전자 보험</h2>
                </div>
                {/*<ul className='w-full px-2 list-outside base_text mt-4 items-start' style={{ listStyleImage: `url(${InfoIcon})`}}>
                    <li className='leading-[20px]'>
                        이륜차 의무보험이 상대방에 대한 ‘민사적 책임’을 보상한다면
                        이륜차 운전자 보험은 ‘나의 부상’과 ‘형사적 책임’의 금전적 손해를 담보합니다.
                    </li>
                    <li className='leading-[20px] mt-2'>
                        이륜자동차 운전자 보험은 의무가입은 아니지만,
                        사고 위험에 많이 노출된 배달 업무를 하시는 분들께 추천되는 상품입니다.
                    </li>
                </ul>
                <div className='flex flex-col w-full mt-4'>
                    <div className='sub_title flex w-full'>
                        <div className='flex ml-0'>
                            <img src={CheckIcon} alt={'check'}  className='pr-1'/>
                            <h2>담보내용</h2>
                        </div>
                    </div>
                    <StyledTable className='border border-[#0e47a1]   text-center mt-2 rounded-lg '>
                        <thead className='border-[#0e47a1] border-b-[2px] bg-[#0e47a1] text-white'>
                        <tr className='sub_title text-[14px]'>
                            <td className='border-r-[2px] border-r-white'>
                                구분
                            </td>
                            <td className='border-r-[2px] border-r-white'>
                                보상한도
                            </td>
                            <td>
                                보험료
                            </td>
                        </tr>
                        </thead>
                        <tbody className='text-[12px]'>
                        <tr>
                            <td className='text-start'>
                                상해사망(기본계약)
                            </td>
                            <td className='text-end'>
                                100만원
                            </td>
                            <td className='text-center' rowSpan={5}>
                                <h2 className='pt-4'>20대 : 24,000원</h2>
                                <h2 className='pt-4'>30대 : 22,000원</h2>
                                <h2 className='pt-4'>40대 : 21,000원</h2>
                                <h2 className='pt-4'>50대 : 22,000원</h2>
                                <h2 className='pt-4'>* 세부 연령에 따라 다소 차이가 있을 수 있음.</h2>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start'>
                                사고후유장해
                            </td>
                            <td className='text-end'>
                                1,000만원
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start'>
                                사고처리지원금
                            </td>
                            <td className='text-end'>
                                3,000만원
                            </td>

                        </tr>
                        <tr>
                            <td className='text-start'>
                                사고처리지원금
                                <br/>
                                (6주미만치료, 중과실사고)
                            </td>
                            <td className='text-end'>
                                500만원
                            </td>

                        </tr>
                        <tr>
                            <td className='text-start'>
                                입원일당(1 - 180일)
                            </td>
                            <td className='text-end'>
                                1만원
                            </td>

                        </tr>
                        </tbody>
                    </StyledTable>
                    <div className='leading-[20px] text-[12px] mt-2'>
                        주) 상기 담보는 운전자보험 가입자들이 기본적으로 선택하는 인기담보임.  골절진단, 깁스치료, 상해수술, 입원일당 확대 등의 담보는 상담과정에서 보험료 확인 가능
                    </div>
                    {
                        show && < Prohibition sel={show} setSel={setShow}/>
                    }
                </div>*/}
                <div className='flex flex-col justify-center w-full items-center mt-4'>
                    <div className='flex-col font-bold items-center flex'>
                        <h2>
                            계약자 정보를 입력해주세요.
                        </h2>
                        {/*<h2>
                            정보를 입력해주세요.
                        </h2>
                        <span  className='mt-1 text-[12px] text-[#0e47a1]'>계약자와 피보험자는 동일해야 합니다.</span>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainText;