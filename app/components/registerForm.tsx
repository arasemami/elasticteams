"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
interface registerFormData {
  username: string;
  email: string;
  password: string;
}

const RegisterForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<registerFormData>({
    email: '',
    username: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = {
      userName: formData.username,
      userMail: formData.email,
      password: formData.password,
    };

    await fetch(`${process.env.BASE_URL}/api/register`, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "agent": "web",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data);
        localStorage.setItem('token', result.data.token)
        router.push('/dashboard');
      })
      .catch((error) => {
        console.error(error);
      });

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
        <h1 className="text-center sm:text-left text-3xl font-bold  py-5">Sign Up</h1>
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
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              value={formData.email}
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
            Register
          </button>
          <div className="flex flex-col text-center sm:flex-row gap-1 py-5">
            <p>I have a account! </p>
            <Link className="font-bold hover:text-blue-500" href='/auth/login'> Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;