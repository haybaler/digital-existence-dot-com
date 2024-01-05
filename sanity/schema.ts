import { type SchemaTypeDefinition } from "sanity";
import homepage from "./schema/homepage";
import banner from "./schema/banner";
import whatwedo from "./schema/whatwedo";
import aboutpage from "./schema/aboutpage";
import portfolio from "./schema/portfolio";
import navmenu from "./schema/navmenu";
import blockContent from "./schema/blockContent";
import category from "./schema/category";
import blog from "./schema/blog";
import author from "./schema/author";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homepage,
    aboutpage,
    portfolio,
    banner,
    whatwedo,
    navmenu,
    blockContent,
    category,
    author,
    blog,
  ],
};
