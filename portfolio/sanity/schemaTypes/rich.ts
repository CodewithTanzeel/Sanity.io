export const rich = {
  name: "rich",
  type: "document",
  title: "Rich Text",
  fields: [
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
