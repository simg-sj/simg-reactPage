
export function randomCode(){
    let vrfctNm : string = "";
    for (let i : number = 0; i < 6; i++) {
        let c : number = Math.floor(Math.random() * 9) + 1;
        vrfctNm += c.toString();
    }
    return vrfctNm;
}