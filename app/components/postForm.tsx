"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';
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
  const router = useRouter();



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <div className="container">
      <div className=" mx-auto">
        <h1 className="text-3xl font-bold ">Create New Post</h1>
        <p className="mb-10">For create a new post please fill all of field.</p>
        <form onSubmit={handleSubmit}>
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
              value={formData.content} 
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