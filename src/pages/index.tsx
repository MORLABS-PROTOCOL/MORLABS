// components
import { Navbar, Footer, APISection } from "@/components";
import { FixedPlugin } from "@/components";


// sections
import { default as Hero } from "./hero";

import VideoIntro from "./get-started";
import Feature from "./feature";
import Testimonials from "./testimonials";
// import Faqs from "./faqs";

// export default function Campaign() {
export default function Home() {
  return (
    <>
      <div className="bg-[radial-gradient(circle_at_top,_#4ade80,_black_60%)] min-h-screen">
        <Navbar />
        <Hero />
      </div>
      <div className="bg-gradient-to-b from-black to-black min-h-screen">
        {/* <Feature /> */}
        <APISection />
        <VideoIntro />
        <Testimonials />
        <Footer />
        <FixedPlugin />
      </div>

    </>
  );
}
