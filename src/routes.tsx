// routes.tsx
import { Suspense, lazy } from 'react';
import LoadingScreen from './app/components/LoadingScreen';
import type { RouteObject } from 'react-router-dom';

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) => (
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
);

// Authentication
const Login = Loadable(lazy(() => import("./app/components/authentication/Login")));
const Register = Loadable(lazy(() => import("./app/components/authentication/Register")));

// Home page
const NavBar = Loadable(lazy(() => import('./app/components/NavBar')));
const MainSection = Loadable(lazy(() => import('./app/components/MainSection')));
const ExamCardList = Loadable(lazy(() => import("./app/components/ExamCardList")))
const Exam = Loadable(lazy(() => import("./app/components/Exam")))

const routes: RouteObject[] = [
  {
    path: 'authentication',
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
  {
    path: '/',
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <MainSection />,
      },
      {
        path: "tentit/:examId",
        element: <Exam />
      },
      {
        path: "tentit",
        element: <ExamCardList />
      },
    ],
  },
];

export default routes;
