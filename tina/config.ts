import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "master",
  clientId: "3a6f885e-2ff2-4b9f-83dc-bb3c3aa9ac8d",
  token: "584ffb4d89f2fefcb5afd0f8d6f264f59eebc64c",
  
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  
  schema: {
    collections: [
      {
        name: "pages",
        label: "Pages",
        path: "content",
        format: "toml-frontmatter",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
          },
        ],
      },
    ],
  },
});
