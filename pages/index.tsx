import Head from "next/head";
import styles from "../styles/HomeNoAuth.module.scss";
import HeaderNoAuth from "@/src/componets/homeNoAuth/hearderNoAuth";
import PresentationSection from "@/src/componets/homeNoAuth/presentationSection";
import CardsSection from "@/src/componets/homeNoAuth/cardsSection";
import SlideSection from "@/src/componets/homeNoAuth/slideSection";
import { GetStaticProps } from "next";
import courseService, { CourseType } from "@/src/services/courseService";
import { ReactNode, useEffect } from "react";
import Footer from "@/src/componets/commom/footer";
import AOS from "aos";
import "aos/dist/aos.css";

interface IndexPageProps {
  children?: ReactNode;
  course: CourseType[];
}

const HomeNoAuth = function ({ course }: IndexPageProps) {

  // 🚀 Correção: Incluído `AOS` como dependência no `useEffect`
  useEffect(() => {
    AOS.init();
  }, [AOS]); // ✅ Agora está correto

  return (
    <>
      <Head>
        <title>Onebitflix</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:title" content="Onebitflix" key="title" />
        <meta
          name="description" // 🚀 Correção: antes estava "descript", agora corrigido para "description"
          content="Tenha acesso aos melhores conteúdos de programação simples e fácil"
        />
      </Head>
      <main>
        <div className={styles.sectionBackground} data-aos="fade-zoom-in"
        data-aos-duration="1600">
          <HeaderNoAuth />
          <PresentationSection />
        </div>
        <div data-aos="fade-right" data-aos-duration="1200">
          <CardsSection />
        </div>
        <div data-aos="fade-up" data-aos-duration="1350">
          <SlideSection newestCourses={course}/>
        </div>
        <Footer />
      </main>
    </>
  );
};

// 🚀 Mantendo a melhor prática para `getStaticProps`
export const getStaticProps: GetStaticProps = async () => {
  const res = await courseService.getNewestCourses();
  return {
    props: {
      course: res.data,
    },
    revalidate: 3600 * 24, // Revalida a cada 24 horas
  };
};

export default HomeNoAuth;
