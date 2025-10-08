import { useState } from "react";
import DataTable, { type TableColumn } from "react-data-table-component";
import { Modal, Button } from "react-bootstrap";

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
      cell: (school) => {
        const isAdmin = userRole === "admin";
        const isAdminOrModerator = isAdmin || userRole === "moderator";
        const skipMessageButton =
          school.coordinator.email.includes("yuvajanasamiti.org");

        return (
          <div className="">
            {isAdmin && (
              <a
                className="btn btn-success btn-sm me-1"
                rel="noreferrer"
                href={`https://api.whatsapp.com/send/?phone=+91${school.coordinator.phone}&text=Namaste *${school.coordinator.name}* garu%0A%0APlease join Vivekananda QUIZ 2025 Whatsapp group%0A%0AWhatsapp group link: https://chat.whatsapp.com/DyHRcVkLUTYIlL7eoZMDqe`}
              >
                <i className="bi bi-whatsapp"></i>
              </a>
            )}

            {isAdminOrModerator && !skipMessageButton && (
              <a
                className="btn btn-secondary btn-sm me-1 "
                target="_blank"
                rel="noreferrer"
                href={`https://api.whatsapp.com/send/?phone=+91${school.coordinator.phone}&text=Welcome message for ${school.name}`}
              >
                <i className="bi bi-chat-square-dots"></i>
              </a>
            )}

            {isAdmin && (
              <a
                className="btn btn-primary btn-sm"
                target="_blank"
                rel="noreferrer"
                href={`https://api.whatsapp.com/send/?phone=+91${school.coordinator.phone}&text=Your Coordinator account has been activated. Password: Vivekananda@2023`}
              >
                <i className="bi bi-key"></i>
              </a>
            )}
          </div>
        );
      },
      minWidth: "180px",
    },
    {
      name: "School ID",
      selector: (row) => row.id,
      sortable: true,
      minWidth: "100px",
    },
    {
      name: "Email",
      selector: (row) => (userRole === "admin" ? row.coordinator.email : "-"),
      sortable: true,
      minWidth: "250px",
      wrap: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      wrap: true,
      minWidth: "150px",
    },
    {
      name: "City/Town",
      selector: (row) => row.city,
      sortable: true,
      wrap: true,
      minWidth: "120px",
    },
    {
      name: "Moderator",
      selector: (row) => row.moderator.name,
      sortable: true,
      wrap: true,
      minWidth: "150px",
    },
    {
      name: "Coordinator",
      selector: (row) => row.coordinator.name,
      sortable: true,
      wrap: true,
      minWidth: "150px",
    },
    {
      name: "Actions",
      cell: (school) => (
        <div className="gap-1">
          <a
            className="btn btn-primary btn-sm me-1"
            href={`/admin/schools/${school.id}?back=schools`}
          >
            <i className="bi bi-eye"></i>
          </a>

          {userRole === "admin" && (
            <>
              <a
                className="btn btn-info btn-sm me-1"
                href={`tel:${school.coordinator.phone}`}
              >
                <i className="bi bi-telephone"></i>
              </a>

              <a
                className="btn btn-secondary btn-sm me-1"
                href={`/admin/schools/${school.id}/edit?back=schools`}
              >
                <i className="bi bi-pencil-square"></i>
              </a>

              <Button
                size="sm"
                variant="danger"
                onClick={() => setDeleteTarget(school)}
              >
                <i className="bi bi-trash"></i>
              </Button>
            </>
          )}
        </div>
      ),
      minWidth: "180px",
    },
  ];

  return (
    <main className="container-fluid py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="h2">All Schools</h1>
        <a className="btn btn-secondary" href="/admin/school/new?back=schools">
          Add School <i className="bi bi-plus-circle"></i>
        </a>
      </div>

      <div style={{ overflowX: "auto" }}>
        <DataTable
          columns={columns}
          data={schools}
          pagination
          highlightOnHover
          striped
          responsive
          defaultSortFieldId={1}
          fixedHeader
          fixedHeaderScrollHeight="500px"
          customStyles={{
            table: { style: { tableLayout: "auto", width: "100%" } },
            headCells: { style: { fontWeight: "bold" } },
            cells: { style: { whiteSpace: "normal", wordBreak: "break-word" } },
          }}
        />
      </div>

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
          <a
            href={`/admin/schools/${deleteTarget?.id}/delete?back=schools`}
            className="btn btn-danger"
          >
            Yes
          </a>
        </Modal.Footer>
      </Modal>
    </main>
  );
}
