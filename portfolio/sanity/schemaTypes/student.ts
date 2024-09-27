export const student = {
  name: "student",
  type: "document",
  title: "Student Profile",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Student Name",
    },
    {
      name: "age",
      type: "string",
      title: "Student Age",
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
      name: "image",
      type: "image",
      title: " Student Image",
    },
    {
      title: "Hobby",
      name: "hobby",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "dateofbirth",
      Title: "DateofBirth",
      type: "date",
    },
    {
      name: "cv",
      Title: "Resume/CV",
      type: "file",
    },
   
    
  ],
};
