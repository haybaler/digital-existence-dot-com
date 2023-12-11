import Banner from "@/components/banner";
import Grow_Business from "@/components/grow-business";
import SeoMeta from "@/components/seo";
import We_Believe from "@/components/we-believe";

export default function Home() {
  return (
    <main>
     
      <SeoMeta title="Growth Marketing for Startups" description="Growth Marketing for Startups" url="https://digital-existen.vercel.app" />     
      <Banner
        title="  Growth Marketing for Startups"
        content="Strategy - Launch - Market Research - Optimization - Corporate Website Design & Development"
        link="#" />
      <We_Believe />
      <Grow_Business />
    </main>
  )
}
