import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const data = [
  {
    id: 1,
    name: "Zod",
    age: 23,
    address: { city: "Mumbai", state: "Maharastra" },
    votes: 50,
  },
  {
    id: 2,
    name: "Rahul",
    age: 30,
    address: { city: "Bangalore", state: "karnataka" },
    votes: 150,
  },
  {
    id: 3,
    name: "Rahul A",
    age: 20,
    address: { city: "Bangalore", state: "karnataka" },
    votes: 120,
  },
  {
    id: 4,
    name: "Rahul Aa",
    age: 27,
    address: { city: "Bangalore", state: "karnataka" },
    votes: 90,
  },
];

const columns = [
  { key: "id", title: "Id" },
  { key: "name", title: "Full Name" },
  { key: "address.city", title: "City" },
  { key: "votes", title: "Votes", type: "number" },
];

function App() {
  return (
    <div className="App">
      <Table data={data} columns={columns} />
    </div>
  );
}

function Table({ data, columns }) {
  const [tableData, setTableData] = useState(data);
  const [sortConfig, setSortConfig] = useState({
    key: "",
    order: "asc",
  });

  useEffect(() => {
    setTableData((prev) => {
      const { key, order } = sortConfig;
      let newData = tableData.sort((a, b) => {
        if (order === "asc") return a[key] < b[key] ? 1 : -1;
        if (order === "desc") return a[key] > b[key] ? 1 : -1;
        return 0;
      });
      return newData;
    });
  }, [sortConfig]);

  function onSort(colKey) {
    setSortConfig((prev) => {
      return {
        key: colKey,
        order: prev.key === colKey && prev.order === "asc" ? "desc" : "asc",
      };
    });
  }

  return (
    <table>
      <thead>
        <tr>
          {columns.map((col) => (
            <td>
              <span onClick={() => onSort(col.key)}>
                {col.title}
                {sortConfig.key === col.key
                  ? sortConfig.order === "asc"
                    ? "Up"
                    : "Down"
                  : null}
              </span>
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((item) => (
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
}

export default App;
