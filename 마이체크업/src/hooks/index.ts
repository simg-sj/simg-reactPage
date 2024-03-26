import { createSlice } from "@reduxjs/toolkit";
import {RootState} from "./store";
interface loadingType {
    loading : boolean
    type : any
}

const loadingStep = createSlice({
    name: 'load',
    initialState: {
        loading : false
    } as loadingType ,
    reducers: {
        GLOBAL_LOADING (state : any) {
            state.loading = true;
        },
        GLOBAL_LOADED (state  : any)  {
            state.loading = false;
        }
    }
});



export const { GLOBAL_LOADING, GLOBAL_LOADED } = loadingStep.actions;

export default loadingStep;



export const selectLoad = (state : RootState) => state.load; // 추가
