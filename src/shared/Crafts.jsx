import { useLoaderData } from "react-router-dom";
import CraftCard from "./CraftCard";

const Crafts = () => {
    const allCraft = useLoaderData();
    // console.log('All crafts:',allCraft)
    return (
        <div className="max-w-[1280px] mx-auto">
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px]">
                {
                    allCraft.map(craft => <CraftCard key={craft._id} craft={craft}></CraftCard>)
                }
            </div>
        </div>
    );
};

export default Crafts;