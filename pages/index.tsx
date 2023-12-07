import Head from "next/head";
import styles from "../styles/HomeNoAuth.module.scss";
import HeaderNoAuth from "@/src/componets/homeNoAuth/hearderNoAuth";
import PresentationSection from "@/src/componets/homeNoAuth/presentationSection";
import CardsSection from "@/src/componets/homeNoAuth/cardsSection";
import SlideSection from "@/src/componets/homeNoAuth/slideSection";
import { GetStaticProps } from "next";
import courseService, { CourseType } from "@/src/services/courseService";
import { ReactNode } from "react";
import Footer from "@/src/componets/commom/footer";

interface IndexPageProps {
  children?: ReactNode;
  course: CourseType[];
}

const HomeNoAuth = function ({ course }: IndexPageProps) {
  return (
    <>
      <Head>
        <title>Onebitflix</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:title" content="Onebitflix" key="title" />
        <meta
          name="descript"
          content="Tenha acesso aos melhores conteúdos de programação simples e fácil"
        />
      </Head>
      <main>
        <div className={styles.sectionBackground}>
          <HeaderNoAuth />
          <PresentationSection />
        </div>
        <div>
          <CardsSection />
          <SlideSection newestCourses={course} />
          <Footer/>
        </div>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await courseService.getNewestCourses();
  return {
    props: {
      course: res.data,
    },
    revalidate: 3600 * 24
  };
};

export default HomeNoAuth;
