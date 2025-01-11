import About from "../pages/About";
import Error from "../pages/Error";
import PostPage from "../pages/PostPage";
import Posts from "../pages/Posts";

export const routes = [
    { path: "/about", element: <About />, exact: true },
    { path: "/posts", element: <Posts />, exact: true },
    { path: "/posts/:id", element: <PostPage />, exact: true },
    { path: "/", element: <Posts />, exact: true },
    { path: "*", element: <Error />, exact: true },
];