import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main", // Change if you use a different branch
  clientId: "3a6f885e-2ff2-4b9f-83dc-bb3c3aa9ac8d", // From Tina Cloud
  token: "584ffb4d89f2fefcb5afd0f8d6f264f59eebc64c", // From Tina Cloud

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },

  media: {
    tina: {
      mediaRoot: "uploads",
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
        match: {
          include: "*.md",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "string",
            name: "billboard_title_part_1",
            label: "Billboard Title Part 1",
          },
          {
            type: "string",
            name: "billboard_title_part_2",
            label: "Billboard Title Part 2",
          },
          {
            type: "string",
            name: "billboard_text",
            label: "Billboard Text",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "billboard_button_text",
            label: "Billboard Button Text",
          },
          {
            type: "string",
            name: "billboard_button_link",
            label: "Billboard Button Link",
          },
          {
            type: "string",
            name: "content",
            label: "Content",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "faq",
            label: "FAQ Items",
            list: true,
            fields: [
              {
                type: "string",
                name: "question",
                label: "Question",
              },
              {
                type: "string",
                name: "answer",
                label: "Answer",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
        ],
      },
      {
        name: "about",
        label: "About Pages",
        path: "content/about",
        format: "toml-frontmatter",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "how_to_change",
        label: "How to Change",
        path: "content/how-to-change",
        format: "toml-frontmatter",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "what_to_change",
        label: "What to Change",
        path: "content/what-to-change",
        format: "toml-frontmatter",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "the_risks",
        label: "The Risks",
        path: "content/the-risks",
        format: "toml-frontmatter",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});