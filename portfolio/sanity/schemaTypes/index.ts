import { type SchemaTypeDefinition } from "sanity";
import { student } from "./student";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [student],
};
