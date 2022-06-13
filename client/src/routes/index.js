import { lazy } from 'react';

const AppRoutes = [
  {
    path: '/',
    component: lazy(() => import('../pages/Welcome')),
    exact: true
  },
  {
    path: '/kegiatan',
    component: lazy(() => import('../pages/Kegiatan')),
    exact: true
  },
  {
    path: '/kegiatan/:id',
    component: lazy(() => import('../pages/KegiatanDetails')),
    exact: true
  },
  {
    path: '/auth',
    component: lazy(() => import('../pages/Auth/Auth.js')),
    exact: true
  },
  {
    path: '/lengkapi-data',
    component: lazy(() => import('../pages/LengkapiData')),
    exact: true
  },
  {
    path: '/data-warga',
    component: lazy(() => import('../pages/DataWarga')),
    exact: true
  },
  {
    path: '/landing-page-cms',
    component: lazy(() => import('../pages/LandingPageCMS')),
    exact: true
  },
  {
    path: '/user',
    component: lazy(() => import('../pages/UserProfilePage')),
    exact: true
  }
];

export { AppRoutes };
