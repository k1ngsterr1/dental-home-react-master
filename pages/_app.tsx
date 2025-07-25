import type { AppProps } from "next/app";
import Layout from "../src/components/layout/Layout";
import "../src/styles/index.css";
import YandexMetrika from "../src/components/YandexMetrika";

// Import all necessary global CSS files
import "../src/styles/global.css";
import "../src/styles/main/main.css";
import "../src/components/menu/styles/menu_styles.css";
import "../src/components/gallery/styles/gallery_styles.css";
import "../src/components/service_template/styles/services_styles.css";
import "../src/pages/reviews/styles/reviews_page.css";
import "../src/pages/doctors/styles/doctors_styles.css";
import "../src/pages/error/styles/error.css";
import "../src/pages/clinics/styles/clinics_styles.css";
import "../src/pages/privacy/styles/privacy_styles.css";
import "../src/pages/children-dental/styles/children_styles.css";
import "../src/pages/works/styles/works_styles.css";
import "../src/components/clinic_gallery_2/styles/gallery_styles_two.css";
import "../src/components/gallery/styles/pc_gallery_styles.css";
import "../src/components/header/styles/header_styles.css";
import "../src/components/clinic_gallery_1/styles/clinic_gallery_one.css";
import "../src/components/reviews/styles/reviews_pc_gallery.css";
import "../src/components/reviews/styles/reviews_gallery.css";
import "../src/pages/prices/styles/prices_styles.css";
import "../src/components/footer/styles/footer_styles.css";

// Import Swiper CSS
import "swiper/css/bundle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <YandexMetrika />
      <Component {...pageProps} />
    </Layout>
  );
}
