import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const MainLayout = () => {
    return (
        <div>
            <div className="max-w-[1280px] mx-auto">
                <Navbar />
                <Outlet />
           </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;