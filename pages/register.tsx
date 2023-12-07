import HeaderGeneric from "@/src/componets/commom/headerGeneric";
import styles from "../styles/registerLogin.module.scss";
import Head from "next/head";

const Register = function () {
    return (
        <>
        <Head>
            <title>OneBitflix - Registro</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        </Head>
        <main>
            <HeaderGeneric logoUrl="/" btnUrl="/login" btnContent="Quero fazer login"/>
        </main>
        </>
    )
}

export default Register