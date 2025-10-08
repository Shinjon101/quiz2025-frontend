import SchoolsTable from "./pages/SchoolsTable";
import { mockSchools } from "./tests/mocks/mockSchools";

function App() {
  return (
    <div>
      <SchoolsTable schools={mockSchools} userRole="admin" />
    </div>
  );
}

export default App;
