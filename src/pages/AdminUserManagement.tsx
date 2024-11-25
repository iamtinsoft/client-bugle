import Users from "../features/users/Users";
import AdminDashboardLayout from "../layouts/AdminDashboardLayout";

const AdminUserManagement = () => {
  return (
    <AdminDashboardLayout>
      <Users />
    </AdminDashboardLayout>
  );
};

export default AdminUserManagement;
