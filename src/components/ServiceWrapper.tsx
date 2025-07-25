import React from "react";
import ClientOnly from "./ClientOnly";
import dynamic from "next/dynamic";

// Define service components dynamically
const serviceComponents: { [key: string]: React.ComponentType<any> } = {
  diagnostic: dynamic(
    () => import("../pages/services/diagnostic/DiagnosticPage")
  ),
  hygiene: dynamic(() => import("../pages/services/hygiene/Hygiene")),
  whitening: dynamic(
    () => import("../pages/services/whitening/Whitening")
  ),
  implants: dynamic(() => import("../pages/services/implants/Implants")),
  surgery: dynamic(() => import("../pages/services/surgery/Surgery")),
  prosthetics: dynamic(
    () => import("../pages/services/prosthetics/ProstheticsPage")
  ),
  "teeth-healing": dynamic(
    () => import("../pages/services/teeth-healing/TeethHealing")
  ),
  "teeth-cleaning": dynamic(
    () => import("../pages/services/teeth-cleaning/TeethCleaning")
  ),
  "ortho-correction": dynamic(
    () => import("../pages/services/ortho-correction/OrthoCorrection")
  ),
  vinirs: dynamic(() => import("../pages/services/vinirs/VinirsPage")),
  "teeth-crowns": dynamic(
    () => import("../pages/services/teeth-crowns/TeethCrowns")
  ),
  "tooth-restoration": dynamic(
    () => import("../pages/services/tooth-restoration/ToothRestoration")
  ),
  "zoom-whitening": dynamic(
    () => import("../pages/services/zoom-whitening/ZoomWhitening")
  ),
  "sedation-heal": dynamic(
    () => import("../pages/services/sedation-heal/SedationHeal")
  ),
  "heal-insleep": dynamic(
    () => import("../pages/services/heal-insleep/HealInSleep")
  ),
  "child-hygiene": dynamic(
    () => import("../pages/services/child-hygiene/ChildHygiene")
  ),
  "child-surgery": dynamic(
    () => import("../pages/services/child-surgery/ChildSurgery")
  ),
  // Remove child-teeth and child-sleep as they cause errors
};

interface ServiceWrapperProps {
  slug: string;
}

export default function ServiceWrapper({ slug }: ServiceWrapperProps) {
  const ServiceComponent = serviceComponents[slug];
  
  if (!ServiceComponent) {
    return <div>Service not found</div>;
  }
  
  return (
    <ClientOnly>
      <ServiceComponent />
    </ClientOnly>
  );
}
