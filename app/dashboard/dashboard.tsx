"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { UserAuth } from "@/app/context/AuthContext";
import { RxDashboard } from "react-icons/rx";
import Index from './index'
import Image from "next/image";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Dashboard = () => {

    const { user, logOut } = UserAuth();

    const [menu, setMenu] = useState<any[]>([
        { active: true, render: <Index user={user} />, nama: 'Dashboard', icon: <RxDashboard key="1" className="my-auto" /> },
        { active: false, render: <Index user={user} />, nama: 'Dashboard 2', icon: <RxDashboard key="2" className="my-auto" /> },
        { active: false, render: <Index user={user} />, nama: 'Dashboard 3', icon: <RxDashboard key="3" className="my-auto" /> },
        { active: false, render: <Index user={user} />, nama: 'Dashboard 4', icon: <RxDashboard key="4" className="my-auto" /> },
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
            } else {
                return {
                    ...menuItem,
                    active: false
                };
            }
        });
        setMenu(updatedMenu);
    }

    function classNames(...classes: any[]) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <div className="w-full h-screen flex flex-col bg-slate-100">
            <nav className="w-full gap-8 flex flex-row bg-white border-b">
                <div className="w-[13%] border-r h-full flex justify-center">
                    <h1 className="text-gray-700 font-bold text-2xl inline-flex items-center text-center">AiGen</h1>
                </div>
                <div className="w-[87%] flex justify-end pr-8 py-2 gap-8">

                    <Menu as="div" className="relative inline-block text-left h-full">
                        <div className="inline-flex items-center justify-center w-full h-full">
                            <Menu.Button className="flex flex-row gap-2 items-center text-sm font-semibold text-gray-700">
                                <Image src={user.photoURL} alt="Profile" width={32} height={32} className="rounded-full" />
                                <p className="text-gray-700 font-semibold text-sm my-auto">{user.displayName}</p>
                                <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-700" aria-hidden="true" />
                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <Menu.Item>
                                        <>
                                            <p className="text-sm text-gray-700 px-4 pt-2">Signed in as</p>
                                            <p className="text-sm text-gray-700 font-semibold px-4 pb-2">{user.email}</p>
                                        </>
                                    </Menu.Item>
                                </div>
                                <div className="py-1">
                                    <Menu.Item>
                                        <button onClick={signOutWithGoogle} className="text-gray-700 px-4 py-2 text-sm text-left hover:bg-red-500 hover:text-white w-full">Logout</button>
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </nav>

            <div className="w-full h-full flex flex-row gap-8">
                <div className="w-[13%] h-full overflow-auto bg-white shadow-sm flex flex-col border-r pt-8">
                    {
                        menu.map((item: any, index: number) => {
                            return item.active ?
                                (
                                    <div
                                        id={item.nama}
                                        key={index}
                                        onClick={handleChangeMenu}
                                        className="cursor-pointer text-md font-medium flex flex-row gap-4 px-4 py-2 text-blue-700 border-l-4 border-l-blue-700"
                                    >
                                        {item.icon}{item.nama}
                                    </div>
                                ) : (
                                    <div
                                        id={item.nama}
                                        key={index}
                                        onClick={handleChangeMenu}
                                        className="cursor-pointer text-md font-medium flex flex-row gap-4 px-4 py-2 text-slate-700 border-l-4 border-l-transparent hover:border-l-blue-600 hover:text-blue-600"
                                    >
                                        {item.icon}{item.nama}
                                    </div>
                                );
                        })
                    }
                </div>
                <div className="w-[87%] overflow-auto pt-8">
                    <div className="w-full h-full pr-8">
                        {
                            menu.map((item: any) => {
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