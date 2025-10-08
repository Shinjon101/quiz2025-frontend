import Sidebar from "./components/Sidebar";
import SchoolsTable from "./pages/SchoolsTable";
import { mockSchools } from "./tests/mocks/mockSchools";
export default function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />

        <main className="col-md-9 col-lg-10 ms-sm-auto px-md-4">
          <SchoolsTable schools={mockSchools} userRole="admin" />
        </main>
      </div>
    </div>
  );
}
