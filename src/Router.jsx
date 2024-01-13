import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "App";
import { ErrorPage } from "./views";

function Router(){
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App/>,
            errorElement: <ErrorPage/>,
        },
        {
            path: "err",
            element: <ErrorPage/>,
        },
        {
            path: "/dev",
            element: <ErrorPage/>,
        },
        {
    
        },
    ])
    return <RouterProvider router={router}/>
}

export default Router