import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const MainLayout = () => {
    return (
        <div>
            <div>
                <Navbar />
                <Outlet />
           </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;