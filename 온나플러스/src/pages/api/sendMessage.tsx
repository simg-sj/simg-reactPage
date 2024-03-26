import axios from "axios";
import { randomCode } from "../../components/util/common";

const baseUrl : any = process.env.REACT_APP_BASE_URL;
const apiKey: any = process.env.REACT_APP_X_API_SECRET;
export async function sendMessage(phone : string)  {
        let code :string = randomCode();
        let param = {
            code : code,
            cell : phone
        }
    try {
        const res = await axios.post(baseUrl, param);
        console.log(res.status)
        if (res.status === 200) {
            return {status : res.status, code : code};
        }
    } catch (error) {
            return {status : error , msg : '서버오류 : [ 1877-3006 ] 고객센터에 문의바랍니다.'};
    }
         /*await axios.post(baseUrl, param,{
            validateStatus: () =>  false,
            headers : {
                "Content-Type" : 'application/x-www-form-urlencoded',
                "X-API-SECRET" : apiKey
            },
            // withCredentials: true,
        }).then((res) => {
            console.log('success');
        }).catch((err) => {
            console.log("fail");
            return code;
        })*/
}
