import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  useLocation,
} from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import SingleBlogPost from "./pages/singleblogpost";
import FeaturedArticlesPage from "./pages/FeaturedArticalesPage";
import TrendingArticlesPage from "./pages/TrendingArticles";
import RecentPostsPage from "./pages/RecentPosts";
import BlogsPage from "./pages/Blogs";
import NotFoundPage from "./pages/NotFoundPage";


function App() {
  const queryClient = new QueryClient();

  const Layout = () => {
    const location = useLocation();

    const isLoginOrRegister =
      location.pathname.includes("login") ||
      location.pathname.includes("register");

    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
          {!isLoginOrRegister && <Navbar />}
          <Outlet />
          {!isLoginOrRegister && <Footer />}
        </QueryClientProvider>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/featured", element: <FeaturedArticlesPage /> },
        { path: "/treading", element: <TrendingArticlesPage /> },
        { path: "/recent", element: <RecentPostsPage /> },
        { path: "blog/:id", element: <SingleBlogPost /> },
        { path: "/blogs", element: <BlogsPage /> },
        { path: "*", element: <NotFoundPage /> },
        { path: "404", element: <NotFoundPage /> },
        
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
