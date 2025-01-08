import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import UpdateProfile from "../pages/UpdateProfile";
import Home from "../pages/Home";
import UserProfile from "../pages/UserProfile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import AdventureDetails from "../pages/AdventureDetails";
import ErrorPage from "../pages/ErrorPage";
import ForgetPassword from "../pages/ForgetPassword";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: async () => {
                    const ecoAdventuresRes = await fetch("/eco-adventures.json");
                    const ecoAdventures = await ecoAdventuresRes.json();

                    const travelerStoriesRes = await fetch("/traveler-stories.json");
                    const travelerStories = await travelerStoriesRes.json();

                    const upcomingEventsRes = await fetch("/upcoming-events.json");
                    const upcomingEvents = await upcomingEventsRes.json();

                    return { ecoAdventures, travelerStories, upcomingEvents }
                },
            },
            {
                path: "/updateprofile",
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            },
            {
                path: "/userprofile",
                element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/adventuredetails/:adId",
                element: <PrivateRoute><AdventureDetails></AdventureDetails></PrivateRoute>,
                loader: (params) => fetch("/eco-adventures.json"),
            },
        ]
    },
    {
        path: "/forgetpassword",
        element: <ForgetPassword></ForgetPassword>,
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>,
    },
]);

export default router;