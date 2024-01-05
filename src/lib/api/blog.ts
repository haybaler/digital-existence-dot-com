import { client } from "../../../sanity/lib/client";
import { Blog } from "../types";

export const fetchAllBlogs = async () => {
  let data: Blog[] = [];

  try {
    data = await client.fetch<Blog[]>(`*[_type == "blog"]{
        ...,
        mainImage{
          asset->{
            url
          }
        },
        author-> {
          ...,
          image{
          asset->{
            url
          }
        }
      
        },
      categories[]->{
        ...
      }
       
      }`);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return error;
  }
};

export const fetchSingleBlog = async (slug: string) => {
  try {
    const data: Blog | null = await client.fetch<Blog>(
      `*[_type == "blog" && slug.current == $slug] [0] {
            ...,
            mainImage{
              asset->{
                url
              }
            },
            author-> {
              ...,
              image{
                asset->{
                  url
                }
              }
            },
            categories[]->{
              ...
            }
          }`,
      { slug }
    );
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return error;
  }
};
