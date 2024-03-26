import Header from "../components/header";
import {useState,useEffect} from "react";
import HomeCard from "../components/homeCard";
import DashBoard from "../components/dashBoard";
import axiosInstance from '../api/axiosInstans';
import {getCode} from '../utils/common';
export default function Home(){
    const [type, setType] = useState('01');
    const [card, setCard] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                let code = getCode(type);
                const result: any = await axiosInstance.get(`/getData?bpk=${code}`);
                    setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [type]);
    return (
        <div className='bg-[#F5F5F5] w-full h-screen'>
            <Header comp={'home'} type={type} setType={setType} />
            <DashBoard card={card} data={data} />
            <HomeCard card={card} setCard={setCard} />
        </div>
    )
}
