

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
            backgroundColor : "rgb(238,238,238)",
            left: "50%",
            margin: "auto",
            width: "360px",
            height: "calc(100vh - 170px)",
            padding: "0",
            overflowY: "auto",
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
            margin: "auto",
            width: "460px",
            height: "850px",
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
            width: "360px",
            height: "calc(100vh - 170px)",
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
