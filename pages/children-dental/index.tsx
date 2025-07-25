import React from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

// Dynamically import the ChildrenDental wrapper component
const ChildrenDentalWrapper = dynamic(
  () => import("../../src/components/ChildrenDentalWrapper")
);

interface ChildrenDentalPageProps {
  seoData: {
    title: string;
    description: string;
    keywords: string;
  };
}

export default function ChildrenDentalPage({
  seoData,
}: ChildrenDentalPageProps) {
  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourdomain.com/children-dental" />
      </Head>
      <ChildrenDentalWrapper />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const seoData = {
    title:
      "Детская стоматология | Dental Home - Лечение зубов у детей в Ивантеевке",
    description:
      "Детская стоматология в Ивантеевке. Профессиональное лечение зубов у детей, безболезненные процедуры, современные методы.",
    keywords:
      "детская стоматология, лечение зубов у детей, детский стоматолог, Ивантеевка, молочные зубы",
  };

  return {
    props: {
      seoData,
    },
    // No revalidate property for static export
  };
};
