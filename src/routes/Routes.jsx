import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../layOuts/MainLayout";
import Home from "../page/Home/Home";
import LogIn from "../page/LogIn";
import SignUp from "../page/SignUp";
import Error from "../page/Error";
import AllArtCraftItems from "../page/AllArtCraftItems";
import CraftDetails from "../shared/CraftDetails";
import AddCraftItem from "../page/AddCraftItem";
import MyArtCraftList from "../page/MyArtCraftList";
import CraftUpdate from "../page/CraftUpdate";
import PrivateRoute from "./PrivetRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error />,
        children: [

            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://jute-wooden-crafts-store-server.vercel.app/crafts')
            },

            {
                path: '/craftDetails/:id',
                element: <CraftDetails />,
                loader: ({ params }) => fetch(`
                https://jute-wooden-crafts-store-server.vercel.app/crafts/${params.id}`
                )
            },

            {
                path: '/addCraftItem',
                element: <PrivateRoute><AddCraftItem /></PrivateRoute>
            },

            {
                path: '/allArtCraftItems',
                element: <AllArtCraftItems />,
                loader: () => fetch('https://jute-wooden-crafts-store-server.vercel.app/crafts')
            },

            {
                path: '/myArtCraftList',
                element: <PrivateRoute><MyArtCraftList /></PrivateRoute>
            },
            {
                path: '/craftUpdate/:id',
                element: <CraftUpdate/>,
                loader: ({ params }) => fetch(`https://jute-wooden-crafts-store-server.vercel.app/crafts/${params.id}`)
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