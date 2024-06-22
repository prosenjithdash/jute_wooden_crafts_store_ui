import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../layOuts/MainLayout";
import Home from "../page/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element:<Home/>
            }
        ]
    },
]);

export default router;