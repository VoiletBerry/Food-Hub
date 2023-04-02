import React, { lazy, Suspense, useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import store from "./ReduxStore/store";
import ResturantDetails from "./components/ResturantDetails";
import Cart from "./components/Cart";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { AuthContextProvider } from "./Context/AuthContext";

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  return (
    <>
      <Provider store={store}>
        <AuthContextProvider>
          <Header />
          <Outlet />
          <Footer />
        </AuthContextProvider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resturant/:id",
        element: <ResturantDetails />,
      },
      { path: "/cart", element: <Cart /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
