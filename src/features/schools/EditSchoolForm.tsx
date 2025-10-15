import { useState } from "react";

export default function EditSchoolForm() {
  const [formData, setFormData] = useState({
    name: "Sample School",
    city: "Kolkata",
    coordinatorEmail: "coordinator1@email.com",
    moderatorEmail: "moderator1@email.com",
  });

  const coordinators = ["coordinator1@email.com", "coordinator2@email.com"];
  const moderators = ["moderator1@email.com", "moderator2@email.com"];

  return (
    <main className="col-md-9 ">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
        <h1 className="h2">Edit {formData.name}</h1>
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
              name="name"
              value={formData.name}
              readOnly
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
              name="city"
              value={formData.city}
              readOnly
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
              name="coordinatorEmail"
              value={formData.coordinatorEmail}
              onChange={(e) =>
                setFormData({ ...formData, coordinatorEmail: e.target.value })
              }
              required
            >
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
              name="moderatorEmail"
              value={formData.moderatorEmail}
              onChange={(e) =>
                setFormData({ ...formData, moderatorEmail: e.target.value })
              }
              required
            >
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
              Update
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
