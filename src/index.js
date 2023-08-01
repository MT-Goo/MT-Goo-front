import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import { ErrorPage, Main, SignIn, SignUp, LodgingDetail, Recreation, Room } from './pages/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Main /> },
      { path: '/login', element: <SignIn /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/room', element: <Room /> },
      { path: '/detail/:lodingId', element: <LodgingDetail /> },
      { path: '/recreation', element: <Recreation /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
