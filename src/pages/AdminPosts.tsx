import Posts from "../features/posts/Posts";
import AdminDashboardLayout from "../layouts/AdminDashboardLayout";

const AdminPosts = () => {
  return (
    <AdminDashboardLayout>
      <Posts />
    </AdminDashboardLayout>
  );
};

export default AdminPosts;
