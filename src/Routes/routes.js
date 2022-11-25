import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Categories from "../Pages/Categories/Categories";
import Products from "../Pages/Categories/Products/Products";
import HomePage from "../Pages/Home/HomePage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Private/PrivateRoute";

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
                path: '/brands',
                element: <Categories />
            },
            {
                path: '/brand/:id',
                loader: ({ params }) => fetch(`${process.env.REACT_APP_server}/category/${params.id}`),
                element: <PrivateRoute><Products /></PrivateRoute>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/log-in',
                element: <Login></Login>
            },
            {
                path: '/sign-up',
                element: <Register></Register>
            },
        ]
    },
])