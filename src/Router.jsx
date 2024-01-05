import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "App";


function Router(){
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App/>,

        },
        {
            path: "err",

        },
        {
            path: "/dev",

        },
        {
    
        },
    ])
    return <RouterProvider router={router}/>
}

export default Router