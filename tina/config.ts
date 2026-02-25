import { defineConfig } from "tinacms";

import { block__faqFields } from "./templates";
import { block__headingFields } from "./templates";
import { block__image_galleryFields } from "./templates";
import { block__imageFields } from "./templates";
import { block__registrationFields } from "./templates";
import { block__tableFields } from "./templates";
import { block__textFields } from "./templates";
import { coming_soon_pageFields } from "./templates";
import { content_pageFields } from "./templates";
import { home_page_newFields } from "./templates";
import { homepageFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = "master";


export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: "3a6f885e-2ff2-4b9f-83dc-bb3c3aa9ac8d",

  // Get this from tina.io
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
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      {
        format: "md",
        label: "Pages",
        name: "pages",
        path: "content",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "**/*",
        },
        templates: [
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...home_page_newFields(),
            ],
            label: "home-page-new",
            name: "home_page_new",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...coming_soon_pageFields(),
            ],
            label: "coming-soon-page",
            name: "coming_soon_page",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...content_pageFields(),
            ],
            label: "content-page",
            name: "content_page",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...homepageFields(),
            ],
            label: "homepage",
            name: "homepage",
          },
        ],
      },
    ],
  },
});
