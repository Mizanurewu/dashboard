import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";

const router =createBrowserRouter([
    {
        path:'/',
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
                path:'/',
                element:<Dashboard></Dashboard>
            }
        ]
    }
])
export default router;