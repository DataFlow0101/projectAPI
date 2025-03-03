import { createBrowserRouter } from "react-router-dom"; 
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Inputinfo from "./pages/inputinfo/Inputinfo";
import InfoName from "./pages/InfoName/infoName";

export const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            // {
            //     path: "about",
            //     element: <About />,
            // },
            {
                path: "inputinfo/:letter",
                element: <Inputinfo/>,
            },
            {
                path: "InfoName/:id",
                element: <InfoName/>,
            },
        ],
    },
]);
