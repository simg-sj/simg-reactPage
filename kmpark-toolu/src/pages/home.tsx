import Header from "../components/common/header";
import Footer from "../components/common/footer";
import {useState} from "react";
import InsuRequest from "../components/insuRqeust";
import Admin from "../components/admin";
export default function Home(){
    const [type, setType] = useState('01');

    return (
        <div className='w-full h-full'>
            <Header type={type} setType={setType}/>
            {
                type === '01' ?
                    <InsuRequest/>
                    :
                    <Admin/>
            }
            <Footer />
        </div>
    )
}
