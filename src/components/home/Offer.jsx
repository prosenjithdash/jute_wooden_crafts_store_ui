
const Offer = () => {
    return (
       
        <div className=" p-6 my-[50px] lg:py-[120px]  bg-[#404040] text-gray-50">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <h2 className="text-center lg:text-6xl text-[40px] tracking-tighter font-bold">Up to
                        <br className="sm:hidden" /> 50% Off
                    </h2>
                    <div className="space-x-2 text-center py-2 lg:py-0">
                        <span>Plus free shipping! Use code:</span>
                        <span className="font-bold text-lg">MAMBA</span>
                    </div>
                    <a href="#" rel="noreferrer noopener" className="px-6 mt-4 lg:mt-0 py-5 rounded-md  block dark:bg-gray-900 dark:text-gray-50 dark:border-gray-600 bg-yellow-700">Shop Now</a>
                </div>
            </div>
        </div>
    );
};

export default Offer;