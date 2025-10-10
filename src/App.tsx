import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SchoolsTable from "./pages/SchoolsTable";
import { mockSchools } from "./tests/mocks/mockSchools";
import AddSchoolPage from "./components/AddSchoolForm";
import AddSchoolForm from "./components/AddSchoolForm";
import BulkUpdatePage from "./pages/BulkUpdatePage";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <Header onToggleSidebar={() => setSidebarOpen((prev) => !prev)} />

      <div className="container-fluid">
        <div className="row">
          <Sidebar show={sidebarOpen} onHide={() => setSidebarOpen(false)} />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 pt-4 mt-sm-3">
            <BulkUpdatePage />
            {/*   <AddSchoolForm /> */}
            {/*  <SchoolsTable schools={mockSchools} userRole="admin" /> */}
          </main>
        </div>
      </div>
    </div>
  );
}
