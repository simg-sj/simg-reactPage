import React, {useEffect, useState} from 'react';
import Modals from "../components/modals";
import Header from "../components/header";
import Step1 from "../container/step1";
import WebFooter from "../components/webFooter";
import WebHeader from "../components/webHeader";
import Step2 from "../container/step2";
import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router";
import Step3 from "../container/step3";
const RegisterPages: React.FC = () => {
    const {step} = useParams();
    const state = useSelector((state : any) => state.user);
    const navigate = useNavigate();
    const [msg, setMsg] = useState('여행목적');
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useSelector((state : any) => state.mobile.isMobi);
    /*useEffect(() => {
        if(state) navigate('/');
    }, []);*/
    return (
        <div className={isMobile ? 'w-screen' :'center-flex h-screen flex-col'}>
            {!isMobile && <WebHeader/>}
            <div className={isMobile ? '' : 'w-[400px] h-[620px] border my-4 mb-[80px] mt-14 shadow-2xl rounded-lg'}>
                <Header />
                {
                    !step  &&
                    <Step1 msg={msg} setMsg={setMsg} isOpen={isOpen} setIsOpen={setIsOpen} />
                }
                {
                    step === 'step2' &&
                    <Step2 />
                }
                {
                    step === 'step3' &&
                    <Step3 msg={msg} setMsg={setMsg} isOpen={isOpen} setIsOpen={setIsOpen}/>
                }
                <Modals msg={msg} isOpen={isOpen} setIsOpen={setIsOpen}/>
            </div>
            {!isMobile && <WebFooter />}
        </div>
    );
};

export default RegisterPages;
