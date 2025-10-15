import { useState } from "react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="container-fluid">
      <Header onToggleSidebar={() => setSidebarOpen(true)} />
      <div className="row">
        <Sidebar show={sidebarOpen} onHide={() => setSidebarOpen(false)} />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 pt-4 mt-sm-3">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
