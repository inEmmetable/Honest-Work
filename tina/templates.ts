import type { TinaField } from "tinacms";
export function block__faqFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "object",
      name: "faq",
      label: "FAQ",
      list: true,
      fields: [
        {
          type: "string",
          name: "question",
          label: "Question",
          required: true,
        },
        {
          type: "string",
          name: "answer",
          label: "Answer",
          ui: {
            component: "textarea",
          },
          required: true,
        },
      ],
    },
  ] as TinaField[];
}
export function block__headingFields() {
  return [
    {
      type: "string",
      name: "heading",
      label: "Heading",
      required: true,
    },
  ] as TinaField[];
}
export function block__image_galleryFields() {
  return [
    {
      type: "image",
      name: "images",
      label: "Images",
      list: true,
    },
  ] as TinaField[];
}
export function block__imageFields() {
  return [
    {
      type: "image",
      name: "image",
      label: "Image",
    },
  ] as TinaField[];
}
export function block__registrationFields() {
  return [
    {
      type: "string",
      name: "fields",
      label: "Fields",
      list: true,
    },
    {
      type: "string",
      name: "thank_you_message",
      label: "Thank you message",
      required: true,
    },
  ] as TinaField[];
}
export function block__tableFields() {
  return [
    {
      type: "object",
      name: "header_columns",
      label: "Header columns",
      list: true,
      fields: [
        {
          type: "string",
          name: "column",
          label: "Column",
        },
      ],
    },
    {
      type: "object",
      name: "rows",
      label: "Rows",
      list: true,
      fields: [
        {
          type: "string",
          name: "label",
          label: "Label",
        },
        {
          type: "object",
          name: "columns",
          label: "Columns",
          list: true,
          fields: [
            {
              type: "string",
              name: "column",
              label: "Column",
            },
          ],
        },
      ],
    },
    {
      type: "string",
      name: "footer",
      label: "Footer",
    },
  ] as TinaField[];
}
export function block__textFields() {
  return [
    {
      type: "string",
      name: "content",
      label: "Content",
      ui: {
        component: "textarea",
      },
    },
  ] as TinaField[];
}
export function coming_soon_pageFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true
    },
    {
      type: "string",
      name: "content",
      label: "Content",
      ui: {
        component: "textarea",
      },
    },
  ] as TinaField[];
}
export function content_pageFields() {
  return [
    {
      type: "image",
      name: "header_image",
      label: "Header image",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
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
      type: "boolean",
      name: "show_sub_navigation",
      label: "Show sub navigation",
    },
    {
      type: "object",
      list: true,
      templateKey: "template",
      label: "Sections",
      name: "sections",
      templates: [
        {
          fields: block__headingFields(),
          label: "Block: Heading",
          name: "block_heading",
          nameOverride: "block-heading",
        },
        {
          fields: block__textFields(),
          label: "Block: Text",
          name: "block_text",
          nameOverride: "block-text",
        },
        {
          fields: block__imageFields(),
          label: "Block: Image",
          name: "block_image",
          nameOverride: "block-image",
        },
        {
          fields: block__image_galleryFields(),
          label: "Block: Image gallery",
          name: "block_image_gallery",
          nameOverride: "block-image-gallery",
        },
        {
          fields: block__tableFields(),
          label: "Block: Table",
          name: "block_table",
          nameOverride: "block-table",
        },
        {
          fields: block__faqFields(),
          label: "Block: FAQ",
          name: "block_faq",
          nameOverride: "block-faq",
        },
        {
          fields: block__registrationFields(),
          label: "Block: Registration",
          name: "block_registration",
          nameOverride: "block-registration",
        },
      ],
    },
    {
      type: "boolean",
      name: "password_protected",
      label: "Password protected",
    },
    {
      type: "string",
      name: "text_alignment",
      label: "Text alignment",
      options: ["left", "center", "right"],
    },
  ] as TinaField[];
}
export function home_page_newFields() {
  return [
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
      name: "left_of_email_form",
      label: "Left of email form",
      required: true,
    },
    {
      type: "string",
      name: "three_columns_column_one_title",
      label: "Three Columns Column one Title",
    },
    {
      type: "string",
      name: "three_columns_column_one_text",
      label: "Three Columns Column one Text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "three_columns_column_one_link",
      label: "Three Columns Column one Link",
    },
    {
      type: "string",
      name: "three_columns_column_two_title",
      label: "Three Columns Column two Title",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "three_columns_column_two_text",
      label: "Three Columns Column two Text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "three_columns_column_two_link",
      label: "Three Columns Column two Link",
    },
    {
      type: "string",
      name: "three_columns_column_three_title",
      label: "Three Columns Column three Title",
    },
    {
      type: "string",
      name: "three_columns_column_three_text",
      label: "Three Columns Column three Text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "three_columns_column_three_link",
      label: "Three Columns Column three Link",
    },
    {
      type: "string",
      name: "three_columns_column_one_title_slide_2",
      label: "Three Columns Column one Title Slide 2",
    },
    {
      type: "string",
      name: "three_columns_column_one_text_slide_2",
      label: "Three Columns Column one Text Slide 2",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "three_columns_column_one_link_slide_2",
      label: "Three Columns Column one Link Slide 2",
    },
    {
      type: "string",
      name: "three_columns_column_two_title_slide_2",
      label: "Three Columns Column two Title Slide 2",
    },
    {
      type: "string",
      name: "three_columns_column_two_text_slide_2",
      label: "Three Columns Column two Text Slide 2",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "three_columns_column_two_link_slide_2",
      label: "Three Columns Column two Link Slide 2",
    },
    {
      type: "string",
      name: "three_columns_column_three_title_slide_2",
      label: "Three Columns Column three Title Slide 2",
    },
    {
      type: "string",
      name: "three_columns_column_three_text_slide_2",
      label: "Three Columns Column three Text Slide 2",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "three_columns_column_three_link_slide_2",
      label: "Three Columns Column three Link Slide 2",
    },
    {
      type: "string",
      name: "white_section_with_left_image_title_1",
      label: "White Section with Left Image Title 1",
    },
    {
      type: "string",
      name: "white_section_with_left_image_content_bold_1",
      label: "White Section with Left Image Content Bold 1",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "white_section_with_left_image_content_normal_1",
      label: "White Section with Left Image Content Normal 1",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "white_section_with_left_image_link_1",
      label: "White Section with Left Image Link 1",
    },
    {
      type: "string",
      name: "blue_section_with_right_image_title_1",
      label: "Blue Section with Right Image Title 1",
    },
    {
      type: "string",
      name: "blue_section_with_right_image_content_bold_1",
      label: "Blue Section with Right Image Content Bold 1",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "blue_section_with_right_image_content_normal_1",
      label: "Blue Section with Right Image Content Normal 1",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "blue_section_with_right_image_link_1",
      label: "Blue Section with Right Image Link 1",
    },
    {
      type: "string",
      name: "blue_section_with_right_image_title_2",
      label: "Blue Section with Right Image Title 2",
    },
    {
      type: "string",
      name: "blue_section_with_right_image_content_bold_2",
      label: "Blue Section with Right Image Content Bold 2",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "blue_section_with_right_image_content_normal_2",
      label: "Blue Section with Right Image Content Normal 2",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "blue_section_with_right_image_link_2",
      label: "Blue Section with Right Image Link 2",
    },
    {
      type: "string",
      name: "faq_title",
      label: "FAQ Main Title",
    },
    {
      type: "object",
      list: true,
      templateKey: "template",
      label: "Home FAQ",
      name: "home_faq_repeat",
      templates: [
        {
          fields: block__faqFields(),
          label: "Block: FAQ",
          name: "block_faq",
          nameOverride: "block-faq",
        },
      ],
    },
    {
      type: "object",
      list: true,
      templateKey: "template",
      label: "Home page image 1",
      name: "home_page_image_1",
      templates: [
        {
          fields: block__imageFields(),
          label: "Block: Image",
          name: "block_image",
          nameOverride: "block-image",
        },
      ],
    },
    {
      type: "object",
      list: true,
      templateKey: "template",
      label: "Home page image 2",
      name: "home_page_image_2",
      templates: [
        {
          fields: block__imageFields(),
          label: "Block: Image",
          name: "block_image",
          nameOverride: "block-image",
        },
      ],
    },
    {
      type: "object",
      list: true,
      templateKey: "template",
      label: "Home page image 3",
      name: "home_page_image_3",
      templates: [
        {
          fields: block__imageFields(),
          label: "Block: Image",
          name: "block_image",
          nameOverride: "block-image",
        },
      ],
    },
    {
      type: "object",
      list: true,
      templateKey: "template",
      label: "Home page image 4",
      name: "home_page_image_4",
      templates: [
        {
          fields: block__imageFields(),
          label: "Block: Image",
          name: "block_image",
          nameOverride: "block-image",
        },
      ],
    },
  ] as TinaField[];
}
export function homepageFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "image",
      name: "hero_image",
      label: "Hero image",
    },
    {
      type: "string",
      name: "hero_title",
      label: "Hero title",
    },
    {
      type: "string",
      name: "hero_sub_title",
      label: "Hero sub title",
    },
    {
      type: "boolean",
      name: "password_protected",
      label: "Password protected",
    },
  ] as TinaField[];
}
