import Header from '../components/header';
import {useState, useEffect} from "react";
import Table from '../components/tableView';
import axiosInstance from '../api/axiosInstans';
import {getCode} from '../utils/common';
import Search from '../components/search';
import {Person} from '../@types/common';

export default function Valuemap(){
    const [type, setType] = useState('02');
    const [data, setData] = useState<Person[]>([]);
   
    return (
        <div className='bg-[#F5F5F5] w-full h-screen'>
            <Header type={type} setType={setType}/>
            <Search type={type} count={data.length} data={data} setData={setData}/>
            <Table type={type} data={data}/>
        </div>
    )
}
