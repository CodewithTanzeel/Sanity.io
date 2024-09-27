import { type SchemaTypeDefinition } from "sanity";
import { student } from "./student";
import { teacher } from "./teacher";
import { subject } from "./subject";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [student, teacher, subject],
};
