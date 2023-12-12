export default {
  name: "homepage",
  type: "document",
  title: "Home Page",
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
     title: 'What we do cards',
     name: 'whatwedocards',
     type: 'array',
     of: [
       {
         type: 'reference',
         to: [
           {type: 'whatwedo'},
         ]
       }
     ]
   }
  ],
};
