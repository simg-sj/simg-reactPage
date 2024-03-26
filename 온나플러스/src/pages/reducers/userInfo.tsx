import { produce } from 'immer';

const USER_PHONE = 'userinfo/USER_PHONE';
export const GLOBAL_LOADING = "LOADING";
export const GLOBAL_LOADED = "LOADED";

export const USER_BIRTH = "userinfo/USER_BIRTH";

const API_KEYS = 'userinfo/APK_KEYS';

export const userPhone = (  cell: string ) => ({
    type : USER_PHONE,
    cell
});

export const userBirth = ( birth : string, male : string, age : string, name : string, defaultpremiums : string,highpremiums : string ) => ({
    type : USER_BIRTH,
    birth,
    male,
    age,
    name,
    defaultpremiums,
    highpremiums
})

export const apiKeys = ( keys : any ) => ({
    type : API_KEYS,
    keys
})

type PhoneType = {
    cell : string
    loading : boolean
    keys : string,
    birth : string,
    male : string,
    age : string,
    name : string,
    defaultpremiums : string,
    highpremiums : string
}

const initialState : PhoneType = {
    cell : '',
    loading : false,
    keys : '',
    birth : '',
    male : '',
    age : '',
    name : '',
    defaultpremiums : '',
    highpremiums : ''
};

function userInfo(state = initialState, action: { type: any; cell : string,name : string, loading : boolean, keys : any, birth : string, male : string, age : string,defaultpremiums : string, highpremiums : string })  {
    switch (action.type){
        case  USER_PHONE :
            return produce(state, draft => {
                draft.cell = action.cell
            });
        case GLOBAL_LOADING :
            return produce(state, draft => {
                draft.loading = true
            });
        case GLOBAL_LOADED :
            return produce(state, draft => {
                draft.loading = false
            });
        case API_KEYS :
            return produce(state, draft => {
                draft.keys = action.keys
            });
        case  USER_BIRTH :
            return produce(state, draft => {
                draft.birth = action.birth
                draft.male = action.male
                draft.age = action.age
                draft.name = action.name
                draft.defaultpremiums = action.defaultpremiums
                draft.highpremiums = action.highpremiums
            })
        default : return state;
    }
}
export default userInfo;