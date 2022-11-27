import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/Dashboard/DashboardLayout";
import Main from "../Layout/Main/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Categories from "../Pages/Categories/Categories";
import Products from "../Pages/Categories/Products/Products";
import AddProduct from "../Pages/Dashboard/AddProducts/AddProduct";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import Welcome from "../Pages/Dashboard/Welcome/Welcome";
import HomePage from "../Pages/Home/HomePage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Private/PrivateRoute";
import SellerRoute from "../Private/SellerRoute";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/dashboard',
                element: <Welcome />
            },
            {
                path: '/dashboard/my-order',
                element: <PrivateRoute><MyOrders /></PrivateRoute>
            },
            {
                path: '/dashboard/my-products',
                element: <SellerRoute><MyProducts /></SellerRoute>
            },
            {
                path: '/dashboard/add-product',
                element: <SellerRoute><AddProduct /></SellerRoute>
            }
        ]
    }
])