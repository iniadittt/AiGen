"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { UserAuth } from "@/app/context/AuthContext";
import { RxDashboard } from "react-icons/rx";

import Index from './index'


const Dashboard = () => {

    const { user, logOut } = UserAuth();

    const [menu, setMenu] = useState<any[]>([
        { active: true, render: <Index user={user}/>, nama: 'Dashboard 1', icon: <RxDashboard key="1" className="my-auto"/> },
        { active: false, render: <Index user={user}/>, nama: 'Dashboard 2', icon: <RxDashboard key="2" className="my-auto"/> },
        { active: false, render: <Index user={user}/>, nama: 'Dashboard 3', icon: <RxDashboard key="3" className="my-auto"/> },
        { active: false, render: <Index user={user}/>, nama: 'Dashboard 4', icon: <RxDashboard key="4" className="my-auto"/> },
    ])

    const signOutWithGoogle = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };
    
    const handleChangeMenu = (event: any): void => {
        event.preventDefault()
        const updatedMenu = menu.map((menuItem) => {
            if (menuItem.nama === event.target.id) {
                return {
                    ...menuItem,
                    active: true
                };
            }else{
                return {
                    ...menuItem,
                    active: false
                };
            }
        });
        setMenu(updatedMenu);
    }

    return (
        <div className="w-full h-screen flex flex-col bg-slate-100">
            <nav className="w-full bg-blue-900 py-3 px-8 flex flex-row justify-between">
                <h1 className="text-slate-200 font-bold text-2xl">AiGen</h1>
                <button onClick={signOutWithGoogle} className="text-slate-200 font-medium text-sm hover:underline">Logout</button>
            </nav>
            <div className="w-full h-full flex flex-row gap-8">
                <ul className="w-1/6 h-full p-4 overflow-auto bg-white shadow-sm rounded-md flex flex-col gap-2">
                    {
                    menu.map((item: any, index: number) => {
                        return item.active ? 
                        (
                            <div
                                id={item.nama}
                                key={index}
                                onClick={handleChangeMenu}
                                className="cursor-pointer text-md font-medium flex flex-row gap-4 px-4 py-2 rounded-md bg-blue-700 text-slate-100"
                            >
                                {item.icon}{item.nama}
                            </div>
                        ) : (
                            <div
                                id={item.nama}
                                key={index}
                                onClick={handleChangeMenu}
                                className="cursor-pointer text-md font-medium flex flex-row gap-4 px-4 py-2 rounded-md text-slate-700 hover:bg-blue-700 hover:text-slate-100"
                            >
                                {item.icon}{item.nama}
                            </div>
                        );
                    })
                }
                </ul>
                <div className="w-5/6 overflow-auto pt-8">
                    <div className="w-full h-full pr-8">
                        {
                            menu.map((item: any, index: number) => {
                                if (item.active) {
                                    return item.render;
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard