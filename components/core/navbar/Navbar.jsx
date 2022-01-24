import Head from "next/head";
import Link from "next/link";
import React from "react";

import { Wrapper, A } from "./navbar.style";

export default function Navbar() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Wrapper>
        <Link href="/" passHref>
          <A>ACCUEIL</A>
        </Link>
        <Link href="/organisations" passHref>
          <A>ORGANISATIONS</A>
        </Link>
        <Link href="/membres" passHref>
          <A>MEMBRES</A>
        </Link>
        <Link href="/projets" passHref>
          <A>PROJETS</A>
        </Link>
      </Wrapper>
    </>
  );
}
