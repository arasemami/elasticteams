"use client";
import { useState } from "react";
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

    var headers = new Headers();
    headers.append("Content-Type", "application/json");

    const body = JSON.stringify({
      email: formData.username,
      password: formData.password
    });

    var requestOptions: RequestInit = {
      method: 'POST',
      headers,
      body,
      redirect: 'follow'
    };

   const response = await fetch("https://ffrhqp-3000.csb.app/api/login", requestOptions)

    if (response.ok) {
      // Router push to dashboard
      router.push('/dashboard');
    } else {
      // Handle error
      console.log('Error registering user:', response.statusText);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <div className="container  h-screen flex items-center justify-center">
      <div className="w-3/5 mx-auto m-10">
        <div className="bg-blue-500   rounded-full flex m-auto w-24 h-24 items-center justify-center">
          <h1 className="text-cyan-50 font-bold text-xl">AP</h1>
        </div>
        <h1 className="text-center sm:text-left  text-3xl font-bold  py-5">Sign In</h1>
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
          <button type="submit" className="w-full sm:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded">
            Login
          </button>
          <div className="flex flex-col text-center sm:flex-row gap-1 py-5">
            <p>You don't have a account! </p>
            <Link className="font-bold hover:text-blue-500" href='/auth/register'> Create Account</Link>
          </div>

        </form>
      </div>
    </div>
  );
};

export default LoginForm;