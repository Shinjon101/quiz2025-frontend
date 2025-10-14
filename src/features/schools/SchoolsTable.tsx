import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { type TableColumn } from "react-data-table-component";
import DataTable from "../../components/table/DataTable";

interface User {
  name: string;
  email: string;
  phone: string;
}

interface School {
  id: string;
  name: string;
  city: string;
  moderator: User;
  coordinator: User;
}

interface Props {
  schools: School[];
  userRole: "admin" | "moderator" | "coordinator";
}

export default function SchoolsTable({ schools, userRole }: Props) {
  const [deleteTarget, setDeleteTarget] = useState<School | null>(null);

  const columns: TableColumn<School>[] = [
    {
      name: "",
      cell: () => (
        <div className="d-flex">
          <a className="btn btn-success btn-sm me-1" href="">
            <i className="bi bi-whatsapp"></i>
          </a>
          <a className="btn btn-secondary btn-sm me-1" href="">
            <i className="bi bi-chat-square-dots"></i>
          </a>
          <a className="btn btn-primary btn-sm">
            <i className="bi bi-key"></i>
          </a>
        </div>
      ),
    },
    {
      name: "School ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => (userRole === "admin" ? row.coordinator.email : "-"),
      sortable: true,
      wrap: true,
      minWidth: "150px",
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      wrap: true,
    },
    {
      name: "City/Town",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "Moderator",
      selector: (row) => row.moderator.name,
      sortable: true,
    },
    {
      name: "Coordinator",
      selector: (row) => row.coordinator.name,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (school) => (
        <div className="d-flex justify-content-start align-items-center gap-1">
          <a className="btn btn-primary btn-sm">
            <i className="bi bi-eye"></i>
          </a>
          <a className="btn btn-info btn-sm">
            <i className="bi bi-telephone"></i>
          </a>
          <a className="btn btn-secondary btn-sm">
            <i className="bi bi-pencil-square"></i>
          </a>
          <Button
            size="sm"
            variant="danger"
            onClick={() => setDeleteTarget(school)}
          >
            <i className="bi bi-trash"></i>
          </Button>
        </div>
      ),
      minWidth: "180px",
    },
  ];

  return (
    <>
      <DataTable<School>
        title="All Schools"
        data={schools}
        columns={columns}
        addButton={{
          label: "Add School",
          href: "/admin/school/new?back=schools",
        }}
        searchKeys={["id", "name", "city", "moderator", "coordinator"]}
      />

      {/* Delete Modal */}
      <Modal
        show={!!deleteTarget}
        onHide={() => setDeleteTarget(null)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete school - {deleteTarget?.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          Are you sure you want to delete this school?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setDeleteTarget(null)}>
            No
          </Button>
          <a className="btn btn-danger">Yes</a>
        </Modal.Footer>
      </Modal>
    </>
  );
}
