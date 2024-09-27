export const teacher = {
  name: "teacher",
  type: "document",
  title: "Teacher Profile",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Teacher Name",
      validation: (rule) => rule.required(),
    },
    {
      name: "age",
      type: "string",
      title: "Teacher Age",
      hidden: ({ document }: any) => document.name === "Ratanlal",
      readOnly: ({ document }: any) => document.name === "sarmad",
      validation: (rule) => rule.max(60).warning("Max age is 60"),
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
    {
      name: "subject",
      type: "reference",
      title: "Select Subject",
      to: [{ type: "subjects" }],
    },
    {
      name: "student",
      type: "reference",
      title: "Select Student",
      to: [{ type: "student" }],
    },
  ],
};
