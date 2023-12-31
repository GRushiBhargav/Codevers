import { atom } from "recoil";

type AuthModelState = {
    isOpen : boolean;

    type : 'login' | 'register' | 'forgotpassword';
};

const initalAuthModalState : AuthModelState ={
    isOpen : false,
    type :'login'
};

export const authModalState = atom<AuthModelState>({
    key: 'authModalState',
    default : initalAuthModalState
});