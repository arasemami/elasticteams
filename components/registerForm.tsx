"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface registerFormData {
  fullName: string;
  username: string;
  password: string;

}

const RegisterForm = () => {
  const [formData, setFormData] = useState<registerFormData>({
    fullName: '',
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
        <h1 className="text-3xl font-bold  py-5">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="fullName" className="block text-gray-700 dark:text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="rounded-lg w-full p-2.5 border border-gray-300 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-600 dark:focus:ring-blue-600"
            />
          </div>
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
            Register
          </button>
          <p className="pt-5">I have a account!
            <b className="p-2">
              <Link href='/auth/login'>Sign In</Link>
            </b>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;