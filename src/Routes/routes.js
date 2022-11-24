import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Blogs from "../Pages/Blogs/Blogs";
import HomePage from "../Pages/Home/HomePage";
import Register from "../Pages/Register/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/sign-up',
                element: <Register></Register>
            },
        ]
    },
])