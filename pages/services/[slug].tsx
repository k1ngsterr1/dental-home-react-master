import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import ServiceWrapper from "../../src/components/ServiceWrapper";

interface ServicePageProps {
  serviceData: {
    slug: string;
    title: string;
    description: string;
    keywords: string;
  };
}

export default function ServicePage({ serviceData }: ServicePageProps) {
  return (
    <>
      <Head>
        <title>{serviceData.title}</title>
        <meta name="description" content={serviceData.description} />
        <meta name="keywords" content={serviceData.keywords} />
        <meta property="og:title" content={serviceData.title} />
        <meta property="og:description" content={serviceData.description} />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href={`https://yourdomain.com/services/${serviceData.slug}`}
        />
      </Head>
      <ServiceWrapper slug={serviceData.slug} />
    </>
  );
}

// Generate paths for all services
export const getStaticPaths: GetStaticPaths = async () => {
  // List of all service slugs
  const services = [
    'diagnostic',
    'hygiene',
    'whitening',
    'implants',
    'surgery',
    'prosthetics',
    'teeth-healing',
    'teeth-cleaning',
    'ortho-correction',
    'vinirs',
    'teeth-crowns',
    'tooth-restoration',
    'zoom-whitening',
    'sedation-heal',
    'heal-insleep',
    'child-hygiene',
    'child-surgery',
    'child-teeth',
    'child-sleep'
  ];

  const paths = services.map((service) => ({
    params: { slug: service },
  }));

  return {
    paths,
    fallback: false,
  };
};

// Generate props for each service
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;

  // Service-specific SEO data
  const servicesSeoData: Record<string, any> = {
    diagnostic: {
      title: "Диагностика зубов в Ивантеевке | Dental Home",
      description:
        "Современная диагностика зубов: рентген, КТ, ОПТГ. Профессиональное оборудование и опытные врачи.",
      keywords: "диагностика зубов, рентген зубов, КТ зубов, ОПТГ, Ивантеевка",
    },
    hygiene: {
      title: "Профилактика и гигиена зубов в Ивантеевке | Dental Home",
      description:
        "Профессиональная гигиена зубов, профилактические осмотры. Современные методы чистки зубов.",
      keywords:
        "гигиена зубов, профилактика, профессиональная чистка, Ивантеевка",
    },
    whitening: {
      title: "Отбеливание зубов в Ивантеевке | Dental Home",
      description:
        "Профессиональное отбеливание зубов. Безопасные методы для красивой улыбки.",
      keywords: "отбеливание зубов, белые зубы, красивая улыбка, Ивантеевка",
    },
    implants: {
      title: "Имплантация зубов в Ивантеевке | Dental Home",
      description:
        "Качественная имплантация зубов с пожизненной гарантией. Современные технологии и материалы.",
      keywords: "имплантация зубов, импланты, восстановление зубов, Ивантеевка",
    },
    surgery: {
      title: "Хирургическая стоматология в Ивантеевке | Dental Home",
      description:
        "Хирургические услуги в стоматологии: удаление зубов, операции на деснах, имплантация.",
      keywords:
        "хирургическая стоматология, удаление зубов, операции, Ивантеевка",
    },
    prosthetics: {
      title: "Протезирование зубов в Ивантеевке | Dental Home",
      description:
        "Современное протезирование зубов: коронки, мостовидные протезы, съемные протезы.",
      keywords:
        "протезирование зубов, коронки, мостовидные протезы, Ивантеевка",
    },
    "teeth-healing": {
      title: "Лечение зубов в Ивантеевке | Dental Home",
      description:
        "Качественное лечение зубов: кариес, пульпит, периодонтит. Современные методы лечения.",
      keywords: "лечение зубов, кариес, пульпит, периодонтит, Ивантеевка",
    },
    "teeth-cleaning": {
      title: "Профессиональная чистка зубов в Ивантеевке | Dental Home",
      description:
        "Профессиональная чистка зубов Air Flow, ультразвуковая чистка. Здоровые зубы и десны.",
      keywords: "чистка зубов, Air Flow, ультразвуковая чистка, Ивантеевка",
    },
    "ortho-correction": {
      title: "Исправление прикуса в Ивантеевке | Dental Home",
      description:
        "Ортодонтическое лечение: брекеты, элайнеры, исправление прикуса у детей и взрослых.",
      keywords:
        "исправление прикуса, брекеты, элайнеры, ортодонтия, Ивантеевка",
    },
    vinirs: {
      title: "Виниры в Ивантеевке | Dental Home",
      description:
        "Эстетические виниры для красивой улыбки. Керамические и композитные виниры.",
      keywords:
        "виниры, эстетическая стоматология, красивая улыбка, Ивантеевка",
    },
    "teeth-crowns": {
      title: "Коронки на зубы в Ивантеевке | Dental Home",
      description:
        "Установка коронок на зубы: металлокерамические, циркониевые, керамические коронки.",
      keywords:
        "коронки на зубы, металлокерамика, цирконий, керамика, Ивантеевка",
    },
    "tooth-restoration": {
      title: "Восстановление зубов в Ивантеевке | Dental Home",
      description:
        "Реставрация зубов: пломбы, вкладки, восстановление формы и функции зубов.",
      keywords:
        "восстановление зубов, реставрация, пломбы, вкладки, Ивантеевка",
    },
    "zoom-whitening": {
      title: "Отбеливание Zoom в Ивантеевке | Dental Home",
      description:
        "Профессиональное отбеливание зубов системой Zoom. Быстрый и безопасный результат.",
      keywords:
        "отбеливание Zoom, профессиональное отбеливание, белые зубы, Ивантеевка",
    },
    "sedation-heal": {
      title: "Лечение зубов под седацией в Ивантеевке | Dental Home",
      description: "Комфортное лечение зубов под седацией. Без боли и стресса.",
      keywords:
        "лечение под седацией, без боли, комфортное лечение, Ивантеевка",
    },
    "heal-insleep": {
      title: "Лечение зубов во сне в Ивантеевке | Dental Home",
      description: "Лечение зубов под общим наркозом. Безопасно и комфортно.",
      keywords:
        "лечение во сне, общий наркоз, безболезненное лечение, Ивантеевка",
    },
    "child-hygiene": {
      title: "Детская гигиена зубов в Ивантеевке | Dental Home",
      description:
        "Профессиональная гигиена зубов для детей. Профилактика кариеса у детей.",
      keywords:
        "детская гигиена, профилактика у детей, детская стоматология, Ивантеевка",
    },
    "child-surgery": {
      title: "Детская хирургическая стоматология в Ивантеевке | Dental Home",
      description:
        "Хирургические услуги для детей: удаление зубов, операции в полости рта.",
      keywords:
        "детская хирургия, удаление зубов у детей, детский стоматолог, Ивантеевка",
    },
    "child-teeth-healing": {
      title: "Лечение зубов у детей в Ивантеевке | Dental Home",
      description:
        "Лечение молочных и постоянных зубов у детей. Современные методы детской стоматологии.",
      keywords:
        "лечение зубов у детей, детская стоматология, молочные зубы, Ивантеевка",
    },
  };

  const serviceData = {
    slug,
    ...(servicesSeoData[slug] || {
      title: `Стоматологические услуги в Ивантеевке | Dental Home`,
      description: "Качественные стоматологические услуги в Ивантеевке",
      keywords: "стоматология, Ивантеевка, лечение зубов",
    }),
  };

  return {
    props: {
      serviceData,
    },
  };
};
