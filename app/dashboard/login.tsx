"use client";

import * as React from 'react';
import { useEffect } from 'react';
import { UserAuth } from "@/app/context/AuthContext";
import { FaGoogle } from "react-icons/fa";
import ButtonLogin from '@/app/components/ButtonLogin';
import HeaderTyping from '@/app/components/HeaderTyping';


const Login = () => {

    const { user, googleSignIn } = UserAuth();

    const signInWithGoogle = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const checkAuthentication = async () => {
            await new Promise((resolve) => setTimeout(resolve, 50));
        };
        checkAuthentication();
    }, [user]);


    return (
        <div className='w-full h-screen bg-blue-700'>
            <div className='h-full flex flex-row gap-12 mx-auto'>
                <div className='w-7/12 h-full py-8 flex flex-col gap-48 justify-between px-12'>
                    <h1 className='font-bold text-slate-200 text-4xl'>AiGen</h1>
                    <div className='h-full flex flex-col justify-center pb-64'>
                        <p className='text-slate-200 leading-tight'>
                            <HeaderTyping className='inline-block text-5xl font-bold leading-snug' />
                        </p>
                    </div>
                </div>
                <div className='w-5/12 h-full px-8 bg-slate-200 flex flex-col justify-center gap-6'>
                    <h1 className='text-gray-700 font-bold text-3xl text-center'>Get Started</h1>
                    <ButtonLogin action={signInWithGoogle}>
                        <FaGoogle className='my-auto text-slate-200' />
                        <span className='my-auto text-md font-medium text text-slate-200'>Login With Google</span>
                    </ButtonLogin>
                </div>

            </div>
        </div>
    )
}

export default Login