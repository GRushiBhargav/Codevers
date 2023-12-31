import { authModalState } from '@/atoms/authModalAtom';
import AuthModal from '@/components/Modals/AuthModal';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';
import { useRecoilValue } from 'recoil';
type AuthPageProps = {};

const AuthPage:React.FC<AuthPageProps> = () => {
    const authModal = useRecoilValue(authModalState)
        return <div className='bg-gradient-to-b from-gray-600 to-black h-screen relative'>
    <div className='max-w-7xl mx-auto'>
        <Navbar/>
        <div className='flex items-center justify-content h-[calc(100vh-5rem)] pointer-eventer-none select-none'>
     {authModal.isOpen && <AuthModal/>}
        </div>
        </div>
</div>
}
export default AuthPage;