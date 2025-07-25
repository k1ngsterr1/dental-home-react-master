import React from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import ClientOnly from "../../src/components/ClientOnly";

// Dynamically import the About component with SSR disabled
const About = dynamic(() => import("../../src/pages/about/About"), {
  ssr: false,
});

interface AboutPageProps {
  seoData: {
    title: string;
    description: string;
    keywords: string;
  };
}

export default function AboutPage({ seoData }: AboutPageProps) {
  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourdomain.com/about" />
      </Head>
      <ClientOnly>
        <About />
      </ClientOnly>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const seoData = {
    title: "О нас | Dental Home - Стоматологическая клиника в Ивантеевке",
    description:
      "Dental Home - современная стоматологическая клиника в Ивантеевке. Профессиональные врачи, современное оборудование, качественные услуги.",
    keywords:
      "стоматологическая клиника, Dental Home, о нас, врачи стоматологи, Ивантеевка",
  };

  return {
    props: {
      seoData,
    },
    // No revalidate property for static export
  };
};
