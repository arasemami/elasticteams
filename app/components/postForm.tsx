"use client";
import { useState } from "react";
import Link from 'next/link';

interface LoginFormData {
  title: string;
  content: string;
}

const PostManagementForm = () => {



  const [formData, setFormData] = useState<LoginFormData>({
    title: "",
    content: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = localStorage.getItem('token') || '';
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", token);

    const body = JSON.stringify({
      title: formData.title,
      content: formData.content
    });

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: headers,
      body,
      redirect: 'follow'
    };

    const response = await fetch(`${process.env.BASE_URL}/api/posts/create`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        resetForm
      })
      .catch((error) => {
        console.error(error);
      });

  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const resetForm = () => {
    alert('ras rest form')
  }

  return (
    <div className="container">
      <div className=" mx-auto">
        <h1 className="text-3xl font-bold ">Create New Post</h1>
        <p className="mb-10">For create a new post please fill all of field.</p>
        <form onSubmit={handleSubmit}  >
          <div className="mb-5">
            <label htmlFor="title" className="block text-gray-700 dark:text-gray-300">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
              className="rounded-lg w-full p-2.5 border border-gray-300 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-600 dark:focus:ring-blue-600"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="content" className="block text-gray-700 dark:text-gray-300">
              Content
            </label>
            <textarea
              name="content"
              id="content"
              rows={3}
              value={formData.content}
              onChange={handleChange}
              className="rounded-lg w-full p-2.5 border border-gray-300 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-600 dark:focus:ring-blue-600"
            />
          </div>
          <div className="flex gap-3 justify-end">
            <Link href="/dashboard/post/all" className="bg-slate-50   text-black-200 -500 font-bold py-2 px-4 mt-2 rounded">
              Cancel
            </Link>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded">
              Save
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default PostManagementForm;