

export interface Location {
    PJTcode: string;
    bpk: string;
    city: string;
    createdYMD: string;
    customer_service: string;
    deletedYMD: string;
    development: string;
    equipment: string;
    fileDay: string;
    finance_team: string;
    kazit: string;
    openday: string;
    pklAddress: string;
    pklName: string;
    pklpk: number;
    region: string;
    sales1: string;
    sales2: string;
    sales_region: string;
    sales_team: string;
    town: string;
    unyeong: string;
    updatedYMD: string;
    useYNull: string;
}


export interface Param {
    type : string;
    name : string;
    cell : string;
    errorType : string;
    errorLocation : string;
    detail : string;
    carNum : string;
    choose : string;
    check01 : boolean;
    check02 : boolean;
    PJTcode : string;
    pklName : string;
    image : any;
}
