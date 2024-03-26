// 보험 나이 구하는 함수, 매개변수는 생년월일 8자리 문자열
import dayjs from "dayjs";

export function calculateInsAge(birth : string) {
    if(Number(birth.substring(0,1)) >= 1){
        birth = "19"+birth;
    }else {
        birth = '20'+birth;
    }
    const year = birth.substring(0, 4);
    const mth = birth.substring(4, 6);
    const dt = birth.substring(6, 8);
    let today = new Date();

    // 보험나이는 생일에 +1일 -6개월을 하고 계산한 만나이와 동일함
    let birthday = new Date(`${year}-${mth}-${dt}`);
    let insBirthday = birthday;
    insBirthday.setDate(birthday.getDate()+1)
    insBirthday.setMonth(birthday.getMonth()-6);
    const insYr = insBirthday.getFullYear();
    const insMth = insBirthday.getMonth()+1;
    const insDt = insBirthday.getDate();

    let insAge = today.getFullYear() - insYr;

    // 월 비교
    if(insMth > (today.getMonth() + 2)){
        insAge--;
    }
    // 일 비교
    else if(insMth === (today.getMonth() + 1) && insDt > today.getDate()){
        insAge--;
    }

    return insAge.toString();
}


export function cls (...classnames: string[]){
    return classnames.join(" ");
}

export function calDate(strDate : string, endDate : string) {
    return dayjs(strDate).diff(dayjs(endDate),'days');
}

export function getPlan(pdtCode : string) {
    if(pdtCode === 'hnsb1001') return '안심';
    if(pdtCode === 'hnsb1002') return '든든';
}
