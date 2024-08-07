import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import MyArtCraftCard from "../components/MyArtCraftCard";

const MyArtCraftList = () => {

    const { user } = useAuth() || {}
    console.log('User email :', user.email)
    
    const [item, setItem ] = useState([]);
    console.log('Current item:', item)
    
    const [control, setControl] = useState(false);



    useEffect(() => {
        fetch(`https://jute-wooden-crafts-store-server.vercel.app/myArtCrafts/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log('My added craft data:', data)
                setItem(data)
        })
    },[user, control])
    return (
        // <div className="overflow-x-auto max-w-[1280px] mx-auto">
        //     <table className="table">
        //         <thead>
        //             <tr>
        //                 <th>Image</th>
        //                 <th>Item Name</th>
        //                 <th>Rating</th>
        //                 <th>Price</th>
        //                 <th>Price</th>
        //                 <th></th>

        //             </tr>
        //         </thead>
        //         <tbody>
        //             <tr>
                   
        //                 <td>
        //                     <div className="flex items-center gap-3">
        //                         <div className="avatar">
        //                             <div className="mask mask-squircle h-12 w-12">
        //                                 <img
        //                                     src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
        //                                     alt="Avatar Tailwind CSS Component" />
        //                             </div>
        //                         </div>
        //                         <div>
        //                             <div className="font-bold">Hart Hagerty</div>
        //                             <div className="text-sm opacity-50">United States</div>
        //                         </div>
        //                     </div>
        //                 </td>
        //                 <td>
        //                     Zemlak, Daniel and Leannon
        //                     <br />
        //                     <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        //                 </td>
        //                 <td>Purple</td>
        //                 <th>
        //                     <button className="btn btn-ghost btn-xs">details</button>
        //                 </th>
        //             </tr>
                   
                    
        //         </tbody>
               
        //     </table>
        // </div>
       
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] max-w-[1280px] mx-auto my-[30px]">
            {
                item?.map(craft => <MyArtCraftCard key={craft._id} craft={craft} control={control} setControl={setControl}></MyArtCraftCard>)
            }
        </div>

    );
};

export default MyArtCraftList;