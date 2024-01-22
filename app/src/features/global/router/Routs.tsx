import Calandry from "../components/Calandry";
import ErrorPage from "./ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


export default function Routs() {
    const router = createBrowserRouter([
        {
            path: "/banner",
            element: <Calandry />,
            errorElement: <ErrorPage />,
            children: [
            ],
        }]);
    return <RouterProvider router={router} />;
}
