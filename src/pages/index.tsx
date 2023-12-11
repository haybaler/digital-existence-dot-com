import Banner from "@/components/banner";
import Grow_Business from "@/components/grow-business";
import We_Believe from "@/components/we-believe";

export default function Home() {
  return (
    <main>
      <Banner
        title="  Growth Marketing for Startups"
        content="Strategy - Launch - Market Research - Optimization - Corporate Website Design & Development"
        link="#" />
      <We_Believe />
      <Grow_Business />
    </main>
  )
}
