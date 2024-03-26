import axios from 'axios';

export function isScrollable() {
    // 현재 문서의 높이
    const documentHeight = document.documentElement.scrollHeight;
    // 창의 높이
    const windowHeight = window.innerHeight;

    // 현재 문서의 높이가 창의 높이보다 크면 스크롤이 생겼음을 의미
    return documentHeight > windowHeight;
}


export function modalStyles(type : string){
    const mobi_clime = {
        overlay: {
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex : 100
        },
        content: {
            backgroundColor : "white",
            left: "50%",
            margin: "auto",
            width: "calc(100% - 5%)",
            height: "calc(100vh - 20vh)",
            padding: "0",
            overflow: "hidden",
            transform : "translate(-50%,0)"
        },
    };
    const clime = {
        overlay: {
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex : 100
        },
        content: {
            backgroundColor : "white",
            left: '0',
            inset : '0',
            margin: "auto",
            width: "calc(100% - 4%)",
            height: "calc(100vh - 5vh)",
            padding: "0",
            overflow: "hidden",
            //transform : "translate(-50%,0)"
        },
    };
    const mobi_edit = {
        overlay: {
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex : 100
        },
        content: {
            backgroundColor : "rgb(238,238,238)",
            left: "50%",
            margin: "auto",
            width: "calc(100% - 5%)",
            height: "calc(100vh - 5vh)",
            padding: "0",
            overflowY: "auto",
            transform : "translate(-50%,0)"
        },
    };
    const edit = {
        overlay: {
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex : 100
        },
        content: {
            backgroundColor : "#eeeeee",
            left: '0',
            margin: "auto",
            width: "460px",
            height: "460px",
            padding: "0",
            overflow: "hidden",
            //transform : "translate(-50%,0)"
        },
    };
    const mobi_manage = {
        overlay: {
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex : 100
        },
        content: {
            backgroundColor : "rgb(238,238,238)",
            left: "50%",
            margin: "auto",
            width: "360px",
            height: "calc(100vh - 40%)",
            padding: "0",
            overflow: "auto",
            transform : "translate(-50%,0)"
        },
    };
    const manage = {
        overlay: {
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex : 100
        },
        content: {
            backgroundColor : "white",
            left: '0',
            margin: "auto",
            width: "460px",
            height: "470px",
            padding: "0",
            overflow: "hidden",
            //transform : "translate(-50%,0)"
        },
    };
    let modalStyle = {
        mobi : {},
        web : {}
    };
    if(type === 'clim'){
        modalStyle.mobi = mobi_clime;
        modalStyle.web = clime;
    }
    if(type === 'manage'){
        modalStyle.mobi = mobi_manage;
        modalStyle.web = manage;
    }
    if(type === 'edit'){
        modalStyle.mobi = mobi_edit;
        modalStyle.web = edit;
    }
    return modalStyle;
}


// PDF 파일 다운로드 함수
export function downloadPdf(pdfUrl : any, type : string){
    // PDF 파일의 URL
    // axios를 사용하여 PDF 파일 다운로드
    axios.get(pdfUrl, { responseType: 'blob' })
        .then(response => {
            // 다운로드할 파일의 blob 생성
            const blob = new Blob([response.data]);

            // blob을 URL로 변환
            const url = window.URL.createObjectURL(blob);

            // a 태그를 생성하여 다운로드
            const a = document.createElement('a');
            a.href = url;
            if(type === 'regi') a.download = '가입증명서.pdf';
            if(type === 'pdf') a.download = '보험약관.pdf';
            document.body.appendChild(a);
            a.click();

            // 다운로드 후 URL 해제
            window.URL.revokeObjectURL(url);
        })
        .catch(error => {
            console.error('PDF 다운로드 중 오류 발생:', error);
        });
}
