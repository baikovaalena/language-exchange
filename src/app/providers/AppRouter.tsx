import { HomePage } from '@pages/home';
import { LandingPage } from '@pages/landing';
import { ROUTES } from '@shared/config/routes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <LandingPage />,
  },
  {
    path: ROUTES.app,
    element: <HomePage />,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
