import { createBrowserRouter } from "react-router-dom";
import Login from "@/page/Login";
import Detail from "@/page/Detail";
import Layout from "@/page/Layout";
import Board from "@/page/Board";
import About from "@/page/About";
import NotFound from "@/page/NotFound";
import AuthRoute from "@/components/AuthRoute";
export const routes = [
    {
        path: "/",
        element: <AuthRoute><Layout /></AuthRoute>,
        children: [
            {
                index: 'board',
                element: <Board />
            },
            {
                path: 'about',
                element: <About />
            },
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/detail/:id/:name",
        element: <Detail />
    },
    {
        path: "*",
        element: <NotFound />
    }
]
const router = createBrowserRouter(routes)

export default router