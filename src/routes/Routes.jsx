import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../layOuts/MainLayout";
import Home from "../page/Home/Home";
import LogIn from "../page/LogIn";
import SignUp from "../page/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element:<Home/>
            },
            {
                path: '/logIn',
                element: <LogIn />
            },
            {
                path: '/signUp',
                element: <SignUp />
            }
        ]
    },
]);

export default router;