import { authModalState } from '@/atoms/authModalAtom';
import { auth } from '@/firebase/firebase';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSetRecoilState } from 'recoil';
import Logout from '../Buttons/Logout';
import Image from 'next/image';

type TopBarProps = {
    problemPage? : boolean;
};

const TopBar:React.FC<TopBarProps> = ({problemPage}) => {
    const [user] = useAuthState(auth);
	const setAuthModalState = useSetRecoilState(authModalState);
	const router = useRouter();
    
    return (
        <nav className='relative flex h-[60px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7'>
        <div className={`flex w-full items-center justify-between max-w-[1200px] mx-auto`}>
        <Link href='/' className='h-[55px] flex-1'>

            <Image src="/logo2.png" alt="Logo" className='h-full'height={125} width={200} />
            </Link>
            {problemPage && (
                <div className='flex- items-center gap-4 flex-1 justify-center'></div>
            )}
            <div className='flex items-center gap-10 flex-1 justify-end'>
                {!user && (
                <Link href='/auth'onClick={() => setAuthModalState((prev) => ({ ...prev, isOpen: true, type: "login" }))}>
                <button className='bg-dark-fill-3 py-1 px-3 cursor-pointer rounded '>Sign In</button>
                </Link>
                )}
                {user && (
						<div className='cursor-pointer group relative'>
							<Image src='/avatar.png' alt='Avatar' width={30} height={30} className='rounded-full' />
                            <div
								className='absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg 
								z-40 group-hover:scale-100 scale-0 
								transition-all duration-300 ease-in-out'
							>
								<p className='text-sm'>{user.email}</p>
							</div>
							
						</div>
					)}
                    {user && <Logout />}
            </div>
            </div>
            </nav>

        );
}
export default TopBar;