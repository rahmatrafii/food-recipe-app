import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/recipes/:id",
        element: <RecipeDetail />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="bg-black">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
