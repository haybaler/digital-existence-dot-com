interface Author {
  _rev?: string;
  name?: string;
  _id?: string;
  _updatedAt?: string;
  _type?: string;
  bio?: any[]; // Adjust the type based on your actual schema
  slug?: { current: string; _type: string };
  image?: any; // Adjust the type based on your actual schema
  _createdAt?: string;
}

interface MainImage {
  asset?: any; // Adjust the type based on your actual schema
}

interface Category {
  title?: string;
  description?: string;
  // Adjust the type based on your actual schema for categories
}

interface Slug {
  current?: string;
  _type?: string;
}

interface iconify {
  name: string;
}

export interface Blog {
  _id?: string;
  title?: string;
  author?: Author;
  _rev?: string;
  mainImage?: MainImage;
  _updatedAt?: string;
  _type?: string;
  body?: BlockContent | any; // Adjust the type based on your actual schema
  publishedAt?: string;
  _createdAt?: string;
  myIcon: iconify;
  categories?: Category[];
  slug?: Slug;
}
interface InlineText {
  _type: "span";
  _key: string;
  text: string;
  marks: string[]; // You can define mark types here if needed
}
interface TextBlock {
  _type: "block";
  _key: string;
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
  children: InlineText[];
}

interface ImageBlock {
  _type: "image";
  _key: string;
  asset: {
    _ref: string;
    _type: "reference";
  };
  // You can add other image-related properties here
}
type BlockContent = TextBlock | ImageBlock;
