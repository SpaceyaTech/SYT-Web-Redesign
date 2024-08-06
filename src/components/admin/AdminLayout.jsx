import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import BottomNavBar from "./BottomNavBar";

function AdminLayout() {
  return (
    <div className="w-full overflow-hidden">
      <AdminHeader />
      <Outlet />
      <BottomNavBar />
    </div>
  );
}

export default AdminLayout;
