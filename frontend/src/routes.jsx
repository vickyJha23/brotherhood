import { createBrowserRouter } from "react-router-dom";


import Dashboard from "./layout/Dashboard"; 
import Register from "./pages/Register";


const router = createBrowserRouter([
     {
        path: '/',
        element: <Dashboard />,
        children: [
              {
                    path: "/register",
                    element: <Register />
              }
        ]
     }
]);


export default router