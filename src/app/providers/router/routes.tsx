import { HomePage } from '@pages/home';
import { LandingPage } from '@pages/landing';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/app',
    element: <HomePage />,
  },
]);
