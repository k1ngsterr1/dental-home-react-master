import React from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

// Dynamically import the Reviews component
const ReviewsPageComponent = dynamic(
  () => import("../../src/pages/reviews/ReviewsPage")
);

interface ReviewsPageProps {
  seoData: {
    title: string;
    description: string;
    keywords: string;
  };
}

export default function ReviewsPage({ seoData }: ReviewsPageProps) {
  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourdomain.com/reviews" />
      </Head>
      <ReviewsPageComponent />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const seoData = {
    title: "Отзывы | Dental Home - Отзывы пациентов стоматологической клиники",
    description:
      "Отзывы пациентов о стоматологической клинике Dental Home в Ивантеевке. Реальные отзывы о качестве лечения и сервисе.",
    keywords:
      "отзывы, пациенты, стоматология, Dental Home, Ивантеевка, качество лечения",
  };

  return {
    props: {
      seoData,
    },
    // No revalidate property for static export
  };
};
