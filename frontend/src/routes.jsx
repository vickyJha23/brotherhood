import { createBrowserRouter } from "react-router-dom";


import Dashboard from "./layout/Dashboard";
import AuthLayout from "./layout/AuthLayout";


import Register from "./pages/Register";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
     {
        path: '/',
        element: <Dashboard />,
        errorElement: <ErrorPage /> 
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
            }
        ]
     }
]);


export default router