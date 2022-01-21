import React from "react";
import Members from "@components/members/Members";
import Meta from "@root/components/core/Meta";
import { getOrganization, getOrganizations } from "@services/organizations";

export default function index({ organization }) {
  const { name, description, members } = organization;
  const meta = {
    name: `Microbiome studio - ${name}`,
    description: `Détails sur l'organisation ${name}`,
  };

  return (
    <div>
      <Meta meta={meta} />
      <h1>{name}</h1>
      <p>{description}</p>
      <p>membres:</p>
      <Members members={members} />
    </div>
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
