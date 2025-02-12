import { createBrowserRouter } from "react-router-dom";


import Dashboard from "./layout/Dashboard"; 
import Register from "./pages/Register";
import Login from "./pages/Login";


const router = createBrowserRouter([
     {
        path: '/',
        element: <Dashboard />,
        children: [
              {
                    path: "/register",
                    element: <Register />
              },
            {
                    path: "/login",
                    element: <Login /> 
            }
        ]
     }
]);


export default router