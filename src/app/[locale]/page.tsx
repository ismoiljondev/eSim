import AboutWork from "@/components/about-work";
import Countries from "@/components/countries";
import { Plans } from "@/components/plans";
import { Showcase } from "@/components/showcase";
import WhyUs from "@/components/why-us";

export default function Home() {
  return (
    <>
      <Showcase />
      <Countries />
      <AboutWork />
      {/* <WhyUs /> */}
    </>
  );
}
