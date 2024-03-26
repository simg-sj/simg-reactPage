import axios, {AxiosResponseHeaders, InternalAxiosRequestConfig, RawAxiosResponseHeaders,} from 'axios'
import {useDispatch} from "react-redux";
/** Axios Response 데이터 형식
 *  config : 요청에 대한 axios 구성 설정
 *  data 서버가 제공한 응답 데이터
 *  headers : 헤더 정보
 *  request : 요청
 *  status : 응답 HTTP 상태 코드
 *  statusText : 응답 HTTP 상태 메시지
 */
import {InfoProps} from "../../components/atoms/inputs/carNumInput";

// 본인 서버에서 내려주는 응답 구조
interface AxiosResponse<T = any, D = any> {
    data: T
    rCnt : number
    status: number
    highpremiums : string,
    defaultpremiums : string,
    statusText: string
    headers: RawAxiosResponseHeaders | AxiosResponseHeaders
    config: InternalAxiosRequestConfig<D>
    request?: any
    msg : any
    0 : any
    res : any
}
interface ParamProps {
    cName : string,
    bpk : string,
    cJumin : string,
    cCheck : boolean,
    cCell : string
}

interface CalcProps {
    bpk : string,
    age : string
}
// 테스트
/*const baseUrl : any = process.env.REACT_APP_BASE_TEST_JOIN;*/
//운영 계
const baseUrl : any = process.env.REACT_APP_BASE_JOIN;
export async function sendJoin(param : ParamProps )  {
    let apiKey : any = '';
    // 테스트
    /*if(param.bpk === 'onna') apiKey = process.env.REACT_APP_X_API_SECRET_TEST_ONNA;
    if(param.bpk === 'enuri') apiKey = process.env.REACT_APP_X_API_SECRET_TEST_ENURI;
    if(param.bpk === 'barico') apiKey = process.env.REACT_APP_X_API_SECRET_TEST_BARICO;
    if(param.bpk === 'none') apiKey = process.env.REACT_APP_X_API_SECRET_TEST_NONE;*/

    // 운영계
    if(param.bpk === 'onna') apiKey = process.env.REACT_APP_X_API_SECRET_ONNA;
    if(param.bpk === 'enuri') apiKey = process.env.REACT_APP_X_API_SECRET_ENURI;
    if(param.bpk === 'barico') apiKey = process.env.REACT_APP_X_API_SECRET_BARICO;
    if(param.bpk === 'none') apiKey = process.env.REACT_APP_X_API_SECRET_NONE;
    try {
        const res = await axios.post<AxiosResponse<any>>(baseUrl, param,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'X-API-SECRET' : apiKey
                }
            });
        if (res.status === 200) {
            if(res.data[0].rCnt > 0) {
                return {status : res.status};
            }else {
                return {status : '107', msg  : res.data[0].msg};
            }
        }
    } catch (error) {
        return {status : error , msg : '서버오류 : [ 1877-3006 ] 고객센터에 문의바랍니다.'};
    }
}

export async function calcPremium(param : CalcProps) {
    let apiKey : any = '';
    // 테스트
    /*if(param.bpk === 'onna') apiKey = process.env.REACT_APP_X_API_SECRET_TEST_ONNA;
    if(param.bpk === 'enuri') apiKey = process.env.REACT_APP_X_API_SECRET_TEST_ENURI;
    if(param.bpk === 'barico') apiKey = process.env.REACT_APP_X_API_SECRET_TEST_BARICO;
    if(param.bpk === 'none') apiKey = process.env.REACT_APP_X_API_SECRET_TEST_NONE;*/

    // 운영계
    if(param.bpk === 'onna') apiKey = process.env.REACT_APP_X_API_SECRET_ONNA;
    if(param.bpk === 'enuri') apiKey = process.env.REACT_APP_X_API_SECRET_ENURI;
    if(param.bpk === 'barico') apiKey = process.env.REACT_APP_X_API_SECRET_BARICO;
    if(param.bpk === 'none') apiKey = process.env.REACT_APP_X_API_SECRET_NONE;

    try {
        const res = await axios.post<AxiosResponse<any>>(baseUrl+'/premiumsCheck', param,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'X-API-SECRET' : apiKey
                }
            });
        if (res.status === 200) {
            if(res.data.rCnt > 0) {
                return {status : res.status, defaultpremiums : res.data.defaultpremiums, highpremiums : res.data.highpremiums};
            }else {
                return {status : '107', msg  : res.data.msg};
            }
        }
    } catch (error) {
        return {status : error , msg : '서버오류 : [ 1877-3006 ] 고객센터에 문의바랍니다.'};
    }
}
