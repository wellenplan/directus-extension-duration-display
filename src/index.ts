import { defineDisplay } from "@directus/extensions-sdk";
import DisplayComponent from "./display.vue";

export default defineDisplay({
  id: "duration",
  name: "$:duration.display.name",
  description: "$:duration.display.description",
  icon: "timer",
  component: DisplayComponent,
  options: null,
  types: ["integer", "float", "decimal"],
});
