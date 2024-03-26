import React from "react";

export interface modalProps  {
    msg : string,
    isOpen : boolean
}

export interface productItem {
    amt: string,
    bhCode: string,
    dbCode: string,
    dbDetail: string,
    pdtCode: string,
    pdtNm: string,
    pdtType: string,
    premiums: number,
    useYn: string,
}

export interface productProps {
    data : Array<productItem> | []
}

export interface step1Type {
    birth : string,
    gender : string,
    fromDate : string,
    toDate : string,
    goal : string,
}

export interface primeumType {
    gender : string,
    pdtCode : string,
    birth : string,
    fromDate : string,
    toDate : string
}

export interface ModalProps {
    msg : string,
    isOpen : boolean,
    setIsOpen : React.Dispatch<React.SetStateAction<boolean>>
}

export interface Inputs {
    birth: string;
    genders: string;
    goal: string;
    strDate: string;
    endDate: string;
    strTime: string;
    endTime: string;
}

export interface mobiType {
    isMobi : boolean
}

export interface stepType {
    step : string;
    setStep : React.Dispatch<React.SetStateAction<string>>;
}
