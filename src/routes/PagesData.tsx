import AdminAuthPage from "../pages/AdminAuthPage";
import AdminDashboard from "../pages/AdminDashboard";
import AdminEventManagement from "../pages/AdminEventManagement";
import AdminGroupManagement from "../pages/AdminGroupManagement";
import AdminMessages from "../pages/AdminMessages";
import AdminPosts from "../pages/AdminPosts";
import AdminSettings from "../pages/AdminSettings";
import AdminUserManagement from "../pages/AdminUserManagement";
import { routerType } from "../types/router-type";
import AdminProtectedRoute from "./AdminProtectedRoute";

const PagesData: routerType[] = [
  {
    path: "/",
    element: <AdminAuthPage />,
  },
  {
    path: "/admin/dashboard",
    element: (
      <AdminProtectedRoute>
        <AdminDashboard />
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/admin/user-management",
    element: (
      <AdminProtectedRoute>
        <AdminUserManagement />
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/admin/group-management",
    element: (
      <AdminProtectedRoute>
        <AdminGroupManagement />
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/admin/events-management",
    element: (
      <AdminProtectedRoute>
        <AdminEventManagement />
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/admin/messages",
    element: (
      <AdminProtectedRoute>
        <AdminMessages />
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/admin/posts",
    element: (
      <AdminProtectedRoute>
        <AdminPosts />
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/admin/settings",
    element: (
      <AdminProtectedRoute>
        <AdminSettings />
      </AdminProtectedRoute>
    ),
  },
];

export default PagesData;
