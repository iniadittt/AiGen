"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { UserAuth } from "@/app/context/AuthContext";

import { RxDashboard } from "react-icons/rx";



import Link from 'next/link'
import Image from "next/image";



const Dashboard = () => {
    const { user, logOut } = UserAuth();

    const signOutWithGoogle = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="w-full h-screen flex flex-col bg-slate-100">
            <nav className="w-full gap-8 flex flex-row bg-white border-b">
                <div className="w-[13%]  mx-auto py-2 border-r">
                    <h1 className="text-gray-700 font-bold text-2xl text-center">AiGen</h1>
                </div>
                <div className="w-[87%] flex justify-end pr-8 py-2">
                    <button onClick={signOutWithGoogle} className="text-gray-700 font-semibold text-sm hover:underline">Logout</button>
                </div>
            </nav>
            <div className="w-full h-full flex flex-row gap-8">
                <ul className="w-[13%] h-full overflow-auto bg-white shadow-sm flex flex-col gap-4 border-r">
                    <div className="p-4 flex flex-col gap-4 mx-auto">
                        <Image src={user.photoURL} width={96} height={96} className="rounded-full" alt="Profile" />
                        <h3 className="text-xl font-semibold text-center text-gray-700">{user.displayName}</h3>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h4 className="font-bold text-sm px-4 uppercase text-gray-700">Menu</h4>
                        <li className="list-none flex flex-row gap-4 px-4 py-2 border-l-4 border-transparent text-gray-700 hover:text-blue-500 hover:border-l-blue-500 transition-colors duration-200 active:text-blue-500 active:border-l-blue-500">
                            <RxDashboard width={32} height={32} className="my-auto" />
                            <Link href="/dashboard" className="my-auto text-md font-medium">Dashboard</Link>
                        </li>
                        <li className="list-none flex flex-row gap-4 px-4 py-2 border-l-4 border-transparent text-gray-700 hover:text-blue-500 hover:border-l-blue-500 transition-colors duration-200 active:text-blue-500 active:border-l-blue-500">
                            <RxDashboard width={32} height={32} className="my-auto" />
                            <Link href="/dashboard" className="my-auto text-md font-medium">Dashboard</Link>
                        </li>
                    </div>
                </ul>
                <div className="w-[87%] overflow-auto pt-8">
                    <div className="w-full h-full flex flex-col pr-8 gap-8">
                        <h1 className="text-gray-700 text-2xl font-semibold">Welcome back, {user.displayName}!</h1>
                        {/* <div className="w-full bg-blue-900 p-6 text-slate-200 rounded-md shadow-md">
                            <p className="text-2xl">Welcome, {user.displayName}</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard