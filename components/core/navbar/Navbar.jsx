import Link from "next/link";
import React from "react";
import { A } from "@root/styles/Global";

import { Wrapper } from "./navbar.style";

export default function Navbar() {
  return (
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
        <A>PROJECTS</A>
      </Link>
    </Wrapper>
  );
}
