import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import ChefDetails from "../Pages/ChefDetails";
import ChefLayout from "../Layout/ChefLayout";
import PrivetRoute from "./PrivetRoute";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Layout/Login/Login";
import LoginLayout from "../Layout/Login/LoginLayout";
import Register from "../Layout/Login/Register";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        errorElement: <ErrorPage />,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=> fetch("https://master-chefs-server-farukulwd.vercel.app/chefs")
            }
        ]
    },
    {
        path:'chef',
        element:<PrivetRoute><ChefLayout></ChefLayout></PrivetRoute>,
        children:[
            {
                path:":id",
                element:<ChefDetails></ChefDetails>,
                loader:({params})=>fetch(`https://master-chefs-server-farukulwd.vercel.app/chefs/${params.id}`)
            }
        ]
    },
    {
        path:"user",
        element:<LoginLayout></LoginLayout>,
        children:[
            {
                path:"login",
                element:<Login></Login>
            },
            {
                path:"register",
                element:<Register></Register>
            }
        ]
    }
])

export default router;