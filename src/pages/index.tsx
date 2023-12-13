"use client"
import Banner from "@/components/banner";
import Grow_Business from "@/components/grow-business";
import SeoMeta from "@/components/seo";
import We_Believe from "@/components/we-believe";
import { client } from "../../sanity/lib/client";
import {Homepage} from "../../sanity/lib/query";

export default function Home({homePageData}:any) {
  const {about_sub_title, about_title, pagebanner, whatwedocards, _createdAt, _updatedAt} = homePageData
  return (
    <main>
     
      <SeoMeta title="Growth Marketing for Startups" description="Growth Marketing for Startups with Strategy - Launch - Market Research - Optimization - Corporate Website Design & Development" url="https://digital-existence.com" />     
      <Banner
        title={pagebanner?.banner_title}
        content={pagebanner?.banner_sub_title}
        link={pagebanner?.banner_button_link} 
        bg={pagebanner?.banner_image.asset.url}
        />
      <We_Believe title={about_title} subTitle={about_sub_title} data={whatwedocards}/>
      <Grow_Business />
    </main>
  )
}


export async function getServerSideProps() {
  const homePageData = await client.fetch(Homepage);
  return {
    props: {
      homePageData : homePageData[0],
      preview: true
    }
  };
}