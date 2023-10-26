import Link from "next/link";
import React from "react";


const Navbar = () => {
    return (
        <nav className="w-full bg-white shadow dark:bg-gray-800">
            <div className="container mx-auto flex justify-between items-center px-4 py-2">
                <h1 className="text-xl font-bold">My App</h1>
                <nav className="space-x-5 p-3">
                    <Link href="/dashboard/post/all" className="text-gray-700 dark:text-gray-300">Posts</Link>
                    <Link href="/auth/login" className="text-black-700 font-bold dark:text-gray-300  py-3 px-6 rounded-full">Sing Out</Link>
                </nav>
            </div>
        </nav>
    );
};

export default Navbar;