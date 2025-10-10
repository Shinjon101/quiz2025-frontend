import { useState } from "react";

export default function AddSchoolForm() {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    coordinatorEmail: "",
    moderatorEmail: "",
  });

  const coordinators = ["coordinator1@email.com", "coordinator2@email.com"];
  const moderators = ["moderator1@email.com", "moderator2@email.com"];

  return (
    <div className="px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
        <h1 className="h2">Add School</h1>
      </div>

      <form className="container">
        <div className="row">
          <div className="col-6 mb-3">
            <label htmlFor="name" className="form-label">
              School Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
            <strong id="nameIDMsg" className="text-danger"></strong>
          </div>

          <div className="col-6 mb-3">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="city"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
              required
            />
            <strong id="cityMsg" className="text-danger"></strong>
          </div>

          <div className="col-6 mb-3">
            <label htmlFor="coordinatorEmail" className="form-label">
              Coordinator
            </label>
            <select
              className="form-control"
              id="coordinatorEmail"
              value={formData.coordinatorEmail}
              onChange={(e) =>
                setFormData({ ...formData, coordinatorEmail: e.target.value })
              }
              required
            >
              <option value="">Select Coordinator</option>
              {coordinators.map((email) => (
                <option key={email} value={email}>
                  {email}
                </option>
              ))}
            </select>
            <strong id="coordinatorEmailMsg" className="text-danger"></strong>
          </div>

          <div className="col-6 mb-3">
            <label htmlFor="moderatorEmail" className="form-label">
              Moderator
            </label>
            <select
              className="form-control"
              id="moderatorEmail"
              value={formData.moderatorEmail}
              onChange={(e) =>
                setFormData({ ...formData, moderatorEmail: e.target.value })
              }
              required
            >
              <option value="">Select Moderator</option>
              {moderators.map((email) => (
                <option key={email} value={email}>
                  {email}
                </option>
              ))}
            </select>
            <strong id="moderatorEmailMsg" className="text-danger"></strong>
          </div>

          <div className="col-sm-12 my-5">
            <button
              type="button"
              className="btn btn-secondary me-2"
              onClick={() => window.history.back()}
            >
              Back
            </button>
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
