import Link from "next/link";
import React from "react";
import { Wrapper, List, Card } from "./organizations.style";

export default function Organizations({ organizations }) {
  const organizationsDisplay = organizations?.map((organization) => {
    const { name, description, id } = organization;
    const prettyName = name.toLowerCase().trim().replace(/\s/g, "-");

    return (
      <Card>
        <h2>{name}</h2>
        <p>{description}</p>
        <Link
          // as={`/organisations/${id}/${prettyName}`}
          href={`/organisations/${id}`}
          passHref
        >
          <a>Acceder à la l'organisation</a>
        </Link>
      </Card>
    );
  });

  return (
    <Wrapper>
      <h1>Organisations et entreprises</h1>
      <List>{organizationsDisplay}</List>
    </Wrapper>
  );
}
