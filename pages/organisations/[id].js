import React from "react";
import Members from "@components/members/Members";
import Meta from "@root/components/core/Meta";
import { getOrganization, getOrganizations } from "@services/organizations";
import {
  Inner,
  WrapperSection,
  Section,
  TitleSection,
} from "@root/styles/Global";
import { prettyName } from "@utils/upperCase";

export default function index({ organization }) {
  const { name, description, members } = organization;

  const meta = {
    name: `Microbiome studio - ${name}`,
    description: `Détails sur l'organisation ${name}`,
  };

  return (
    <Inner>
      <Meta meta={meta} />
      <h1>{prettyName(name)}</h1>
      <WrapperSection gap="10px">
        <Section>
          <h2>Presentation</h2>
          <p>{description}</p>
        </Section>
        <Section gap="15px">
          <h2>L'équipe</h2>
          <Members members={members} />
        </Section>
      </WrapperSection>
    </Inner>
  );
}

export const getStaticPaths = async () => {
  const organizations = await getOrganizations(0, 100).then(
    (response) => response
  );
  const paths = organizations.map((organization) => {
    return {
      params: { id: organization.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const organization = await getOrganization(id);

  return {
    props: { organization },
  };
};
