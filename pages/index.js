import styled from "styled-components";
import Meta from "@root/components/core/Meta";

const meta = {
  name: "Microbiome studio - Accueil",
  description:
    "Accueil du site web de Microbiome studio pour la gestion de projets ",
};

export default function Home() {
  return (
    <div>
      <h1>Microbiome Studio</h1>
      <Meta meta={meta} />
      <div>Youpi c'est la home</div>
    </div>
  );
}
