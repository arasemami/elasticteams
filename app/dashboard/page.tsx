import Link from "next/link";

const DashboardPage = () => {
    return (
        <main className=" overflow-hidden">
            <div className="container">
                <div className=" mx-auto">
                    <h1 className="text-3xl font-bold pb-5">Dashboard</h1>
                </div>

                <div className="p-5 bg-gray-50 flex flex-col sm:flex-row gap-3 rounded-md">
                    <Link href='/dashboard/post/all' className="bg-gray-200 p-5 rounded-md lg:w-1/3 sm:w-full hover:bg-gray-300 cursor-pointer">
                        <div className="bg-blue-600 rounded-full  p-4 w-max">
                        </div>
                        <h2 className="text-xl font-bold">Post Management</h2>
                        <p>To see all post, Click Here!</p>
                    </Link>
                    <Link href='/dashboard' className="bg-gray-200 p-5 rounded-md lg:w-1/3 sm:w-full hover:bg-gray-300 cursor-pointer">
                        <div className="bg-red-500 rounded-full  p-4 w-max">
                        </div>
                        <h2 className="text-xl font-bold">Setting</h2>
                        <p>To config of app, Click Here!</p>
                    </Link>
                </div>

            </div>
        </main>
    );
};

export default DashboardPage;