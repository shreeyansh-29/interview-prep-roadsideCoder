import React, { useState } from "react";
import { formSchema } from "./schema";
import "./index.css";

const DynamicFormBuilder = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: type === "checkbox" ? checked : value };
    });
  };

  const validateField = (field, value) => {
    let error = "";
    if (field.required && (value === undefined || value === ""))
      error = `${field.label} is required`;

    if (field.validation) {
      const { minLength, maxLength, regex } = field.validation;

      if (minLength && value.length < Number(minLength)) {
        error = `${field.label} should be greater than 2`;
      }

      if (maxLength && value.length > Number(maxLength)) {
        error = `${field.label} should be greater than 2`;
      }

      if (regex) {
        const pattern = new RegExp(regex);
        if (!pattern.text(value)) {
          error = `${field.name} format is invalid`;
        }
      }
    }
    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    formSchema.fields.forEach((field) => {
      const error = validateField(field, formData[field.name]);
      if (error) {
        newErrors[field.name] = error;
      }
    });

    setError(newErrors);

    if (Object.keys(newErrors).length === 0) alert("Form submitted successfully!");
  };

  const renderFields = (field) => {
    switch (field.type) {
      case "text":
      case "email":
        return (
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name] || ""}
            placeholder={field.label}
            onChange={handleChange}
          />
        );
      case "select":
        return (
          <select
            // placeholder={`Select ${field.name}`}
            onChange={handleChange}
            name={field.name}
            value={formData[field.name] || ""}
          >
            <option value="">Select {field.label}</option>
            {field.options.map((ele, idx) => (
              <option key={idx} value={ele}>
                {ele}
              </option>
            ))}
          </select>
        );
      case "radio":
        return (
          <div className="radioGroup">
            {field.options.map((ele, idx) => (
              <label key={idx} className="radio-label">
                <input
                  type={field.type}
                  value={ele}
                  onChange={handleChange}
                  name={field.name}
                  checked={formData[field.name] === ele}
                />
              </label>
            ))}
          </div>
        );
      case "checkbox":
        return (
          <input
            type="checkbox"
            name={field.name}
            checked={formData[field.name] || false}
            onChange={handleChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="form-container">
      <h2>{formSchema.title}</h2>
      <form onSubmit={handleSubmit} noValidate>
        {formSchema.fields.map((field) => (
          <div key={field.name}>
            <label>{field.label}</label>
            {renderFields(field)}
            {error[field.name] && (
              <p className="error-message">{error[field.name]}</p>
            )}
          </div>
        ))}
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DynamicFormBuilder;
