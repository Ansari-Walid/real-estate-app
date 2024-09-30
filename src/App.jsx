import Homepage from "./pages/homepage/Homepage.jsx";
import Layout from "./pages/layout/Layout.jsx";
import ListPage from "./pages/listPage/listPage.jsx";
import ProfilePage from "./pages/profilePage/ProfilePage.jsx";
import Singlepage from "./pages/singlePage/SinglePage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Homepage /> },
        { path: "/list", element: <ListPage /> },
        { path: "/:id", element: <Singlepage /> },
        { path: "/profile", element: <ProfilePage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
