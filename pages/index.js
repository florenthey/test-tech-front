import styled from "styled-components";
import Meta from "@root/components/core/Meta";

import { Inner } from "@root/styles/Global";
import { Wrapper } from "./home.style";

const meta = {
  name: "Microbiome studio - Accueil",
  description:
    "Accueil du site web de Microbiome studio pour la gestion de projets ",
};

export default function Home() {
  return (
    <Inner>
      <Meta meta={meta} />
      <Wrapper>
        <h1>MiCROBIOME STUDIO</h1>
        <h2>APPLICATION DE GESTION DE PROJETS</h2>
        <ul>
          <li></li>
        </ul>
      </Wrapper>
    </Inner>
  );
}
