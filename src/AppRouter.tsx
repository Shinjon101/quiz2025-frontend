import { Routes, Route } from "react-router-dom";
import AddSchoolForm from "./features/schools/AddSchoolForm";
import BulkUpdate from "./features/schools/BulkUpdate";
import DashboardLayout from "./layouts/DashboardLayout";
import { SchoolTablePage } from "./pages/schools/SchoolTablePage";
import EditSchoolForm from "./features/schools/EditSchoolForm";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        {/*  <Route path="/" element={<DashboardPage />} /> */}
        <Route path="/schools" element={<SchoolTablePage />} />
        <Route path="/schools/add" element={<AddSchoolForm />} />
        <Route
          path="/admin/schools/:schoolName/edit"
          element={<EditSchoolForm />}
        />
        <Route path="/bulk-update" element={<BulkUpdate />} />
      </Route>

      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
}
