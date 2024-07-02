import { useLoaderData } from "react-router-dom";

const CraftDetails = () => {
    const craftDetail = useLoaderData();
    console.log(craftDetail)

    const {
        _id,
        image,
        item_name,
        subcategory_Name,
        shortdescription,
        price,
        rating,
        customization,
        processing_time,
        stockStatus
    } = craftDetail

    return (
        <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 text-gray-50">
            <div className="flex flex-col max-w-[1000px] mx-auto overflow-hidden rounded">
                <img src={image} alt="" className="w-full h-60 sm:h-[500px] bg-gray-500 border-[10px] border-yellow-700 rounded-lg" />
                <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-[900px] sm:px-10 sm:mx-12 lg:rounded-md bg-[#404040]">
                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">{item_name}</a>
                        <p className="text-xs dark:text-gray-600">
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline">{subcategory_Name}</a>
                        </p>
                    </div>
                    <div className="dark:text-gray-800">
                       
                        <p>{shortdescription}</p>
                        <div className="space-y-2 mt-10">
                            <p>Price: <span className="text-gray-300">{price}</span></p>
                            <p>Rating: <span className="text-gray-300">{rating}</span></p>
                            <p>Customization: <span className="text-gray-300">{customization}</span></p>
                            <p>Processing Time: <span className="text-gray-300">{processing_time}</span></p>
                            <p>StockStatus: <span className="text-gray-300">{stockStatus}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CraftDetails;