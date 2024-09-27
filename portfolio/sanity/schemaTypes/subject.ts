import { defineField, defineType } from "sanity";

export const subject = defineType({
  name: "subjects",
  type: "document",
  title: "Subjects",
  fields: [
    defineField({
      name: "subject",
      type: "string",
      title: "Select Your Subject",
    }),
  ],
});
