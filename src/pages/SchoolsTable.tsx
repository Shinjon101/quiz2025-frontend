import { useState } from "react";
import DataTable, { type TableColumn } from "react-data-table-component";
import { Modal, Button, Form } from "react-bootstrap";

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
  const [searchText, setSearchText] = useState("");

  const columns: TableColumn<School>[] = [
    {
      name: "",
      cell: () => {
        /*      const isAdmin = userRole === "admin";
        const isAdminOrModerator = isAdmin || userRole === "moderator";
        const skipMessageButton =
          school.coordinator.email.includes("yuvajanasamiti.org"); */

        return (
          <div className="d-flex">
            <a className="btn btn-success btn-sm me-1" href={``}>
              <i className="bi bi-whatsapp"></i>
            </a>

            <a className="btn btn-secondary btn-sm me-1" href={``}>
              <i className="bi bi-chat-square-dots"></i>
            </a>

            <a className="btn btn-primary btn-sm">
              <i className="bi bi-key"></i>
            </a>
          </div>
        );
      },
      // minWidth: "180px",
    },
    {
      name: "School ID",
      selector: (row) => row.id,
      sortable: true,
      // width: "120px",
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
      // minWidth: "200px",
    },
    {
      name: "City/Town",
      selector: (row) => row.city,
      sortable: true,
      //minWidth: "150px",
    },
    {
      name: "Moderator",
      selector: (row) => row.moderator.name,
      sortable: true,
      // minWidth: "200px",
    },
    {
      name: "Coordinator",
      selector: (row) => row.coordinator.name,
      sortable: true,
      //minWidth: "200px",
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
      // minWidth: "180px",
    },
  ];

  const filteredSchools = schools.filter((s) => {
    const search = searchText.toLowerCase();
    return (
      s.name.toLowerCase().includes(search) ||
      s.city.toLowerCase().includes(search) ||
      s.id.toLowerCase().includes(search) ||
      s.moderator.name.toLowerCase().includes(search) ||
      s.coordinator.name.toLowerCase().includes(search) ||
      s.coordinator.email.toLowerCase().includes(search)
    );
  });

  return (
    <div className="py-4 container-fluid">
      {/* Header + Add button row */}
      <div className="row mb-3">
        <div className="col d-flex justify-content-between align-items-center">
          <h2 className="mb-0">All Schools</h2>
          <a
            className="btn btn-secondary"
            href="/admin/school/new?back=schools"
          >
            Add School <i className="bi bi-plus-circle"></i>
          </a>
        </div>
      </div>

      {/* Search bar row */}
      <div className="row mb-3">
        <div className="col d-flex justify-content-end">
          <Form.Control
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ maxWidth: "250px" }}
          />
        </div>
      </div>

      {/* Table row */}
      <div className="row">
        <div className="col">
          <div
            className="border rounded bg-white"
            style={{ minHeight: "500px" }}
          >
            <DataTable
              columns={columns}
              data={filteredSchools}
              pagination
              highlightOnHover
              striped
              responsive
              persistTableHead
              noDataComponent={
                <div className="text-center py-3 w-100">No results found</div>
              }
              customStyles={{
                table: {
                  style: {},
                },
                headCells: { style: { fontWeight: "bold" } },
                cells: {
                  style: { whiteSpace: "normal", wordBreak: "break-word" },
                },
              }}
            />
          </div>
        </div>
      </div>

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
    </div>
  );
}
