"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { UserAuth } from "@/app/context/AuthContext";
import Login from "./login"
import Dashboard from "./dashboard";

const Page = () => {
    const { user } = UserAuth();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuthentication = async () => {
            await new Promise((resolve) => setTimeout(resolve, 50));
            setLoading(false);
        };
        checkAuthentication();
    }, [user]);

    return (
        <>
            {
                loading ? (
                    // Loading
                    <p>Loading...</p>
                ) : user ? (
                    // User sudah login
                    <Dashboard />
                ) : (
                    // User belum login
                    <Login />
                )
            }
        </>
    );
};

export default Page;