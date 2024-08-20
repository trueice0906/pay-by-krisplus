import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/layout.component";
import Home from "./routes/home/home.component";
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import { Suspense } from "react";
// import Navigation from './routes/navigation/navigation.component';

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
