export const teacher = {
  name: "teacher",
  type: "document",
  title: "Teacher Profile",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Teacher Name",
    },
    {
      name: "age",
      type: "string",
      title: "Teacher Age",
    },
    {
      name: "gender",
      type: "string",
      title: "Gender",
      options: {
        list: [
          { title: "Male", value: "male" },
          { title: "Female", value: "female" },
          { title: "trans", value: "trans" },
        ],
      },
    },
  ],
};
