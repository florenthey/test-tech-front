import { getMember, getMembers } from "@services/members";
import React from "react";

export default function index({ member }) {
  console.log("MEMBER", member);
  const { last_name, first_name, email, organization } = member;
  return (
    <div>
      <h1>{`${last_name} ${first_name}`}</h1>
      <p>contact: {email}</p>
      <p>entreprise: {organization.name}</p>
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
