import Main from "../../components/Template/main";
import {useLocation, useParams, useSearchParams} from 'react-router-dom';
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {apiKeys} from "../reducers/userInfo";
import Certification from "../../components/Template/certification";
/*import RegisterPage from "../../components/Template/registerPage";*/


export interface StepProps {
    step : string
}
const Register = () => {
    const [searchParams, setSeratchParams] = useSearchParams();
    const dispatch = useDispatch();
    const key = searchParams.get('key');
    const [step, setStep] = useState<string>('step1');
    useEffect(() => {
        if(key === '' || key === null){
           dispatch(apiKeys('none'));
        }else {
            dispatch(apiKeys(key));
        }
        console.log(key);
    }, []);
    return(
        <div>
            {
                step === 'step1' &&
                <Main  step={step} setStep={setStep}/>
            }
            {
                step === 'step2' &&
                <Certification step={step} setStep={setStep}/>
            }
           {/* {
                step === 'step2' &&
                <Certification step={step} setStep={setStep}/>
            }
            {
                step === 'step3' &&
                <RegisterPage step={step} setStep={setStep}/>
            }*/}
        </div>
    )
}
export default Register;
