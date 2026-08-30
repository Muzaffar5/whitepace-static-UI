import Hero from "./components/sections/Hero";
import ProjectManagement from "./components/sections/ProjectManagement";
import WorkTogether from "./components/sections/WorkTogether";
import Extension from "./components/sections/Extension";
import Customize from "./components/sections/Customize";
import Pricing from "./components/sections/Pricing";
import Everywhere from "./components/sections/Everywhere";
import DataSecurity from "./components/sections/DataSecurity";
import Sponsors from "./components/sections/Sponsors";
import Integrations from "./components/sections/Integrations";
import Testimonials from "./components/sections/Testimonials";
import Cta from "./components/sections/Cta";

export default function Home() {

  return (
    <>
      <Hero />
      <ProjectManagement />
      <WorkTogether />
      <Extension />
      <Customize />
      <Pricing />
      <Everywhere />
      <DataSecurity />
      <Sponsors />
      <Integrations />
      <Testimonials />
      <Cta />
      {/* Add other sections here later (ProjectManagement, Pricing, etc.) */}
    </>
  );
}
