import Head from "next/head";
import NavBar from "./navbar";
import Footer from "./footer";

export default function Layout({children}){

    return(
        <>
        <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
        <link rel="stylesheet" href="/style.css"/>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        </Head>
        <NavBar />
        {children}
        {/* <Footer /> */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        </>
    )
}