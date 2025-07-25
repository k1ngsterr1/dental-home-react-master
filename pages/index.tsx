import React from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import AppWrapper from "../src/components/AppWrapper";

interface HomePageProps {
  seoData: {
    title: string;
    description: string;
    keywords: string;
  };
}

export default function HomePage({ seoData }: HomePageProps) {
  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com" />
        <link rel="canonical" href="https://yourdomain.com" />
      </Head>
      <AppWrapper />
    </>
  );
}

// This function gets called at build time
export const getStaticProps: GetStaticProps = async () => {
  // You can fetch data from API or CMS here
  const seoData = {
    title: "Стоматологические клиники в Ивантеевке | Dental Home",
    description:
      "Сеть клиник Dental Home - здоровье зубов и качественное лечение. Запишитесь на прием сейчас",
    keywords:
      "стоматология, Ивантеевка, лечение зубов, имплантация, брекеты, отбеливание",
  };

  return {
    props: {
      seoData,
    },
    // No revalidate property for static export
  };
};
