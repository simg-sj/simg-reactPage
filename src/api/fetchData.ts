import axiosInstance from "./axiosInstans";
import {Param} from "../@types/common";

export async function searchData(parkingName : string){
        try {
            let data = {
                parkingName: parkingName,
                sort: 'name'
            }
            const result: any = await axiosInstance.post('/parkingNameSerch', data);
            console.log(result);
            if (result.data.length > 0) {
                return result.data
            }else {
                alert("데이터가 없습니다.");
                return '';
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            return error;
        }
}


export async function climeRequest(param : FormData){
    try {
        const result: any = await axiosInstance.post('/toolRequest', param, {headers: {
            'Content-Type': 'multipart/form-data',
        }});
        console.log(result.code)
        if (result.code === '200') {
            return result.code
        }else {
            return result.msg;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return error;
    }
}


export async function insertLocation(param : Param){
    try {
        const result: any = await axiosInstance.post('/manageLocation', param);
        console.log(result);
        if (result.data.length > 0) {
            return result.data
        }else {
            alert("데이터가 없습니다.");
            return '';
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return error;
    }
}

export async function updateLocation(param : Param){
    try {
        const result: any = await axiosInstance.post('/updateLocation', param);
        console.log(result);
        if (result.data.length > 0) {
            return result.data
        }else {
            alert("데이터가 없습니다.");
            return '';
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return error;
    }
}
