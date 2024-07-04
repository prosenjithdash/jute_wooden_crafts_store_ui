

import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const CraftUpdate = () => {

    const craft = useLoaderData();
    console.log(craft)

    const { _id,
        item_name,
        subcategory_Name,
        image,
        price,
        rating,
        shortdescription,
        customization,
        stockStatus,
        processing_time } = craft;



    const handleUpdateCraft = event => {
        event.preventDefault();

        const form = event.target;



        const subcategory_Name = form.subcategoryName.value;
        const image = form.image.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const item_name = form.itemName.value;
        const shortdescription = form.shortDescription.value;
        const customization = form.customization.value;
        const stockStatus = form.stockStatus.value;
        const processing_time = form.processingTime.value;
       

        const updateJuteWooden = {
            item_name,
            subcategory_Name,
            image,
            price,
            rating,
            shortdescription,
            customization,
            stockStatus,
            processing_time
        }

        console.log(item_name,
            subcategory_Name,
            image,
            price,
            rating,
            shortdescription,
            customization,
            stockStatus,
            processing_time
            )

        console.log(updateJuteWooden)



        // send data to the server
        fetch(`https://jute-wooden-crafts-store-server.vercel.app/crafts/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateJuteWooden)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // alert('New Craft added successfully.')
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: ' Craft update successfully.',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                }
            })


    }
    return (
        <div className="max-w-[1240px] mx-auto mb-[100px] mt-[50px]">

            <form
                onSubmit={handleUpdateCraft}
                className="max-w-[1000px] mx-auto border-2 border-yellow-700 p-8 rounded-xl">

                <h2 className="text-center text-[30px] font-extrabold text-yellow-700 mb-4">Update Craft Item </h2>
                <div className="flex w-full gap-4">
                    {/* <div className="col-span-full sm:col-span-3 w-full">
                        <label className="text-black"> User Name</label>
                        <input type="text" placeholder="Enter your name" name="name" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-black focus:ring-violet-600 border border-violet-600" />
                    </div> */}

                    {/* <div className="col-span-full sm:col-span-3 w-full">
                        <label className="text-black">User Email</label>
                        <input type="email" placeholder=" Enter your email" name="email" defaultValue={user.email} className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-black focus:ring-violet-600 border border-violet-600" />
                    </div> */}
                </div>

                <div className="flex w-full gap-4 mt-4">
                    <div className="col-span-full sm:col-span-3 w-full">
                        <label className=" text-black"> Item Name</label>
                        <input type="text" defaultValue={item_name} placeholder=" Enter item name" name="itemName" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-black focus:ring-violet-600 border border-yellow-700" />
                    </div>

                    <div className="col-span-full sm:col-span-3 w-full">
                        <label className="text-black">Subcategory Name</label>
                        <input type="text" defaultValue={subcategory_Name} placeholder="Enter your Subcategory name" name="subcategoryName" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-black focus:ring-yellow-700 border border-yellow-700" />
                    </div>
                </div>

                <div className="flex w-full gap-4 mt-4">
                    <div className="col-span-full sm:col-span-3 w-full">
                        <label className="text-black">Short Description</label>
                        <input type="text" defaultValue={shortdescription} placeholder="Enter short description" name="shortDescription" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-black focus:ring-yellow-700 border border-yellow-700" />
                    </div>

                    <div className="col-span-full sm:col-span-3 w-full">
                        <label className="text-black">Processing Time</label>
                        <input type="text" defaultValue={processing_time} placeholder="Enter processing time" name="processingTime" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-black focus:dark:ring-yellow-700 border border-yellow-700" />
                    </div>
                </div>

                <div className="flex w-full gap-4 mt-4">
                    <div className="col-span-full sm:col-span-3 w-full">
                        <label className="text-black">Price</label>
                        <input type="text" defaultValue={price} placeholder="Enter price" name="price" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-black focus:dark:ring-yellow-700 border border-yellow-700" />
                    </div>

                    <div className="col-span-full sm:col-span-3 w-full">
                        <label className="text-black">Rating</label>
                        <input type="text" defaultValue={rating} placeholder="Enter rating" name="rating" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-black focus:dark:ring-yellow-700 border border-yellow-700" />
                    </div>
                </div>

                <div className="flex w-full gap-4 mt-4">
                    <div className="col-span-full sm:col-span-3 w-full">
                        <label className="text-black">Customization</label>
                        <input type="text" defaultValue={customization} placeholder="Enter customization" name="customization" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-black focus:dark:ring-yellow-700 border border-yellow-700" />
                    </div>

                    <div className="col-span-full sm:col-span-3 w-full">
                        <label className="text-black">Stock Status</label>
                        <input type="text" defaultValue={stockStatus} placeholder="Enter stock status" name="stockStatus" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-black focus:dark:ring-yellow-700 border border-yellow-700" />
                    </div>
                </div>
                <div className="flex w-full gap-4 mt-4">
                    <div className="col-span-full sm:col-span-3 w-full">

                        <div className="col-span-full sm:col-span-3 w-full">
                            <label className="text-black">Image</label>
                            <input type="text" defaultValue={image} placeholder="Enter image" name="image" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-black focus:dark:ring-yellow-700 border border-yellow-700" />
                        </div>


                    </div>


                </div>
                <div className="flex w-full gap-4 mt-4">
                    <div className="col-span-full sm:col-span-3 w-full">

                        <input type="submit" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-white focus:ring-yellow-700 border-gray-300 bg-yellow-700 font-extrabold" value="Update Craft" />
                    </div>


                </div>
            </form>
        </div>
    );
};

export default CraftUpdate;