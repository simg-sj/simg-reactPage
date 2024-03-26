import {Person} from '../@types/common';
import dayjs from 'dayjs';
interface Props {
    type : string,
    data : Person[]
}
export default function TableView({type, data} : Props){
    return (
        <div className='mt-2 ml-[80px] h-[500px] overflow-scrollY'>
            {
                type === '01' &&
                <div className='min-w-[1400px] flex_center px-4'>
                    {
                        data.length > 0 ?
                            <table className="table-auto w-full border shadow ">
                                <thead className='h-[45px] font-[500]'>
                                <tr className='border-b pb-2'>
                                    <th>
                                        No.
                                    </th>
                                    <th>
                                        고객키
                                    </th>
                                    <th>
                                        신청자
                                    </th>
                                    <th>
                                        핸드폰
                                    </th>
                                    <th>
                                        생년월일
                                    </th>
                                    <th>
                                        나이(성별)
                                    </th>
                                    <th>
                                        접수일
                                    </th>
                                </tr>
                                </thead>
                                <tbody className='base_font bg-white'>
                                {
                                    data.map((person, index) =>
                                        <tr key={index}>
                                            <td className='text-center h-[40px] border-b'>
                                                {index + 1}
                                            </td>
                                            <td className='text-center h-[40px] border-b'>
                                                {person.cmpk}
                                            </td>
                                            <td className='text-center h-[40px] border-b'>
                                                {person.cName}
                                            </td>
                                            <td className='text-center h-[40px] border-b'>
                                                {person.cCell}
                                            </td>
                                            <td className='text-center h-[40px] border-b'>
                                                {person.cJumin}
                                            </td>
                                            <td className='text-center h-[40px] border-b'>
                                                {person.age}
                                            </td>
                                            <td className='text-center h-[40px] border-b'>
                                                {dayjs(person.createdYMD).format('YYYY년 MM월 DD일')}
                                            </td>
                                        </tr>
                                    )
                                }
                                </tbody>
                            </table>
                            :
                            <div className='w-full flex_center'>
                                <div
                                    className='w-full h-[60px] bg-white border rounded-xl mb-8 shadow px-4 flex_center'>
                                    <p>조회 데이터가 없습니다.</p>
                                </div>
                            </div>
                    }
                </div>
            }


            {
                type === '02' &&
                <div className='min-w-[1400px] flex_center px-4'>
                    {
                        data.length > 0 ?
                            <table className="table-auto w-full border shadow ">
                                <thead className='h-[45px] font-[500]'>
                                <tr className='border-b pb-2'>
                                    <th>
                                        No.
                                    </th>
                                    <th>
                                        고객키
                                    </th>
                                    <th>
                                        신청자
                                    </th>
                                    <th>
                                        핸드폰
                                    </th>
                                    <th>
                                        생년월일
                                    </th>
                                    <th>
                                        나이(성별)
                                    </th>
                                    <th>
                                        상담예약(1차)
                                    </th>
                                    <th>
                                        상담예약(2차)
                                    </th>
                                    <th>
                                        상태코드
                                    </th>
                                    <th>
                                        접수일
                                    </th>
                                </tr>
                                </thead>
                                <tbody className='base_font bg-white'>
                                {
                                    data.map((person, index) =>
                                        <tr key={index}>
                                            <td className='text-center h-[40px] border-b'>
                                                {index + 1}
                                            </td>
                                            <td className='text-center h-[40px] border-b'>
                                                {person.cmpk}
                                            </td>
                                            <td className='text-center h-[40px] border-b'>
                                                {person.cName}
                                            </td>
                                            <td className='text-center h-[40px] border-b'>
                                                {person.cCell}
                                            </td>
                                            <td className='text-center h-[40px] border-b'>
                                                {person.cJumin}
                                            </td>
                                            <td className='text-center h-[40px] border-b'>
                                                {person.age}
                                            </td>
                                            <td className='text-center h-[40px] border-b'>
                                                {person.appointDT1st !== '미정' ? dayjs(person.appointDT1st).format('YYYY년 MM월 DD일') : '미정'}
                                            </td>
                                            <td className='text-center h-[40px] border-b'>
                                                {person.appointDT2nd !== '미정' ? dayjs(person.appointDT2nd).format('YYYY년 MM월 DD일') : '미정'}
                                            </td>
                                            <td className='text-center h-[40px] border-b'>
                                                {person.saleStatus}
                                            </td>
                                            <td className='text-center h-[40px] border-b'>
                                                {dayjs(person.createdYMD).format('YYYY년 MM월 DD일')}
                                            </td>
                                        </tr>
                                    )
                                }
                                </tbody>
                            </table>
                            :
                            <div className='w-full flex_center'>
                                <div
                                    className='w-full h-[60px] bg-white border rounded-xl mb-8 shadow px-4 flex_center'>
                                    <p>조회 데이터가 없습니다.</p>
                                </div>
                            </div>
                    }
                </div>
            }
        </div>
    )
}
