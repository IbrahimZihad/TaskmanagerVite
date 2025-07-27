import Landing from "../pages/public/Landing";
import Help from "../pages/public/Help";
import PrivacyPolicy from "../pages/public/PrivacyPolicy";

import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";

import DashboardHome from "../pages/dashboard/DashboardHome";
import ScrumBoard from "../pages/dashboard/ScrumBoard";
import Backlog from "../pages/dashboard/Backlog";
import Summary from "../pages/dashboard/Summary";
import Team from "../pages/dashboard/Team";

import NotFound from "../pages/errors/NotFound";

import PublicLayout from "../components/layout/PublicLayout";
import PrivateLayout from "../components/layout/PrivateLayout";

import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useProject } from "../context/ProjectContext";

// Protect routes based on login
const PrivateRoute = ({ element }) => {
  const { user } = useAuth();
  return user ? element : <Navigate to="/login" />;
};

// Protect project-based routes
const ProjectProtectedRoute = ({ element }) => {
  const { user } = useAuth();
  const { selectedProject } = useProject();
  if (!user) return <Navigate to="/login" />;
  if (!selectedProject) return <Navigate to="/dashboard" />;
  return element;
};

// All routes
export const allRoutes = [
  // Public Routes
  {
    path: "/",
    layout: PublicLayout,
    element: Landing,
  },
  {
    path: "/help",
    layout: PublicLayout,
    element: Help,
  },
  {
    path: "/privacy-policy",
    layout: PublicLayout,
    element: PrivacyPolicy,
  },

  // Auth Routes
  {
    path: "/login",
    layout: PublicLayout,
    element: Login,
  },
  {
    path: "/signup",
    layout: PublicLayout,
    element: SignUp,
  },

  // Dashboard Home (project open/create)
  {
    path: "/dashboard",
    layout: PrivateLayout,
    element: <PrivateRoute element={<DashboardHome />} />,
  },

  // Project-dependent routes
  {
    path: "/scrumboard",
    layout: PrivateLayout,
    element: <ProjectProtectedRoute element={<ScrumBoard />} />,
  },
  {
    path: "/backlog",
    layout: PrivateLayout,
    element: <ProjectProtectedRoute element={<Backlog />} />,
  },
  {
    path: "/summary",
    layout: PrivateLayout,
    element: <ProjectProtectedRoute element={<Summary />} />,
  },
  {
    path: "/team",
    layout: PrivateLayout,
    element: <ProjectProtectedRoute element={<Team />} />,
  },

  // Fallback route
  {
    path: "*",
    layout: PublicLayout,
    element: NotFound,
  },
];

// Renders the layout and page together
export const renderRouteElement = (route) => {
  const Layout = route.layout || (({ children }) => <>{children}</>);
  const Element = route.element;
  return <Layout>{Element}</Layout>;
};
