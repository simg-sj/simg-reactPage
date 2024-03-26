import React, {SetStateAction, useState, useEffect} from 'react';
import axios from 'axios';
import { Document, Page, pdfjs  } from 'react-pdf';
import { useMediaQuery } from "react-responsive";
import {downloadPdf} from '../utils/common';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
type Props = {
    pdfUrl: string;
    setOpen : React.Dispatch<SetStateAction<boolean>>;
    type : string;
};


function PdfView ({setOpen, type } : Props)  {
    const isPc = useMediaQuery({ query: "(min-width: 990px)" });
    const [numPages, setNumPages] = useState<number | null>(null);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [pdfUrl, setPdfUrl] = useState('');


    const onDocumentLoadSuccess = ({ numPages } : any) => {
        setNumPages(numPages);
    };


    const changePage = (offset: number) => {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    };

    const previousPage = () => {
        changePage(-1);
    };

    const nextPage = () => {
        changePage(1);
    };
    const onClickHandler = () => {
        //const pdfUrl = 'https://test-mycheckup-insu.simg.kr/download-pdf';
        // PDF 파일 다운로드 링크 생성
        /* const link = document.createElement('a');
         link.href = pdfUrl;
         let name = sessionStorage.getItem('name');
         if(type === 'pdf') link.setAttribute('download', '프로미 임대차계약소송보험_보험약관.pdf');
         if(type === 'regi') link.setAttribute('download', `${name} 보험가입 증명서.pdf`);

         document.body.appendChild(link);
         link.click();
         document.body.removeChild(link);*/
        try {
            downloadPdf(pdfUrl, type)
        } catch (error) {
            console.error('PDF 다운로드 중 오류 발생:', error);
        }
    }

    useEffect(() => {
        if(type === 'regi'){
            const getPdfUrl = async () => {
                try {
                    let cmpk = sessionStorage.getItem('cmpk');
                    let join = sessionStorage.getItem('join');
                    console.log(join);
                    const response = await axios.get(`https://mycheckup-insu.simg.kr/get-pdf?key=${cmpk}&today=${join}`, {
                        responseType: 'blob'
                    });
                    const pdfBlob = new Blob([response.data], {type: 'application/pdf'});
                    setPdfUrl(URL.createObjectURL(pdfBlob));
                } catch (error) {
                    alert('서비스 오류입니다. \n본사에 문의주시기 바랍니다. \n☎ 1877-3006');
                    console.error('Error fetching PDF:', error);
                }
            };
            getPdfUrl();
        }else {
            setPdfUrl('/insuTerms.pdf');
        }
    }, []);
    // @ts-ignore
    return (
        <div className='w-full h-full  flex_center flex-col bg-white'>
            <Document
                file={pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} width={isPc ? 600 : 400}/>
            </Document>
            <div className='flex flex-col absolute bottom-0 bg-white w-full pb-4'>
                <div className='flex_center space-x-6'>
                    <button disabled={pageNumber <= 1} onClick={previousPage}>
                        이전 페이지
                    </button>
                    <p>Page {pageNumber} of {numPages}</p>
                    <button disabled={pageNumber >= (numPages || 1)} onClick={nextPage}>
                        다음 페이지
                    </button>
                </div>
                <div className='flex space-x-6 flex_center mt-4 text-white'>
                    <button className='button-color' onClick={(event : React.MouseEvent<HTMLButtonElement>) => setOpen(false)}>닫기</button>
                    <button className='button-color' onClick={onClickHandler}>저장</button>
                </div>
            </div>
        </div>
    );
};

export default PdfView;
