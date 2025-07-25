import React from "react";
import App from "../App";
import ClientOnly from "./ClientOnly";

export default function AppWrapper() {
  return (
    <ClientOnly>
      <App />
    </ClientOnly>
  );
}
