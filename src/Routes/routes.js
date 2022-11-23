import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Blogs from "../Pages/Blogs/Blogs";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
        ]
    },
])