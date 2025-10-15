import React, { useState } from "react";
import Select, { type MultiValue } from "react-select";

type Option = { value: string; label: string };

export default function BulkUpdate() {
  const [selectedSchools, setSelectedSchools] = useState<MultiValue<Option>>(
    []
  );
  const [selectedClasses, setSelectedClasses] = useState<MultiValue<Option>>(
    []
  );
  const [selectedParticipants, setSelectedParticipants] = useState<
    MultiValue<Option>
  >([]);
  const [status, setStatus] = useState<string>("");

  const schools = [
    { name: "Springdale High", city: "Kolkata" },
    { name: "Greenwood Public", city: "Delhi" },
    { name: "Modern Academy", city: "Mumbai" },
  ];

  const participants = [
    { id: "P001", name: "Aarav Singh", status: "verified" },
    { id: "P002", name: "Ram Das", status: "pending" },
    { id: "P003", name: "Ravi Mehta", status: "verified" },
    { id: "P004", name: "Nisha Patel", status: "pending" },
  ];

  const classes = [5, 6, 7, 8, 9, 10];

  const schoolOptions: Option[] = schools.map((s) => ({
    value: s.name,
    label: `${s.name}, ${s.city}`,
  }));

  const classOptions: Option[] = classes.map((c) => ({
    value: String(c),
    label: `${c}th`,
  }));

  const participantOptions: Option[] = participants.map((p) => ({
    value: p.id,
    label: `${p.id} (${p.name})`,
  }));

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log({
      schools: selectedSchools,
      classes: selectedClasses,
      participants: selectedParticipants,
      status,
    });
  }

  return (
    <div className="px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
        <h1 className="h2">Bulk Update</h1>
      </div>

      <form className="container" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-4 mb-3">
            <label htmlFor="school" className="form-label">
              Select School
            </label>
            <Select
              inputId="school"
              instanceId="school"
              isMulti
              options={schoolOptions}
              value={selectedSchools}
              onChange={(v) => setSelectedSchools(v)}
              placeholder="Select schools..."
              className="react-select-container"
              classNamePrefix="react-select"
              closeMenuOnSelect={false}
              noOptionsMessage={() => "No schools"}
            />
          </div>

          <div className="col-sm-4 mb-3">
            <label htmlFor="class" className="form-label">
              Select Class
            </label>
            <Select
              inputId="class"
              instanceId="class"
              isMulti
              options={classOptions}
              value={selectedClasses}
              onChange={(v) => setSelectedClasses(v)}
              placeholder="Select classes..."
              className="react-select-container"
              classNamePrefix="react-select"
              closeMenuOnSelect={false}
              noOptionsMessage={() => "No classes"}
            />
          </div>

          <div className="col-sm-4 mb-3">
            <label htmlFor="participant" className="form-label">
              Select Participants
            </label>
            <Select
              inputId="participant"
              instanceId="participant"
              isMulti
              options={participantOptions}
              value={selectedParticipants}
              onChange={(v) => setSelectedParticipants(v)}
              placeholder="Select participants..."
              className="react-select-container"
              classNamePrefix="react-select"
              closeMenuOnSelect={false}
              noOptionsMessage={() => "No participants"}
            />
          </div>

          <div className="col-sm-4 mb-3">
            <label htmlFor="status" className="form-label">
              Status
            </label>
            <select
              className="form-select"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="">Select Status</option>
              <option value="verified">Verified</option>
              <option value="pending">Pending</option>
            </select>
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
    </div>
  );
}
