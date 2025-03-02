import { Button, Container } from "reactstrap";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from 'next/image';

const HeaderNoAuth = function () {
    return  (
    <>
        <div className={styles.ctaSection}>
            <Image src="/homeNoAuth/logoCta.png" 
            alt="logoCta" 
            className={styles.imgCta}/>
            <p>Se cadastre para ter acesso aos cursos</p>
            <Image src="/homeNoAuth/logoCta.png" 
            alt="logoCta" 
            className={styles.imgCta}/>
        </div>
        <Container className={styles.nav}>
            <Image src="/logoOnebitflix.svg" alt="logoOnebitflix" className={styles.imgLogoNav}/>
            <div>
                <Link href="/login">
                <Button className={styles.navBtn} outline>Entrar</Button>
                </Link>
                <Link href="/register">
                <Button className={styles.navBtn} outline>Quero fazer parte</Button>
                </Link>
            </div>
        </Container>
    </>
    );
};

export default HeaderNoAuth;