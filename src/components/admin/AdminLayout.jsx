import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminMain from "./AdminMain";
import BottomNavBar from "./BottomNavBar";

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
