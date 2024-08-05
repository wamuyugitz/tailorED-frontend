import React from "react";
import "./PupilTableCard.css";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteIcon from "@mui/icons-material/Delete";

export default function PupilTableCard({ student }) {
  return (
    <div className="pupil-table-card row">
      <div className="col-lg-1">{student._id}</div>
      <div className="col-lg-3">{student.fullName}</div>
      <div className="col-lg-3">{student.address}</div>
      <div className="col-lg-2">
        {new Date(student.createdAt).toLocaleDateString()}
      </div>
      <div className="col-lg-2">{student.status || "Active"}</div>
      <div className="col-lg-1">
        <button>
          <DriveFileRenameOutlineIcon />
        </button>
        <DeleteIcon />
      </div>
    </div>
  );
}
