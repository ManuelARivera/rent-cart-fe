import {
    createBrowserRouter,
} from "react-router-dom";
import { MainLayout } from "./layouts/main-layout";
import { Home } from "./views/home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home name={"Home Page"} />
            },
            {
                path: "about",
                element: <h1> Hla </h1>,
            },
            {
                path: "our_fleet",
                element: <h1> Hla </h1>,
            },
            {
                path: "contact",
                element: <h1> Hla </h1>,
            },
        ]
    },
]);