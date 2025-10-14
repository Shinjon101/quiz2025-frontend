import { useState } from "react";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import SchoolsTable from "./features/schools/SchoolsTable";
import { mockSchools } from "./tests/mocks/mockSchools";
import AddSchoolPage from "./features/schools/forms/AddSchoolForm";
import AddSchoolForm from "./features/schools/forms/AddSchoolForm";
import BulkUpdatePage from "./features/schools/BulkUpdate";
import EditSchoolForm from "./features/schools/forms/EditSchoolForm";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <Header onToggleSidebar={() => setSidebarOpen((prev) => !prev)} />

      <div className="container-fluid">
        <div className="row">
          <Sidebar show={sidebarOpen} onHide={() => setSidebarOpen(false)} />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 pt-4 mt-sm-3">
            {/* <BulkUpdatePage /> */}
            {/*    <EditSchoolForm /> */}
            <SchoolsTable schools={mockSchools} userRole="admin" />
          </main>
        </div>
      </div>
    </div>
  );
}
