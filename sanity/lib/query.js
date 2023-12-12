export const Homepage = `*[ _type == "homepage"]{
     about_sub_title,
     about_title,
     pagebanner->{
          banner_title,
          banner_sub_title,
          banner_button_text,
          banner_button_link,
          banner_image{
               asset->{
                    url
               }
          }
     },
     whatwedocards[]->{
          title,
          sub_title,
          info,
          button_text,
          button_link,
          image{
               asset->{
                    url
               }
          }
     },
     _createdAt,
     _updatedAt
}`;


export const AboutPage = `*[ _type == "aboutpage"]{
     about_sub_title,
     about_title,
     pagebanner->{
          banner_title,
          banner_sub_title,
          banner_button_text,
          banner_button_link,
          banner_image{
               asset->{
                    url
               }
          }
     },
    
     _createdAt,
     _updatedAt
}`;