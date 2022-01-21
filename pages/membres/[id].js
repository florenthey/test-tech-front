import Meta from "@root/components/core/Meta";
import { getMember, getMembers } from "@services/members";
import React from "react";

export default function index({ member }) {
  const { last_name, first_name, email, organization } = member;
  const organizationName = organization.name;

  const meta = {
    name: `Microbiome studio - ${last_name} ${first_name}`,
    description: `Profil de ${last_name} ${first_name}, membre de l'organisation ${organizationName}`,
  };

  return (
    <div>
      <Meta meta={meta} />
      <h1>{`${last_name} ${first_name}`}</h1>
      <p>contact: {email}</p>
      <p>entreprise: {organizationName}</p>
    </div>
  );
}

export const getStaticPaths = async () => {
  const members = await getMembers(0, 100).then((response) => response);
  const paths = members.map((member) => {
    return {
      params: { id: member.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const member = await getMember(id);

  return {
    props: { member },
  };
};
