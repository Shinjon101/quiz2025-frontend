import Offcanvas from "react-bootstrap/Offcanvas";

type Counts = {
  schoolsCount: number;
  participantsCount: number;
  verifiedCount: number;
  pendingCount: number;
  inactiveCount: number;
  usersCount: number;
  deletedUsersCount: number;
};

type Props = {
  show: boolean;
  onHide: () => void;
};

export default function Sidebar({ show, onHide }: Props) {
  const counts: Counts = {
    schoolsCount: 12,
    participantsCount: 34,
    verifiedCount: 20,
    pendingCount: 10,
    inactiveCount: 4,
    usersCount: 5,
    deletedUsersCount: 1,
  };

  return (
    <>
      <Offcanvas
        show={show}
        onHide={onHide}
        className="bg-light d-md-none"
        placement="start"
      >
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <SidebarContent counts={counts} onItemClick={onHide} />
        </Offcanvas.Body>
      </Offcanvas>

      {/* Desktop Sidebar */}
      <aside
        className="col-md-3 col-lg-2 bg-light sidebar d-md-flex flex-column flex-shrink-0 p-3"
        style={{ height: "100vh", overflowY: "auto" }}
      >
        <SidebarContent counts={counts} />
      </aside>
    </>
  );
}

function SidebarContent({
  counts,
  onItemClick,
}: {
  counts: Counts;
  onItemClick?: () => void;
}) {
  const closeIfMobile = () => onItemClick?.();

  return (
    <div className=" flex-grow-1">
      <div className="d-flex flex-row align-items-center justify-content-between">
        <div className="d-flex justify-content-center align-items-center gap-1">
          <i className="bi bi-person-circle fs-4" />
          <strong className="fs-5">ADMIN</strong>
        </div>
        <button className="btn btn-link text-dark bi bi-three-dots-vertical fs-5" />
      </div>

      <hr />

      <ul className="nav flex-column">
        <li>
          <button className="nav-link text-start w-100" onClick={closeIfMobile}>
            <i className="bi bi-house-door" /> Home
          </button>
        </li>

        <hr />

        <li>
          <strong className="ms-3">Schools</strong>
          <button
            className="nav-link text-start w-100 d-flex align-items-center"
            onClick={closeIfMobile}
          >
            <i className="bi bi-bank2" />
            <span className="ms-2">All Schools</span>
            <span className="ms-2 badge bg-secondary">
              {counts.schoolsCount}
            </span>
          </button>
        </li>

        <li>
          <button className="nav-link text-start w-100" onClick={closeIfMobile}>
            <i className="bi bi-upload" /> Import
          </button>
        </li>

        <li>
          <button className="nav-link text-start w-100" onClick={closeIfMobile}>
            <i className="bi bi-send" /> Bulk Update
          </button>
        </li>

        <hr />

        <li>
          <strong className="ms-3">Participants</strong>
          <button
            className="nav-link text-start w-100 d-flex align-items-center"
            onClick={closeIfMobile}
          >
            <i className="bi bi-person-circle" />
            <span className="ms-2">All Participants</span>
            <span className="ms-2 badge bg-secondary">
              {counts.participantsCount}
            </span>
          </button>
        </li>

        <li>
          <button
            className="nav-link text-start w-100 d-flex align-items-center"
            onClick={closeIfMobile}
          >
            <i className="bi bi-patch-check-fill text-success" />
            <span className="ms-2">Verified Participants</span>
            <span className="ms-2 badge bg-success">
              {counts.verifiedCount}
            </span>
          </button>
        </li>

        <li>
          <button
            className="nav-link text-start w-100 d-flex align-items-center"
            onClick={closeIfMobile}
          >
            <i className="bi bi-exclamation-triangle-fill" />
            <span className="ms-2">Pending Participants</span>
            <span className="ms-2 badge bg-secondary">
              {counts.pendingCount}
            </span>
          </button>
        </li>

        <li>
          <button
            className="nav-link text-start w-100 d-flex align-items-center"
            onClick={closeIfMobile}
          >
            <i className="bi bi-x-octagon-fill text-danger" />
            <span className="ms-2">Inactive Participants</span>
            <span className="ms-2 badge bg-danger">{counts.inactiveCount}</span>
          </button>
        </li>

        <hr />

        <li>
          <strong className="ms-3">Results</strong>
        </li>

        <li>
          <button className="nav-link text-start w-100" onClick={closeIfMobile}>
            <i className="bi bi-award-fill" /> All Results
          </button>
        </li>

        <li>
          <button className="nav-link text-start w-100" onClick={closeIfMobile}>
            <i className="bi bi-patch-plus-fill" /> Add Result
          </button>
        </li>

        <hr />

        <li>
          <strong className="ms-3">Users</strong>
          <button
            className="nav-link text-start w-100 d-flex align-items-center"
            onClick={closeIfMobile}
          >
            <i className="bi bi-people-fill" />
            <span className="ms-2">All Users</span>
            <span className="ms-2 badge bg-secondary">{counts.usersCount}</span>
          </button>
        </li>

        <li>
          <button className="nav-link text-start w-100" onClick={closeIfMobile}>
            <i className="bi bi-key-fill" /> Change Passwords
          </button>
        </li>

        <li>
          <button
            className="nav-link text-start w-100 d-flex align-items-center"
            onClick={closeIfMobile}
          >
            <i className="bi bi-x-octagon-fill text-danger" />
            <span className="ms-2">Deleted Users</span>
            <span className="ms-2 badge bg-danger">
              {counts.deletedUsersCount}
            </span>
          </button>
        </li>

        <hr />

        <li className="mt-3 mb-5">
          <strong className="ms-3">Website</strong>
          <button className="nav-link text-start w-100" onClick={closeIfMobile}>
            <i className="bi bi-globe" /> QUIZ 2025
          </button>
        </li>
      </ul>
    </div>
  );
}
