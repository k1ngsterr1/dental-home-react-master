import React from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

// Dynamically import the Doctors component
const Doctors = dynamic(() => import("../../src/pages/doctors/DoctorsPage"));

interface DoctorsPageProps {
  seoData: {
    title: string;
    description: string;
    keywords: string;
  };
}

export default function DoctorsPage({ seoData }: DoctorsPageProps) {
  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourdomain.com/doctors" />
      </Head>
      <Doctors />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const seoData = {
    title: "Врачи | Dental Home - Стоматологи в Ивантеевке",
    description:
      "Наши врачи-стоматологи в Ивантеевке: опытные специалисты с многолетним стажем. Профессиональное лечение зубов.",
    keywords:
      "врачи стоматологи, стоматологи Ивантеевка, команда врачей, Dental Home",
  };

  return {
    props: {
      seoData,
    },
    // No revalidate property for static export
  };
};
