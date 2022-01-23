import Link from "next/link";
import React from "react";
import { Wrapper } from "./navbar.style";

export default function Navbar() {
  return (
    <Wrapper>
      <Link href="/" passHref>
        <a>Accueil</a>
      </Link>
      <Link href="/organisations" passHref>
        <a>Organisations</a>
      </Link>
      <Link href="/membres" passHref>
        <a>Membres</a>
      </Link>
      <Link href="/projets" passHref>
        <a>Projets</a>
      </Link>
    </Wrapper>
  );
}
