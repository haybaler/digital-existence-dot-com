export default {
  name: "aboutpage",
  type: "document",
  title: "About Page",
  fields: [
    {
      title: "Page Banner",
      name: "pagebanner",
      type: "reference",
      to: [{ type: "banner" }],
    },
    {
      name: "about_sub_title",
      type: "string",
      title: "About Sub Title",
    },
    {
      name: "about_title",
      type: "string",
      title: "About Title",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          fields: [
            {
              type: "text",
              name: "alt",
              title: "Alternative text",
              description: `Some of your visitors cannot see images, 
                  be they blind, color-blind, low-sighted; 
                  alternative text is of great help for those 
                  people that can rely on it to have a good idea of 
                  what\'s on your page.`,
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },
    {
      title: 'Features',
      name: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'icon',
              type: 'image',
              title: 'Icon',
            },
            {
              name: 'title',
              type: 'string',
              title: 'Title',
            },
            {
              name: 'info',
              type: 'text',
              title: 'Info',
            },
          ]
        }
      ]
    },
  ],
};
