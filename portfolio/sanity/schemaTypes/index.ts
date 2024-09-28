import { type SchemaTypeDefinition } from "sanity";
import { student } from "./student";
import { teacher } from "./teacher";
import { subject } from "./subject";
import { test } from "./test";
import { rich } from "./rich";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [student, teacher, subject, test, rich],
};
