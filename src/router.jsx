import {
    createBrowserRouter,
} from "react-router-dom";
import { MainLayout } from "./layouts/main-layout";
import { Home } from "./views/home";
import { About_us } from "./views/about_us";
import { Contact } from "./views/contact";
import { Our_fleet } from "./views/our_fleet/our_fleet";
import { Contract } from "./views/contract/contract";

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
                path: "about_us",
                element: <About_us name={"About Us Page"} />
            },
            {
                path: "our_fleet",
                element: <Our_fleet name={"Our Fleet Page"} />
            },
            {
                path: "contact",
                element: <Contact name={"Contact Page"} />
            },
            {
                path: "contract",
                element: <Contract name={"Contract Page"} />
            },
        ]
    },
]);