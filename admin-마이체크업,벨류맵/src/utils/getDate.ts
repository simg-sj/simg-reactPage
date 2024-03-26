

export default function getDate(date : string){
    let year = date.split('-')[0];
    let month = date.split('-')[1];
    let day = date.split('-')[2];

    return year+'년 '+month+'월 '+day+'일';
}
