import { A, Section } from "@root/styles/Global";
import Link from "next/link";
import React from "react";
import { Wrapper, List } from "./organizations.style";

export default function Organizations({ organizations }) {
  const organizationsDisplay = organizations?.map((organization) => {
    const { name, description, id } = organization;

    return (
      <Section>
        <h2>{name}</h2>
        <p>{description}</p>
        <Link href={`/organisations/${id}`} passHref>
          <A>Acceder à {name}</A>
        </Link>
      </Section>
    );
  });

  return (
    <Wrapper>
      <h1>Organisations et entreprises</h1>
      <List>{organizationsDisplay}</List>
    </Wrapper>
  );
}
