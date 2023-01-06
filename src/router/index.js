import Posts from "../pages/Posts";
import About from "../pages/About";
import PostIdPage from "../components/PostIdPage";
import Login from "../pages/Login";

export const PRIVATE_ROUTES = [
  {path: '/about', component: <About/>},
  {path: '/posts', component: <Posts/>},
  {path: '/posts/:id', component: <PostIdPage/>},
];

export const PUBLIC_ROUTES = [
  {path: '/login', component: <Login/>},
];
