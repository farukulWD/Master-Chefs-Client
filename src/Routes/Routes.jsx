import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import ChefDetails from "../Pages/ChefDetails";
import ChefLayout from "../Layout/ChefLayout";
import PrivetRoute from "./PrivetRoute";
import ErrorPage from "../Pages/ErrorPage";

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
        element:<ChefLayout></ChefLayout>,
        children:[
            {
                path:":id",
                element:<PrivetRoute><ChefDetails></ChefDetails></PrivetRoute>,
                loader:({params})=>fetch(`https://master-chefs-server-farukulwd.vercel.app/chefs/${params.id}`)
            }
        ]
    }
])

export default router;