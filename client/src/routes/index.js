import { lazy } from 'react';

const AppRoutes = [
  {
    path: '/',
    component: lazy(() => import('../pages/Welcome')),
    exact: true
  },
  {
    path: '/about',
    component: lazy(() => import('../pages/About')),
    exact: true
  },
  {
    path: '/kegiatan',
    component: lazy(() => import('../pages/Kegiatan')),
    exact: true
  },
  {
    path: '/auth',
    component: lazy(() => import('../pages/Auth/Auth.js')),
    exact: true
  }
];

export { AppRoutes };
