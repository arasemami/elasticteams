"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2'

interface GridItem {
    id: any;
    title: string;
    content: string;
}

const PostsList: React.FC<{ items: GridItem[] }> = ({ items }) => {

    const editPostItem = (item: GridItem) => {
        fetch(`${process.env.BASE_URL}/api/posts/${item.id}/update`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: item.title,
                content: item.content,
            }),
        })
            .then((response) => response.json())
            .then((result) => {
                const itemsCopy = [...items];
                itemsCopy[itemsCopy.indexOf(item)] = result;
            })
            .catch((error) => {
                console.error(error);
            });

    }

    const removePostItem = (item: GridItem) => {
        const token = localStorage.getItem('token') || '';
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", token);

        fetch(`${process.env.BASE_URL}/api/posts/${item.id}/delete`, {
            method: 'DELETE',
            headers,
        })
            .then((response) => response.json())
            .then((result) => {
                Swal.fire({
                    title: `${item.id} - Delete!`,
                    text: ` ${result.error}`,
                    icon: 'info',
                })
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            <nav className="w-full bg-white   dark:bg-gray-800">
                <div className="container mx-auto flex justify-between items-center   py-2">
                    <h1 className="text-3xl font-bold">All Posts</h1>

                    <div className="flex items-center border   border-gray-300 dark:border-gray-700 rounded-md">
                        <input
                            type="search"
                            placeholder="Search..."
                            className="outline-none w-full px-4 py-2"
                        />
                        <button className="cursor-pointer hover:bg-gray-50">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                    </div>

                    <nav className="space-x-5  ">
                        <Link href="/dashboard/post/new" className="text-black-700 font-bold dark:text-gray-300 background bg-blue-300 hover:bg-blue-500 py-3 px-6 rounded-full">
                            New
                        </Link>
                    </nav>
                </div>
            </nav>
            <div className="flex flex-col  p-5">
                {items.map((item) => (
                    <div
                        key={item.title}
                        className="flex  flex-col-reverse sm:flex-row   justify-between items-center bg-gray-50 rounded-md mb-1 shadow-sm p-2"
                    >
                        <div className="flex justify-center ">
                            <button
                                type="button"
                                onClick={() => removePostItem(item)}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Remove
                            </button>
                            <button
                                type="button"
                                onClick={() => editPostItem(item)}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
                            >
                                Edit
                            </button>
                        </div>
                        <div className="flex flex-col justify-center items-end p-3">
                            <h3 className="text-center font-bold text-gray-700 dark:text-gray-300">
                                {item.title}
                            </h3>
                            <p>{item.content}</p>
                            <p className="rounded-full px-4 py-1 bg-gray-300 text-sm">{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default PostsList;


