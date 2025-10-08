export default function Sidebar() {
  //mock counts
  const schoolsCount = 12;
  const participantsCount = 34;
  const verifiedCount = 20;
  const pendingCount = 10;
  const inactiveCount = 4;
  const usersCount = 5;
  const deletedUsersCount = 1;

  return (
    <aside
      className="col-md-3 col-lg-2 bg-light sidebar d-flex flex-column flex-shrink-0 p-3"
      style={{ minHeight: "100vh" }}
    >
      <div className="pt-3 flex-grow-1 overflow-auto">
        <div className="mt-2 d-flex flex-row align-items-center justify-content-between">
          <strong className="fs-5">ADMIN</strong>
          <i className="bi bi-person-circle fs-5"></i>
          <button className="btn btn-link text-dark bi bi-three-dots-vertical fs-5" />
        </div>

        <hr />

        <ul className="nav flex-column">
          <li>
            <button className="nav-link text-start w-100">
              <i className="bi bi-house-door"></i> Home
            </button>
          </li>
          <hr />

          <li>
            <strong className="ms-3">Schools</strong>
            <button className="nav-link text-start w-100 d-flex align-items-center">
              <i className="bi bi-bank2"></i>
              <span className="ms-2">All Schools</span>
              <span className="ms-2 badge bg-secondary">{schoolsCount}</span>
            </button>
          </li>
          <li>
            <button className="nav-link text-start w-100">
              <i className="bi bi-upload"></i> Import
            </button>
          </li>
          <li>
            <button className="nav-link text-start w-100">
              <i className="bi bi-send"></i> Bulk Update
            </button>
          </li>
          <hr />

          <li>
            <strong className="ms-3">Participants</strong>
            <button className="nav-link text-start w-100 d-flex align-items-center">
              <i className="bi bi-person-circle"></i>
              <span className="ms-2">All Participants</span>
              <span className="ms-2 badge bg-secondary">
                {participantsCount}
              </span>
            </button>
          </li>
          <li>
            <button className="nav-link text-start w-100 d-flex align-items-center">
              <i className="bi bi-patch-check-fill text-success"></i>
              <span className="ms-2">Verified Participants</span>
              <span className="ms-2 badge bg-success">{verifiedCount}</span>
            </button>
          </li>
          <li>
            <button className="nav-link text-start w-100 d-flex align-items-center">
              <i className="bi bi-exclamation-triangle-fill"></i>
              <span className="ms-2">Pending Participants</span>
              <span className="ms-2 badge bg-secondary">{pendingCount}</span>
            </button>
          </li>
          <li>
            <button className="nav-link text-start w-100 d-flex align-items-center">
              <i className="bi bi-x-octagon-fill text-danger"></i>
              <span className="ms-2">Inactive Participants</span>
              <span className="ms-2 badge bg-danger">{inactiveCount}</span>
            </button>
          </li>
          <hr />

          <li>
            <strong className="ms-3">Results</strong>
          </li>
          <li>
            <button className="nav-link text-start w-100">
              <i className="bi bi-award-fill"></i> All Results
            </button>
          </li>
          <li>
            <button className="nav-link text-start w-100">
              <i className="bi bi-patch-plus-fill"></i> Add Result
            </button>
          </li>
          <hr />

          <li>
            <strong className="ms-3">Users</strong>
            <button className="nav-link text-start w-100 d-flex align-items-center">
              <i className="bi bi-people-fill"></i>
              <span className="ms-2">All Users</span>
              <span className="ms-2 badge bg-secondary">{usersCount}</span>
            </button>
          </li>
          <li>
            <button className="nav-link text-start w-100">
              <i className="bi bi-key-fill"></i> Change Passwords
            </button>
          </li>
          <li>
            <button className="nav-link text-start w-100 d-flex align-items-center">
              <i className="bi bi-x-octagon-fill text-danger"></i>
              <span className="ms-2">Deleted Users</span>
              <span className="ms-2 badge bg-danger">{deletedUsersCount}</span>
            </button>
          </li>
          <hr />

          <li className="mt-3 mb-5">
            <strong className="ms-3">Website</strong>
            <button className="nav-link text-start w-100">
              <i className="bi bi-globe"></i> QUIZ 2025
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
}
