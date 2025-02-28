import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/layout.component";
import Home from "./routes/home/home.component";
import Shop from './routes/shop/shop.component';
import SignIn from './routes/authentication/authentication.component';
import Checkout from './routes/checkout/checkout.component';
import { Suspense } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'shop',
        element:<Shop />
      },
      {
        path: 'sign-in',
        element: <SignIn />
      },
      {
        path: 'checkout',
        element: <Checkout />
      }
    ],
  },
]);

const App = () => {
  return (
    <Suspense>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  );
};

export default App;
