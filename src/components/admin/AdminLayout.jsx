import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import BottomNavBar from "./BottomNavBar";
import AdminMain from "./AdminMain";
function AdminLayout() {
  return (
    <div className="w-full overflow-hidden">
      <AdminHeader />
      <Outlet />
      <AdminMain />
      <BottomNavBar />
    </div>
  );
}

export default AdminLayout;
