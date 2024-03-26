import React, {useState} from 'react';
import Header from "../component/header";
import Section1 from "../component/section1";
import UserInfo from "../component/userInfo";
import Alert from "../component/alert";

const ClimPage: React.FC = () => {
    const [msg, setMsg] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='w-full'>
            <Header/>
            <Section1 />
            <UserInfo  setMsg={setMsg} setIsOpen={setIsOpen}/>
            <Alert msg={msg} isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
    );
};

export default ClimPage;
