import axios from 'axios';
import {primeumType} from "../@types/tour";
import {calculateInsAge} from "../utils/common";
import dayjs from "dayjs";



export const getAmt = async (params : primeumType) => {
    try {
        let date = dayjs(params.toDate).diff(dayjs(params.fromDate),'days');
        let age = Number(calculateInsAge(params.birth));
        let gender = '';
        if(params.gender === 'male') gender = 'M';
        if(params.gender === 'female') gender = 'F';
        let param  = {
            date : date,
            birth : age,
            gender : gender,
            type : params.pdtCode,
            count : 1
        };

        const res =  await axios.post('http://43.200.21.215:5000/api/join/primeumCalc',param, {
        })
        return res.data.amt.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
    }catch(e) {
        console.log(e);
        return { data: [] };
    }
}
