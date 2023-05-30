import SiteRoot from "../Site/SiteRoot/SiteRoot";
import Add from "../Site/pages/Add/Add";
import Home from "../Site/pages/Home/Home";

export const ROUTES = [{
    path:'/',
    element:<SiteRoot/>,
    children:[{
        path:"",
        element:<Home/>
    },
    {
        path:"add",
        element:<Add/>
    }
]
}]