import { Link } from "react-router-dom";

const Error = () => {
    return (
        <section className=" h-screen bg-[url('https://i.ibb.co/h7zb56d/seamless-fabric-jute-texture-pattern-closeup-sackcloth-blank-textured-textile-background-for-design.jpg')] flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
            <div className="bg-white rounded-t-[300px] text-center rounded-b-[300px] w-full">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center text-yellow-600">
                        <h2 className="mb-8 font-extrabold text-9xl ">
                            <span className="sr-only ">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl text-red-600 ">Sorry, we couldn't find this page.</p>
                        <p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
                        {/* <a rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Back to homepage</a> */}

                        <Link to='/'>
                            <div className="inline-flex items-center divide-x rounded bg-yellow-600 text-gray-100 dark:divide-gray-300">
                                <button type="button" className="px-8 py-3">Home</button>
                                <button type="button" title="Toggle dropdown" className="p-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </button>
                            </div>
                        </Link>

                    </div>
                </div>
           </div>
        </section>
    );
};

export default Error;