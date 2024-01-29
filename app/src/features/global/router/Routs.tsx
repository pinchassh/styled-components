import DayTime from "../../calander/components/DayTime";
import Calandry from "../../calander/pages/Calandry";
import Login from "../../users/pages/Login";
import Register from "../../users/pages/Register";
import Main from "../layout/main/Main";
import ErrorPage from "./ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function Routs() {
    const router = createBrowserRouter([
        {
            path: "/calandry",
            element: <Main />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "",
                    element: <Calandry />,
                    errorElement: <ErrorPage />,
                },
                {
                    path: "register",
                    element: <Register />,
                    errorElement: <ErrorPage />,
                },
                {
                    path: "login",
                    element: <Login />,
                    errorElement: <ErrorPage />,
                },
                {
                    path: "/Halachatimes/:strDate",
                    element: <DayTime />,
                    errorElement: <ErrorPage />,
                },
                // {
                //     path: "category/:name",
                //     element: <CategoryByName />,
                //     errorElement: <ErrorPage />,
                // },
                // {
                //     path: "banners",
                //     element: <AllBanners />,
                //     errorElement: <ErrorPage />,
                // },
                // {
                //     path: "banners/products",
                //     element: <AllProducts />,
                //     errorElement: <ErrorPage />,
                // },
                // {
                //     path: 'banners/ProductPage/:productId',
                //     element: <ProductPage />,
                //     errorElement: <ErrorPage />,
                // },
                // {
                //     path: "banners/:productID",
                //     element: <BannerByProducdID />,
                //     errorElement: <ErrorPage />,
                // },
                // {
                //     path: "banners/category/:name",
                //     element: <BannerByCategoryByName />,
                //     errorElement: <ErrorPage />,
                // },
                // {
                //     path: `banners/user/:userID`,
                //     element: <BannerByUserID />,
                //     errorElement: <ErrorPage />,
                // },
                // {
                //     path: `banners/user/profile`,
                //     element: <ProfileUser />,
                //     errorElement: <ErrorPage />,
                // },
                // {
                //     path: `banners/user/edit`,
                //     element: <EditUserForm />,
                //     errorElement: <ErrorPage />,
                // },
                // {
                //     path: `banners/user/users`,
                //     element: <AllUsers />,
                //     errorElement: <ErrorPage />,
                // },
            ],
        }]);
    return <RouterProvider router={router} />;
}

