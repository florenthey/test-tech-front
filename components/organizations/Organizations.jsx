import { A, Section, WrapperSection } from "@root/styles/Global";
import { prettyName } from "@utils/upperCase";
import Link from "next/link";
import React from "react";
import { Wrapper } from "./organizations.style";

export default function Organizations({ organizations }) {
  const organizationsDisplay = organizations?.map((organization) => {
    const { name, description, id } = organization;

    return (
      <Section>
        <h2>
          <Link href={`/organisations/${id}`} passHref>
            <a> {prettyName(name)}</a>
          </Link>
        </h2>
        <p>{description}</p>
        <Link href={`/organisations/${id}`} passHref>
          <A>Accedér à {prettyName(name)}</A>
        </Link>
      </Section>
    );
  });

  return (
    <Wrapper>
      <h1>Organisations et entreprises</h1>
      <WrapperSection gap="40px">{organizationsDisplay}</WrapperSection>
    </Wrapper>
  );
}
