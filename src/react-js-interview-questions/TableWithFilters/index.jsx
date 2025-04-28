import React, { useEffect, useState } from "react";
import { columns, data } from "./data";
import "./index.css";

const TableWithFilters = () => {
  const [modifiedData, setModifiedData] = useState(data);
  const [sortConfig, setSortConfig] = useState({
    key: "",
    order: "asc",
  });

  const [filters, setFilters] = useState({});

  useEffect(() => {
    setModifiedData(() => {
      let modifiedData = [...data];
      modifiedData = modifiedData.filter((item) =>
        Object.entries(filters).every(([key, value]) => {
          if (value === "") return true;

          // Handle number fields
          if (
            typeof value === "object" &&
            value !== null &&
            ("min" in value || "max" in value)
          ) {
            const itemValue = key.includes("address")
              ? item["address"]["city"]
              : item[key];
            const numValue = Number(itemValue);

            if (value.min !== "" && numValue < Number(value.min)) {
              return false;
            }
            if (value.max !== "" && numValue > Number(value.max)) {
              return false;
            }
            return true;
          }

          // Handle text fields
          if (key === "address.city") {
            return item["address"]["city"]
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase());
          }
          return item[key]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase());
        })
      );
      const { key, order } = sortConfig;
      const newData = modifiedData.sort((a, b) => {
        if (order === "asc") return a[key] < b[key] ? 1 : -1;
        if (order === "desc") return a[key] > b[key] ? 1 : -1;
        return 0;
      });
      return newData;
    });
  }, [sortConfig, filters]);

  function onSort(sortKey) {
    setSortConfig((prev) => {
      return {
        key: sortKey,
        order: prev.key === sortKey && prev.order === "asc" ? "desc" : "asc",
      };
    });
  }

  function onFilter(searchKey, value) {
    setFilters((prev) => {
      return {
        ...prev,
        [searchKey]: value,
      };
    });
  }

  function onFilterNumber(searchKey, value, type) {
    setFilters((prev) => {
      const existing = prev[searchKey] || { min: "", max: "" };
      return {
        ...prev,
        [searchKey]: {
          ...existing,
          [type]: value,
        },
      };
    });
  }

  return (
    <table>
      <thead>
        <tr>
          {columns.map((ele) => (
            <th className="column">
              <span onClick={() => onSort(ele.key)}>
                {ele.title}
                {ele.key === sortConfig.key
                  ? sortConfig.order === "asc"
                    ? "Up"
                    : "Down"
                  : null}
              </span>
              <br />
              {ele.filerable === false ? null : ele.type === "number" ? (
                <span>
                  <input
                    type="number"
                    placeholder="Min"
                    onChange={(e) =>
                      onFilterNumber(ele.key, e.target.value, "min")
                    }
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    onChange={(e) =>
                      onFilterNumber(ele.key, e.target.value, "max")
                    }
                  />
                </span>
              ) : (
                <span>
                  <input
                    type="text"
                    onChange={(e) => onFilter(ele.key, e.target.value)}
                  />
                </span>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {modifiedData.map((item) => (
          <tr>
            {columns.map((col) => {
              if (col.key.includes("address")) {
                return <td>{item["address"]["city"]}</td>;
              }
              return <td>{item[col.key]}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableWithFilters;
