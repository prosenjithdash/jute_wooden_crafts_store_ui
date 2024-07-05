


import { RiDeleteBin5Fill } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyArtCraftCard = ({ craft, control, setControl }) => {
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
        stockStatus,
        creator
    } = craft;
    
    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                console.log('Confirm delete.')

                fetch(`https://jute-wooden-crafts-store-server.vercel.app/crafts/${_id}`, {
                    method: 'DELETE'

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                            setControl(!control)
                            // const remaining = coffees.filter(cof => cof._id !== _id)
                            // setCoffees(remaining)
                        }
                    })

            }
        });
    }

    return (
        <section>
            <Link to={`/craftDetails/${_id}`}>
                <div className="rounded-md shadow-md sm:w-96 dark:bg-gray-50 dark:text-gray-800 ">
                    <div className="flex items-center justify-between p-3">
                        <div className="flex items-center space-x-2">
                            <img src={creator?.image} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300" />
                            <div className="-space-y-1">
                                <h2 className="text-sm font-semibold leading-none">{creator?.name}</h2>
                                <span className="inline-block text-xs leading-none dark:text-gray-600">{subcategory_Name}</span>
                            </div>
                        </div>
                        <button title="Open options" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                <path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"></path>
                                <path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"></path>
                                <path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"></path>
                            </svg>
                        </button>
                    </div>
                    <img src={image} alt="" className="object-cover object-center w-full h-72 dark:bg-gray-500" />

                    <div className="space-y-2 p-[20px] ">
                        <a rel="noopener noreferrer" href="#" className="block">
                            <h3 className="text-xl font-semibold dark:text-violet-600">{item_name}</h3>
                        </a>
                        <p className="leading-snug dark:text-gray-600 flex-grow">{shortdescription}</p>
                    </div>

                    <div className=" px-[20px] pb-[10px] flex gap-[24px] items-center justify-between">

                        <p className="leading-snug dark:text-gray-600 "> <span className="font-semibold">Price:</span> {price} /=</p>
                        <p className="leading-snug dark:text-gray-600 "><span className="font-semibold">Rating:</span> {rating}</p>
                    </div>



                </div>
            </Link>
            <div className=" px-[20px] py-[20px] flex gap-[24px] items-center justify-around w-[382px] rounded-xl mt-2 mb-4 bg-white p-10 shadow-xl ">

                <Link to={`/craftUpdate/${_id}`} >

                    <RxUpdate className="w-[30px] h-[30px] text-yellow-700" />
                </Link>

                <div onClick={() => handleDelete(_id)} >
                    <RiDeleteBin5Fill className="w-[30px] h-[30px] text-red-700" />

                </div>
            </div>
       </section>
    );
};

export default MyArtCraftCard;