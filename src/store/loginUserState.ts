import { atom } from 'recoil'

type loginUserType = {
    id:number;
    name:string;
}

export const loginUserState = atom<loginUserType>({
    key:"loginUser",
    default: {
        id: 0,
        name:"",
    }
})