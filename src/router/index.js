import { createBrowserRouter } from "react-router-dom";
import Login from "@/page/Layout";
import Detail from "@/page/Detail";
import Layout from "@/page/Layout";
import Board from "@/page/Board";
import About from "@/page/About";
import NotFound from "@/page/NotFound";
export const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
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