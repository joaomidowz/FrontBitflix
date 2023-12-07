import { CourseType } from "../../../services/courseService";
import { Button, Col, Container, Row } from "reactstrap";
import Link from "next/link";
import styles from "./styles.module.scss";
import SlideComponent from "../../commom/slideComponent";

interface props {
  newestCourses: CourseType[];
}

const SlideSection = function ({ newestCourses }: props) {
  return (
  <>
    <Container className="d-flex flex-column align-items-center py-5">
      <p className={styles.sectionTitle}>AULAS JÁ DISPONÍVEIS</p>
      <SlideComponent course={newestCourses}/>
      <Link href="/register">
      <Button outline color="light" className={styles.slideSectionBtn}>
        Se cadestre para acessar!
      </Button>
      </Link>
    </Container>
  </>
  )
};

export default SlideSection;
