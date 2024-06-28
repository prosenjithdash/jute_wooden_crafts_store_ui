import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../layOuts/MainLayout";
import Home from "../page/Home/Home";
import LogIn from "../page/LogIn";
import SignUp from "../page/SignUp";
import Error from "../page/Error";
import AllArtCraftItems from "../page/AllArtCraftItems";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement:<Error/>,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('craftsData.json')
            },
            
            // {
            //     path: '/craftDetails/:id',
            //     element: <CraftDetails/>,
            //     loader: ({ params }) => fetch(`
            //     https://painting-drawing-server-chi.vercel.app/painting/${params.id}`
            //     )
            // },
            {
                path: '/allArtCraftItems',
                element: <AllArtCraftItems />,
                loader: () => fetch('craftsData.json')
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