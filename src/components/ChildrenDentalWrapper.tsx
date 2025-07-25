import React from "react";
import ChildrenDental from "../../src/pages/children-dental/ChildrenDental";
import ClientOnly from "../../src/components/ClientOnly";

export default function ChildrenDentalWrapper() {
  return (
    <ClientOnly>
      <ChildrenDental />
    </ClientOnly>
  );
}
