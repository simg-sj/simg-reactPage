import {productProps} from "../@types/tour";
import axios from "axios";


const getProduct = async (param : string) : Promise<productProps>  => {
    let typeP = param
    try {
        const res =  await axios.get(`http://43.200.21.215:5000/api/join/getProduct`, {
            params: {
                type: { typeP },
            },
        })
        return res.data;
    }catch(e) {
        console.log(e);
        return { data: [] };
    }
};

export default getProduct;
