import Landing from "../pages/public/Landing";
import Help from "../pages/public/Help";
import PrivacyPolicy from "../pages/public/PrivacyPolicy";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";

import ScrumBoard from "../pages/dashboard/ScrumBoard";
import Backlog from "../pages/dashboard/Backlog";
import Summary from "../pages/dashboard/Summary";
import Team from "../pages/dashboard/Team";
import Profile from "../user/Profile";

// Optional admin pages
import AdminDashboard from "../admin/Dashboard";

import PrivateRoute from "../PrivateRoute";
import PublicLayout from "../components/layout/PublicLayout";
import PrivateLayout from "../components/layout/PrivateLayout";

// Route definitions
export const allRoutes = [
  // Public routes (no auth)
  {
    path: "/",
    element: Landing,
    isPrivate: false,
    layout: PublicLayout
  },
  {
    path: "/help",
    element: Help,
    isPrivate: false,
    layout: PublicLayout
  },
  {
    path: "/privacy-policy",
    element: PrivacyPolicy,
    isPrivate: false,
    layout: PublicLayout
  },
  {
    path: "/login",
    element: Login,
    isPrivate: false,
    layout: PublicLayout
  },
  {
    path: "/signup",
    element: SignUp,
    isPrivate: false,
    layout: PublicLayout
  },

  // Authenticated User Routes
  {
    path: "/dashboard",
    element: ScrumBoard,
    isPrivate: true,
    role: "user",
    layout: PrivateLayout
  },
  {
    path: "/backlog",
    element: Backlog,
    isPrivate: true,
    role: "user",
    layout: PrivateLayout
  },
  {
    path: "/summary",
    element: Summary,
    isPrivate: true,
    role: "user",
    layout: PrivateLayout
  },
  {
    path: "/team",
    element: Team,
    isPrivate: true,
    role: "user",
    layout: PrivateLayout
  },
  {
    path: "/profile",
    element: Profile,
    isPrivate: true,
    role: "user",
    layout: PrivateLayout
  },

  // Admin Routes (optional)
  {
    path: "/admin/dashboard",
    element: AdminDashboard,
    isPrivate: true,
    role: "admin",
    layout: PrivateLayout
  }
];



export const renderRouteElement = (route) => {
  const Component = route.element;
  const Layout = route.layout || (({ children }) => <>{children}</>);

  if (route.isPrivate) {
    return (
      <PrivateRoute role={route.role}>
        <Layout>
          <Component />
        </Layout>
      </PrivateRoute>
    );
  }

  return (
    <Layout>
      <Component />
    </Layout>
  );
};
