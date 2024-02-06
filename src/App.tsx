import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import { Home } from "./Pages/Home/Home"
import { Users } from "./Pages/users/Users";
import { Products } from "./Pages/products/Products";
import { Navbar } from "./components/navbar/Navbar";
import { Menu } from "./components/menu/menu";
import { Footer } from "./components/footer/footer";
import { Login } from "./Pages/login/Login";
import './styles/global.scss'
import  User  from "./Pages/user/User";
import  Product  from "./Pages/product/Product";
import { QueryClient, QueryClientProvider } from 'react-query';
import Orders from "./Pages/Orders/Orders";
import Elements from "./Pages/Elements/Elements";
import Posts from "./Pages/Posts/posts";

//const queryClient= new QueryClient();

function App() {
const Layout =() =>{
  return(
    <div className="main"> 
    <Navbar />
    <div className="container">
      <div className="menuContainer"><Menu /></div>
      <div className="contentContainer">
        <QueryClientProvider client={new QueryClient}>
        <Outlet />
        </QueryClientProvider>
        </div>
    </div>
    <Footer />
    </div>
  )
}

  const router=createBrowserRouter([
    {
      path: "/",
      element: (<Layout />),
      children:[
        {
          path: "/",
          element: (<Home />),
        },
        {
          path: "users",
          element: (<Users />),
        },
        {
          path: "/products",
          element: (<Products />),
        },
        {
          path: "/users/:id",
          element: (<User />),
        },
        {
          path: "/products/:id",
          element: (<Product />),
        },
        {
          path: "products",
          element: (<Products />),
        },
        {
          path: "orders",
          element: (<Orders />),
        },
        {
          path: "posts",
          element: (<Posts />),
        },
        {
          path: "elements",
          element: (<Elements />),
        },
      ]
    },
    {
      path:'/login',
      element:<Login />
    },
  ]);


  return (
    <RouterProvider router={router} />
  )
}

export default App
