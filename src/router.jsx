import { createBrowserRouter } from "react-router-dom"; 
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Inputinfo from "./pages/inputinfo/Inputinfo";
import InfoName from "./pages/InfoName/infoName";
import CoctailInfo from "./pages/CoctailInfo/CoctailInfo";

export const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "inputinfo/:letter",
                element: <Inputinfo/>,
            },
            {
                path: "infoName/:id",
                element: <InfoName/>,
            },
            {
                path: "coctailInfo/:id",
                element: <CoctailInfo/>,
            },
        ],
    },
]);
