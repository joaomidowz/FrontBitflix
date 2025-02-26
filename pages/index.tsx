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
  // 🚀 Correção: Removendo `AOS` do array de dependências do `useEffect`
  useEffect(() => {
    AOS.init();
  }, []); // ✅ Agora não gera warnings

  return (
    <>
      <Head>
        <title>Onebitflix</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:title" content="Onebitflix" key="title" />
        <meta
          name="description"
          content="Tenha acesso aos melhores conteúdos de programação simples e fácil"
        />
      </Head>
      <main>
        <div
          className={styles.sectionBackground}
          data-aos="fade-zoom-in"
          data-aos-duration="1600"
        >
          <HeaderNoAuth />
          <PresentationSection />
        </div>
        <div data-aos="fade-right" data-aos-duration="1200">
          <CardsSection />
        </div>
        <div data-aos="fade-up" data-aos-duration="1350">
          <SlideSection newestCourses={course} />
        </div>
        <Footer />
      </main>
    </>
  );
};

// 🚀 Correção: Verificando se `res` e `res.data` existem antes de usá-los
export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await courseService.getNewestCourses();

    if (!res || !res.data) {
      throw new Error("Erro ao buscar cursos.");
    }

    return {
      props: {
        course: res.data,
      },
      revalidate: 3600 * 24, // Revalida a cada 24 horas
    };
  } catch (error) {
    console.error("Erro ao buscar cursos:", error);

    return {
      props: {
        course: [], // ✅ Retorna um array vazio para evitar erro de `undefined`
      },
      revalidate: 3600 * 24,
    };
  }
};

export default HomeNoAuth;
