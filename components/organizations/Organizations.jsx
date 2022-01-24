import { A, Section, Text, WrapperSection } from "@root/styles/Global";
import { prettyName } from "@utils/upperCase";
import Link from "next/link";
import React from "react";
import { Wrapper } from "./organizations.style";

export default function Organizations({ organizations }) {
  const organizationsDisplay = organizations?.map((organization) => {
    const { name, description, id } = organization;

    return (
      <Link href={`/organisations/${id}`} passHref>
        <a>
          <Section
            boxShadow="8px 8px 2px 1px rgba(0, 0, 255, 0.2)"
            transition="0.2s"
            hoverBoxShadow="12px 12px 2px 1px rgba(0, 0, 255, 0.2)"
          >
            <h2>
              <p> {prettyName(name)}</p>
            </h2>
            <p>{description}</p>
            <Text color="#ec5990">Accéder à {prettyName(name)}</Text>
          </Section>
        </a>
      </Link>
    );
  });

  return (
    <Wrapper>
      <h1>Organisations et entreprises</h1>
      <WrapperSection gap="40px">{organizationsDisplay}</WrapperSection>
    </Wrapper>
  );
}
