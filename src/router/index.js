import About from "../pages/About";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PostPage from "../pages/PostPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
    { path: "/about", element: <About />, exact: true },
    { path: "/posts", element: <Posts />, exact: true },
    { path: "/posts/:id", element: <PostPage />, exact: true },
    // default pages
    { path: "/", element: <Home />, exact: true },
    // { path: "*", element: <Error />, exact: true },
];

export const publicRoutes = [
    { path: "/login", element: <Login />, exact: true },
    // default pages
    { path: "*", element: <Login />, exact: true },
];