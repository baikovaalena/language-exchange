import { HomePage } from '@pages/home';
import { LandingPage } from '@pages/landing';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/app',
    element: <HomePage />,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
