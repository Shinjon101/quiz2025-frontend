import { useNavigate } from "react-router-dom";
import SchoolsTable from "../../features/schools/SchoolsTable";
import { mockSchools } from "../../tests/mocks/mockSchools";

export function SchoolTablePage() {
  const navigate = useNavigate();
  const userRole = "admin";

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-end align-items-center mb-3">
        <button
          className="btn btn-secondary"
          onClick={() => navigate("/schools/add")}
        >
          Add School <i className="bi bi-plus-circle"></i>
        </button>
      </div>

      <SchoolsTable schools={mockSchools} userRole={userRole} />
    </div>
  );
}
