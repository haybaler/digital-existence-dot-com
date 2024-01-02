export default {
     name: "navmenu",
     type: "document",
     title: "Navigation Menu",
     fields: [
      {
        name: "title",
        type: "string",
        title: "Title",
      },
      
       {
        title: 'Nav Items',
        name: 'nav_items',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              
              {
                name: 'title',
                type: 'string',
                title: 'Title',
              },
              {
                name: 'link',
                type: 'string',
                title: 'Link',
              },
            ]
          }
        ]
      },
     ],
   };
   