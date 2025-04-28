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

export { data, columns };
