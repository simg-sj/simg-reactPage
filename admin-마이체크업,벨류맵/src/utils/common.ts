import {Person} from '../@types/common';
import * as XLSX from "xlsx-js-style";
import dayjs from 'dayjs';

export function getCompany(){
    const company = [
        {
            code : '01',
            name : '마이체크업',
            url : 'mycheckup'
        },
        {
            code : '02',
            name : '벨류맵',
            url : 'valuemap'
        }
    ];

    return company;
}
export function getCode(type : string){
    const company = [
        {
            type : '01',
            code : '1',
            name : '마이체크업'
        },
        {
            type : '02',
            code : '2',
            name : '벨류맵'
        }
    ];

    for(let idx of company){
        if(idx.type === type) return idx.code;
    }
    return '00';
}


export function getName(type : string){
    const company = [
        {
            type : '01',
            code : '1',
            name : '마이체크업'
        },
        {
            type : '02',
            code : '2',
            name : '벨류맵'
        }
    ];

    for(let idx of company){
        if(idx.type === type) return idx.name;
    }
    return '00';
}
export function excelDownload(type: string, data: Person[]): void {
    let today = dayjs().format('YYYY-MM-DD');
    let excel: Excel[] | undefined = excelData(type, data); // 타입 지정
    if (data.length <= 0) {
        console.error('데이터가 없습니다.');
        alert("데이터가 없습니다.")
        return;
    }
    if (!excel) {
        console.error('유효한 타입이 아닙니다.');
        return;
    }

    const excelHandler = {
        getExcelFileName: () => {
            return "유저 데이터.xlsx";
        },
        getSheetName: () => {
            return today + '_' + type;
        },
        getExcelData: () => {
            return excel;
        },
        getWorksheet: () => {
            const ws = XLSX.utils.json_to_sheet(excelHandler.getExcelData() || []); // undefined를 빈 배열로 처리

            // @ts-ignore
            const range = XLSX.utils.decode_range(ws['!ref']);

            // 각 행에 스타일을 적용합니다.
            for (let rowNum = range.s.r; rowNum <= range.e.r; rowNum++) {
                const row = XLSX.utils.encode_row(rowNum);
                for (let colNum = range.s.c; colNum <= range.e.c; colNum++) {
                    const cell = XLSX.utils.encode_col(colNum);
                    const cellRef = `${cell}${row}`;
                    // 특정 셀에 스타일을 설정합니다.
                    if (rowNum === 0) {
                        ws[cellRef].s = {
                            alignment: { horizontal: 'center' },
                            font: { bold: true, color: { rgb: 'FFFFFF' } },
                            fill: { bgColor: { indexed: 64 }, fgColor: { rgb: '006ED0' } },
                        };
                    } else {
                        // 특정 열에는 배경색을 지정하지 않습니다.
                        ws[cellRef].s = {
                            alignment: { horizontal: 'center' },
                            // 필요한 다른 스타일 속성도 추가할 수 있습니다.
                        };
                        }
                }
            }
            ws['!cols'] = [
                {
                    wpx: 120,
                },
                {
                    wpx: 80,
                },
                {
                    wpx: 120,
                },
                {
                    wpx: 120,
                },
                {
                    wpx: 80,
                },
                {
                    wpx: 80,
                },
                {
                    wpx: 120,
                },
                {
                    wpx: 120,
                },
            ];
            return ws;
        },
    };

    const datas = excelHandler.getWorksheet();
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, datas, excelHandler.getSheetName());
    XLSX.writeFile(workbook, excelHandler.getExcelFileName());
}

interface Excel {
    고객키 : string,
    이름: string,
    생년월일: string,
    연락처: string,
    나이: string,
    접수일 : string
}
interface Excel2 {
    고객키 : string,
    이름: string,
    생년월일: string,
    연락처: string,
    나이: string,
    상태코드 : string | null,
    '상담예약(1차)' : string | null;
    '상담예약(2차)' : string | null;
    접수일 : string
}

function excelData(type: string, data: any[]): Excel[] | Excel2[] | undefined {
    if (type === '벨류맵') {
        return data.map((item) => ({
            고객키: item.cmpk,
            이름: item.cName,
            생년월일: item.cJumin,
            연락처: item.cCell,
            나이: item.age,
            상태코드 : item.saleStatus,
            '상담예약(1차)' : item.appointDT1st,
            '상담예약(2차)' : item.appointDT2nd,
            접수일 : item.createYMD

    }));
    }
    if (type === '마이체크업') {
        return data.map((item) => ({
            고객키: item.cmpk,
            이름: item.cName,
            생년월일: item.cJumin,
            연락처: item.cCell,
            나이: item.age,
            접수일 : item.createYMD
        }));
    }
    return undefined;
}


