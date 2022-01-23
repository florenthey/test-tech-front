import Meta from "@root/components/core/Meta";

import { A, Inner } from "@root/styles/Global";
import { Wrapper, PagesSection, PageSection } from "./home.style";
import Link from "next/link";
import { prettyName } from "@root/utils/upperCase";

const meta = {
  name: "Microbiome studio - Accueil",
  description:
    "Accueil du site web de Microbiome studio pour la gestion de projets ",
};

const pagesSections = [
  {
    title: "organisations",
    path: "/organisations",
    img: "/images/home/organization.jpg",
  },
  { title: "membres", path: "/membres", img: "/images/home/member.jpg" },
  { title: "projets", path: "/projets", img: "/images/home/project.jpg" },
];

const pageSectionsDisplay = pagesSections.map((pageSection) => {
  const { title, img, path } = pageSection;

  return (
    <PageSection>
      <h3>{prettyName(title)}</h3>
      <img src={img} />
      <Link href={path} passHref>
        <A>Accéder à la liste des {title}</A>
      </Link>
    </PageSection>
  );
});

export default function Home() {
  return (
    <Inner>
      <Meta meta={meta} />
      <Wrapper>
        <h1>MiCROBIOME STUDIO</h1>
        <h2>APPLICATION DE GESTION DE PROJETS</h2>
        {/* Replace by a carousel of the latest projects */}
        <PagesSection>{pageSectionsDisplay}</PagesSection>
      </Wrapper>
    </Inner>
  );
}
