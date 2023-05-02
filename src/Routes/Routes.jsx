import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import ChefDetails from "../Pages/ChefDetails";
import ChefLayout from "../Layout/ChefLayout";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
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
                element:<ChefDetails></ChefDetails>,
                loader:({params})=>fetch(`https://master-chefs-server-q15j2b6rh-farukulwd.vercel.app/chefs/${params.id}`)
            }
        ]
    }
])

export default router;