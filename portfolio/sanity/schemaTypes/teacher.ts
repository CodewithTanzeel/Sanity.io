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
      hidden: ({ document }: any) => document,
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
