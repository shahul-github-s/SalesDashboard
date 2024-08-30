import React, { Suspense, Fragment, lazy } from 'react';
import { Routes, Navigate, Route } from 'react-router-dom';

// project import
import Loader from './components/Loader/Loader';
import AdminLayout from './layouts/AdminLayout';

import { BASE_URL } from './config/constant';

// ==============================|| ROUTES ||============================== //

const renderRoutes = (routes = []) => (
  <Suspense fallback={<Loader />}>
    <Routes>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Element = route.element;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            element={
              <Guard>
                <Layout>{route.routes ? renderRoutes(route.routes) : <Element props={true} />}</Layout>
              </Guard>
            }
          />
        );
      })}
    </Routes>
  </Suspense>
);

export const routes = [
  // {
  //   exact: 'true',
  //   path: '/auth/signup-1',
  //   element: lazy(() => import('./views/auth/signup/SignUp1'))
  // },
  // {
  //   exact: 'true',
  //   path: '/auth/signin-1',
  //   element: lazy(() => import('./views/auth/signin/SignIn1'))
  // },
  // {
  //   exact: 'true',
  //   path: '/auth/reset-password-1',
  //   element: lazy(() => import('./views/auth/reset-password/ResetPassword1'))
  // },
  {
    path: '*',
    layout: AdminLayout,
    routes: [
      {
        exact: 'true',
        path: '/app/dashboard/CustomerDetails',
        element: lazy(() => import('./views/dashboard/CustomerDetails'))
      },
      {
        exact: 'true',
        path: '/app/dashboard/analytics',
        element: lazy(() => import('./views/dashboard'))
      },
      {
        exact: 'true',
        path: '/app/dashboard/TravelAgency',
        element: lazy(() => import('./views/dashboard/TravelAgency'))
      },
      {
        exact: 'true',
        path: '/app/dashboard/DailyProduction',
        element: lazy(() => import('./views/dashboard/DailyProduction'))
      },
      {
        exact: 'true',
        path: '/app/dashboard/MontlyReport',
        element: lazy(() => import('./views/dashboard/MonthlyReport'))
      },
      {
        path: '*',
        exact: 'true',
        element: () => <Navigate to={BASE_URL} />
      }
    ]
  }
];

export default renderRoutes;
