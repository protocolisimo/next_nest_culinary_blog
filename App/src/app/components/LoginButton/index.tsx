"use client"; // This must be a client component

import { signIn, signOut } from "next-auth/react";

export default function LoginButton({ isSession }: { isSession: boolean }) {
    const handleLogin = async () => {
        await signIn("google", { redirect: false }); // No redirect, login in the background
    };

    const handleLogout = async () => {
        await signOut();
    };

    return <>
        {isSession ? (<button
            onClick={handleLogout}
            className="bg-green-500 px-4 py-2 rounded"
        >
            Logout
        </button >) : (

            <button
                onClick={handleLogin}
                className="bg-green-500 px-4 py-2 rounded"
            >
                Login with Google
            </button >)}
    </>
}