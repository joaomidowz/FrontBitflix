import styles from "./styles.module.scss";
import { CourseType } from "../../../services/courseService";
import Image from 'next/image';

interface props {
  course: CourseType
}

const SlideCard = function ({ course }: props) {
  return (
  <>
    <div className={styles.slide}>
      <Image src={`${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl}`} alt={course.name} className={styles.slideImg} />
      <p className={styles.slideTitle}>{course.name}</p>
      <p className={styles.slideDesc}>{course.synopsis}</p>
    </div>
  </>
  )
};

export default SlideCard;