import React from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

// Dynamically import the Contacts component
const ContactsComponent = dynamic(
  () => import("../../src/pages/contacts/ContactsPage")
);

interface ContactsPageProps {
  seoData: {
    title: string;
    description: string;
    keywords: string;
  };
}

export default function ContactsPage({ seoData }: ContactsPageProps) {
  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourdomain.com/contacts" />
      </Head>
      <ContactsComponent />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const seoData = {
    title: "Контакты | Dental Home - Стоматологическая клиника в Ивантеевке",
    description:
      "Контакты стоматологической клиники Dental Home в Ивантеевке: адрес, телефон, часы работы, запись на прием.",
    keywords:
      "контакты, Dental Home, стоматология Ивантеевка, адрес, телефон, запись",
  };

  return {
    props: {
      seoData,
    },
    // No revalidate property for static export
  };
};
