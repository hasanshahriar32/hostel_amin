import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bazar from "../Components/Main/Bazar/Bazar";
import Home from "../Components/Main/Home/Home";
import Login from "../Components/Main/Login/Login";
import Main from "../Components/Main/Main";
import Meal from "../Components/Main/MealManage/MealManage";
import Register from "../Components/Main/Register/Register";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/meal", element: <Meal></Meal> },
        { path: "/bazar", element: <Bazar></Bazar> },
        { path: "/login", element: <Login></Login> },
        { path: "/register", element: <Register></Register> },

        { path: "/home", element: <Home></Home> },
        { path: "/about", element: <>About Us</> },
      ],
    },
    // { path: "/home", element: <div>Home Page</div> },
  ]);
  return (
    <div>
      {" "}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default Routes;
