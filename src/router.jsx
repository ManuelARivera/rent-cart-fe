import {
    createBrowserRouter,
} from "react-router-dom";
import { MainLayout } from "./layouts/main-layout";
import { Home } from "./views/home";
import { About_us } from "./views/about_us";
import { Contact } from "./views/contact";

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
                element: <h1> Hla </h1>,
            },
            {
                path: "contact",
                element: <Contact name={"Contact Page"} />
            },
        ]
    },
]);