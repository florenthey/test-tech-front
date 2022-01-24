import Meta from "@root/components/core/Meta";

import { A, Inner, Section } from "@root/styles/Global";
import {
  Title,
  Subtitle,
  Wrapper,
  PagesSection,
  PageSection,
} from "./home.style";
import Link from "next/link";
import Image from "next/image";

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
    <Link href={path} passHref>
      <A>
        <PageSection>
          <Image src={img} height="190px" width="285px" />
          <p></p>Accéder à la liste des {title}
        </PageSection>
      </A>
    </Link>
  );
});

export default function Home() {
  return (
    <Inner>
      <Section id="home" background="unset" alignItems="center">
        <Meta meta={meta} />
        <Wrapper>
          <Title>MiCROBIOME STUDIO</Title>
          <Subtitle>APPLICATION DE GESTION DE PROJETS</Subtitle>
          <PagesSection>{pageSectionsDisplay}</PagesSection>
        </Wrapper>
      </Section>
    </Inner>
  );
}
