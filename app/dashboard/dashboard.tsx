"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { UserAuth } from "@/app/context/AuthContext";

import { RxDashboard } from "react-icons/rx";



import Link from 'next/link'



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
            <nav className="w-full bg-blue-900 py-3 px-8 flex flex-row justify-between">
                <h1 className="text-slate-200 font-bold text-2xl">AiGen</h1>
                <button onClick={signOutWithGoogle} className="text-slate-200 font-medium text-sm hover:underline">Logout</button>
            </nav>
            <div className="w-full h-full flex flex-row gap-8">
                <ul className="w-1/6 h-full p-4 overflow-auto bg-white shadow-sm rounded-md flex flex-col gap-4">
                    <li className="list-none flex flex-row gap-5 px-4 py-2 rounded-md hover:bg-blue-700">
                        <RxDashboard width={32} height={32} color="black hover:white" className="my-auto"/>
                        <Link href="/dashboard" className="my-auto text-md font-medium text-slate-700 hover:text-slate-100">Dashboard</Link>
                    </li>
                </ul>
                <div className="w-5/6 overflow-auto pt-8">
                    <div className="w-full h-full pr-8">
                        <div className="w-full bg-blue-900 p-6 text-slate-200 rounded-md shadow-md">
                            <p className="text-2xl">Welcome, {user.displayName}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard