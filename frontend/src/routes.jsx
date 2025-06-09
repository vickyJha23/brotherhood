import { createBrowserRouter } from "react-router-dom";


import Dashboard from "./layout/Dashboard";
import AuthLayout from "./layout/AuthLayout";


import Register from "./pages/Register";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyOtp from "./pages/VerifyOtp";
import ResetPassword from "./pages/ResetPassword";
import AdminLayout from "./layout/AdminLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";

const router = createBrowserRouter([
     {
        path: '/',
        element: <Dashboard />,
        errorElement: <ErrorPage />,
        children: [{
            path: '/',
            element: <Home />
        }, {
             path: "/products",
             element: <Products /> 
        }] 
     },
     {
        path: "/auth",
        element: <AuthLayout />,
        children:[
            {
                  path: "/auth/register",
                  element: <Register />,
            },
            {
                  path: "/auth/login",
                  element: <Login />,
            },
            {
                  path: "/auth/forgot-password",
                  element: <ForgotPassword />
            }, 
            {
                 path: "/auth/verify-otp",
                 element: <VerifyOtp />
            }, 
            {
                path: "/auth/reset-password",
                element: <ResetPassword />
            }
        ]
     },
     {
        path: "/admin",
        element: <AdminLayout />
     }
]);


export default router