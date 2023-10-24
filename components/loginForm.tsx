"use client";
import {  useState } from "react";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface LoginFormData {
  username: string;
  password: string;
}

const LoginForm = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    username: "",
    password: "",
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
      <div className="w-3/5 mx-auto m-10">
        <h1 className="text-3xl font-bold  py-5">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="username" className="block text-gray-700 dark:text-gray-300">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              className="rounded-lg w-full p-2.5 border border-gray-300 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-600 dark:focus:ring-blue-600"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="rounded-lg w-full p-2.5 border border-gray-300 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-600 dark:focus:ring-blue-600"
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded">
            Login
          </button>
          <p className="pt-5">You don't have a account!
            <b className="p-2">
              <Link href='/auth/register'>Create Account</Link>
            </b>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;