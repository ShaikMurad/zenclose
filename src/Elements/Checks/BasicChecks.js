import React from "react";

export default function BasicChecks({
  id = "",
  type = "",
  value = "",
  label = "",
  onChange = (e) => {},
}) {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value={value}
        id={id}
        onChange={onChange}
      />
      <label className="form-check-label" for={id}>
        {label}
      </label>
    </div>
  );
}
