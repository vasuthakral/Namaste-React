import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";

import About from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

import RestrauntMenu from "./components/RestrauntMenu";

import Error from "./components/Error";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />{" "}
      {/* I want my header to be constant and change outlet according to route */}
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restraunt/:resId",
        element: <RestrauntMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
