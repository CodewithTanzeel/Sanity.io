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
    {
      name: "address",
      title: "Address",
      type: "object",
      fields: [
        {
          name: "streetAddress",
          title: "Street Address",
          type: "string",
          description: "The street address of the location",
        },
        {
          name: "city",
          title: "City",
          type: "string",
          description: "The city of the location",
        },
        {
          name: "state",
          title: "State",
          type: "string",
          description: "The state or province of the location",
        },
        {
          name: "postalCode",
          title: "Postal Code",
          type: "string",
          description: "The postal or ZIP code of the location",
        },
        {
          name: "country",
          title: "Country",
          type: "string",
          description: "The country of the location",
        },
      ],
    },
  ],
};
