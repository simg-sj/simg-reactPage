import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {mobiType, step1Type} from "../@types/tour";


const userInfo = createSlice({
    name: 'user',
    initialState: {
        birth : '',
        gender : '',
        fromDate : '',
        toDate : '',
        goal : '',
        amt : '',
        pdtCode : ''
    } as step1Type,
    reducers: {
        setStep1: (state, action : PayloadAction<step1Type>) => {
            state.birth = action.payload.birth;
            state.fromDate = action.payload.fromDate;
            state.toDate = action.payload.toDate;
            state.goal = action.payload.goal;
            state.gender = action.payload.gender;
        },
        setStep2 : (state, action) => {
            /*state.amt = action.payload.amt;
            state.pdtCode = action.payload.pdtCode;*/
        }
    }
});

const isMobile = createSlice({
    name: 'mobile',
    initialState: {
        isMobi : false,
    } as mobiType,
    reducers: {
        setMobi : (state, action : PayloadAction<mobiType>) => {
            state.isMobi = action.payload.isMobi;
        },
    }
});

export const { setStep1 } = userInfo.actions;
export const { setMobi } = isMobile.actions;

export const store = configureStore({
    reducer: {
        user: userInfo.reducer,
        mobile : isMobile.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const selectUser = (state: RootState) => state.user; // 추가
