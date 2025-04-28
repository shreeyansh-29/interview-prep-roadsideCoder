export const formSchema = {
  title: "User Registration",
  fields: [
    {
      type: "text",
      name: "fullName",
      label: "Full Name",
      required: true,
      validation: {
        minLength: 2,
        maxLength: 50,
        regex: "",
      },
    },
    {
      type: "email",
      name: "email",
      label: "Email Address",
      required: true,
    },
    {
      type: "select",
      name: "country",
      label: "Country",
      options: ["USA", "Canada", "UK"],
    },
    {
      type: "radio",
      name: "gender",
      label: "Gender",
      options: ["Male", "Female", "Other"],
    },
    {
      type: "checkbox",
      name: "subscribe",
      label: "Subscribe to newsletter",
    },
  ],
};
