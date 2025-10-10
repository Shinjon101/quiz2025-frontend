import React, { useState } from "react";
import Select, { type MultiValue } from "react-select";

type Option = { value: string; label: string };

export default function BulkUpdatePage() {
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
    { id: "P002", name: "Koyel Das", status: "pending" },
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
    <main>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
        <h1 className="h2">Bulk Update</h1>
      </div>

      <style>{`
        th { text-transform: capitalize; }
        .action-btn { margin-right: 5px; }
        label { font-size: 16px; font-weight: bold; }
        small kbd {
          vertical-align: middle;
          padding: 2px 6px;
          user-select: none !important;
          font-size: 16px;
          font-weight: bold;
          background: white;
          color: black;
          border: 1px solid black;
        }
        .table-responsive::-webkit-scrollbar { height: 12px !important; cursor: pointer !important; }
        .react-select-container { width: 100%; }
        .react-select__control { min-height: 40px; }
      `}</style>

      <form onSubmit={handleSubmit}>
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
            <strong id="schoolMsg" className="text-danger" />
          </div>

          <div className="col-sm-4 mb-3">
            <label htmlFor="class" className="form-label">
              Select class
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
            <strong id="classMsg" className="text-danger" />
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
            <strong id="idMsg" className="text-danger" />
          </div>

          <div className="mb-3 col-4">
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
        </div>

        <div className="d-flex gap-2 mt-3">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => window.history.back()}
          >
            Back
          </button>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </div>
      </form>
    </main>
  );
}
