import { Container } from "reactstrap";
import styles from "./styles.module.scss";
import Image from 'next/image';


const Footer = function () {
    return (
        <>
        <Container className={styles.footer}>
            <Image src="/logoOnebitcode.svg" alt="logoFooter" className={styles.footerLogo} />
            <a href="http://onebitcode.com" target={"_blank"} className={styles.footerLink}
            >ONEBITCODE.COM</a>
        </Container>
        </>
    )
};

export default Footer