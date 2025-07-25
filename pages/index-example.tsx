import { GetStaticProps } from "next";
import AppWrapper from "../src/components/AppWrapper";

interface HomeProps {
  // Add any props you want to generate at build time
  buildTime: string;
}

export default function Home({ buildTime }: HomeProps) {
  return <AppWrapper />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      buildTime: new Date().toISOString(),
    },
    // Static Site Generation (SSG) - no revalidation for static exports
  };
};
