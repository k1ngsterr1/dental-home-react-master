import React from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

// Dynamically import the Prices component
const Prices = dynamic(() => import("../../src/pages/prices/PricesPage"));

interface PricesPageProps {
  seoData: {
    title: string;
    description: string;
    keywords: string;
  };
}

export default function PricesPage({ seoData }: PricesPageProps) {
  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourdomain.com/prices" />
      </Head>
      <Prices />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const seoData = {
    title: "Цены | Dental Home - Стоматологические услуги в Ивантеевке",
    description:
      "Цены на стоматологические услуги в клинике Dental Home. Прозрачное ценообразование, доступные цены на лечение зубов.",
    keywords:
      "цены стоматология, стоимость лечения зубов, прайс лист, Dental Home, Ивантеевка",
  };

  return {
    props: {
      seoData,
    },
  };
};
